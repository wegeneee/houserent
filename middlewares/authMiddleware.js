const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log(req.headers);

    // Validate the token
    if (!authHeader) {
      return res.status(401).send({
        message: "auth failed: Authorization header not found",
        success: false
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("The decoded token is: ", decoded);

    req.body.userId = decoded.userId;
    req.user = decoded; // Add the decoded user to the request object

    next();
  } catch (error) {
    return res.status(401).send({
      message: `auth failed: ${error.message}`,
      success: false
    });
  }
};