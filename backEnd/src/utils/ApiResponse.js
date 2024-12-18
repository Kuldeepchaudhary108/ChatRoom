class ApiResponse {
  constructor(statusCode, payload, message = "success") {
    this.statusCode = statusCode;
    Object.assign(this, payload);
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
