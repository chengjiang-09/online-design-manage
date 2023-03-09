import JWT, {
  JsonWebTokenError,
  Jwt,
  JwtPayload,
  TokenExpiredError,
} from "jsonwebtoken";
import config from "../configs/config";

export function sign(data: any) {
  return JWT.sign(
    {
      payload: data,
    },
    config.jwt.jwt_sercret as string,
    {
      expiresIn: config.jwt.jwt_expire,
    }
  );
}

export function verify(token: string): {
  userData: Jwt | JwtPayload | string | null;
  error: TokenExpiredError | JsonWebTokenError | null;
} {
  try {
    const userData = JWT.verify(token, config.jwt.jwt_sercret as string);
    return {
      userData: userData,
      error: null,
    };
  } catch (err) {
    return {
      userData: null,
      error: err as TokenExpiredError | JsonWebTokenError | null,
    };
  }
}

export default {
  sign,
  verify,
};
