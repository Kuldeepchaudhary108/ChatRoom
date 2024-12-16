class ApiResponse {
  constructor(statusCode, user, message = "success") {
    this.statusCode = statusCode;
    this.user = user;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
