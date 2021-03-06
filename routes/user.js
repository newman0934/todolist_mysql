const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs")
const db = require("../models");
const User = db.User;


// 登入頁面
router.get("/login", (req, res) => {
  let errors = [];
  let errorMessages = req.flash("error")[0];
  if (!errorMessages) {
    res.render("login");
  } else {
    errors.push({
      message: errorMessages
    });
    res.render("login", {
      errors
    });
  }
});

// 登入檢查
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true,
  })(req, res, next)
})

// 註冊頁面
router.get("/register", (req, res) => {
  res.render("register");
});

// 註冊檢查
router.post('/register', (req, res) => {
  const {
    name,
    email,
    password,
    password2
  } = req.body

  let errors = []

  if (!name || !email || !password || !password2) {
    errors.push({
      message: '所有欄位都是必填'
    })
  }

  if (password !== password2) {
    errors.push({
      message: '密碼輸入錯誤'
    })
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    })
  } else {
    User.findOne({
      where: {
        email: email
      }
    }).then(user => {
      if (user) {
        req.flash("warning_msg", "這個email已經被註冊")
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        })
      } else {
        const newUser = new User({
          name,
          email,
          password
        })
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash

            newUser
              .save()
              .then(user => {
                res.redirect('/')
              })
              .catch(err => console.log(err))
          })
        )
      }
    })
  }
})

// 登出
router.get("/logout", (req, res) => {
  req.logout()
  res.redirect("/users/login")
});
module.exports = router;