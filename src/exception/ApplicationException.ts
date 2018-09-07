class ApplicationException extends Error {
  status: number;
  message: string;

  constructor(message: string, status?: number) {
    super(message);
    this.name = this.constructor.name;
    this.status = status || 500;
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      name: this.name,
      status: this.status,
      message: this.message
    };
  }
}

export default ApplicationException;
