const JWTService = require("../services/JWTServices");
const User = require("../Models/user");
const UserDTO = require("../dto/user");

const auth = async (req, res, next) => {
  // 1. refresh access token validation
  try {
    const { refreshToken, accessToken } = req.cookies;

    if (!refreshToken || !accessToken) {
      const error = {
        status: 401,
        message: "unauthorized",
      };
      return next(error);
    }
    let _id;
    try {
      _id = JWTService.verifyAccessToken(accessToken);
    } catch (error) {
      return next(error);
    }

    let user;
    try {
      user = await User.findOne({ _id: _id });
    } catch (error) {
      return next(error);
    }
    const userDto = new UserDTO(user);
    req.user = userDto;

    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = auth;
