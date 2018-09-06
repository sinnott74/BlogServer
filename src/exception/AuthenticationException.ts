import ApplicationException from "./ApplicationException";

class AuthenticationException extends ApplicationException {
  constructor(message?: string) {
    if (!message) {
      message = "Authentication Failed";
    }
    super(message, 401);
  }
}

export default AuthenticationException;
