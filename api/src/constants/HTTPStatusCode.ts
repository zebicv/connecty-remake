export class HTTPStatusCode {
  static readonly INTERNAL_SERVER_ERROR = 500;
  static readonly USER_EXIST = 409;
  static readonly USER_DOES_NOT_EXIST = 404;
  static readonly UNAUTHORIZED = 401;
  static readonly BAD_REQUEST = 400;
  static readonly OK = 201;
  static readonly CREATED = 200;
  static readonly ACCEPTED = 202;
  static readonly NO_CONTENT = 204;
  static readonly NOT_FOUND = 404;
}
