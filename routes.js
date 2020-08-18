const express = require("express");
const bcrypt = require("bcrypt");
const { body, validationResult, check } = require("express-validator");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Auth Middleware
const auth = require("./middlewares/auth");

// User Model
const User = require("./src/graphql/models/User");

// EndPoint - auth/register
// Req - POST
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email format"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Minimum 5 characters are required"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    User.findOne({ email }).then((user) => {
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User Already Exists" }] });
      }

      const newUser = new User({
        email,
        password,
      });

      // Password Hashing
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;

          // Save the Hashed Password
          newUser.password = hash;

          newUser.save().then((user) => {
            // Create the JWT Token
            const payload = {
              id: user.id,
            };

            jwt.sign(payload, process.env.jwtSecret, (err, token) => {
              if (err) throw err;
              res.status(200).json({
                token,
                user: {
                  id: user.id,
                  email: user.email,
                },
              });
            });
          });
        });
      });
    });
  }
);

// Endpoint - /auth/login
router.post(
  "/login",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").notEmpty().withMessage("Password Cannot be empty"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    User.findOne({ email }).then((user) => {
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "No Such User Exists" }] });
      }

      // Validate the password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch)
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid Credentials" }] });

        // Create the JWT Token
        const payload = {
          id: user.id,
        };

        jwt.sign(payload, process.env.jwtSecret, (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
            user: {
              id: user.id,
              email: user.email,
            },
          });
        });
      });
    });
  }
);

// EndPoint /auth/user - GET
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => {
      res.send(user);
    });
});

module.exports = router;
