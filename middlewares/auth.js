const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.headers["x-auth-token"];

  if (!token) {
    return res.status(401).json({ msg: "No Token, Authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Invalid Token" });
  }
}

module.exports = auth;
