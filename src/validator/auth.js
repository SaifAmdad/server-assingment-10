const { joseKeyUrl } = require("../secrets");

const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");

const isLogin = async (req, res, next) => {
  try {
    const token = req.headers?.auth;

    const JWTS = createRemoteJWKSet(new URL(joseKeyUrl));

    const { payload } = await jwtVerify(token, JWTS, {});
    if (!payload) {
      return res.status(300).send({
        message: "not verified",
      });
    }

    // id as string
    req.userId = payload.id;
    req.role = payload.role;

    next();
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `${error._message} auth-Error`,
    });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const role = req.role;
    const userId = req.userId;
    if (role !== "admin") {
      return res.status(401).send({
        message: "Unauthorized !",
      });
    }

    // id as string
    req.userId = userId;

    next();
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `${error._message} auth-Error-Admin`,
    });
  }
};

module.exports = { isLogin, isAdmin };
