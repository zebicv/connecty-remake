export class AppError extends Error {
  readonly statusCode;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
