const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

  const token =
   req.headers.authorization;

  if (!token) {

    return res.json({
      message: "No Token",
    });

  }

  try {

    const verified = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = verified;

    next();

  } catch (err) {

    res.json({
      message: "Invalid Token",
    });

  }

};

module.exports = verifyToken;