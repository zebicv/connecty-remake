export default class RESTResponse {
  public static createResponse(
    success: boolean,
    message: string,
    data: object
  ): APIResponse {
    return { success, message, data };
  }
}

export interface APIResponse {
  success: boolean;
  message: string;
  data: object;
}
