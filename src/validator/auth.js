const isLogin = async (req, res, next) => {
  try {
    const token = req.headers?.auth;
    // const JWTS = createRemoteJWKSet(new URL(joseKeyUrl));

    // const { payload } = await jwtVerify(token, JWTS, {});

    // if (!payload) {
    //   return res.status(300).send({
    //     message: "not verified",
    //   });
    // }

    // id as string
    req.userId = payload.id;

    next();
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error._message,
    });
  }
};

module.exports = { isLogin };
