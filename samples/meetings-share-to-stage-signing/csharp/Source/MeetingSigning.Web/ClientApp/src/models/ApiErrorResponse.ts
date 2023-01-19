export enum ErrorCode {
  Unknown = 'Unknown',
  Unauthorized = 'Unauthorized',
  Forbidden = 'Forbidden',
  InvalidOperation = 'InvalidOperation',
  ArgumentNotValid = 'ArgumentNotValid',
  UserNotFound = 'UserNotFound',
  DocumentNotFound = 'DocumentNotFound',
  SignatureNotFound = 'SignatureNotFound',
  AuthConsentRequired = 'AuthConsentRequired',
  GraphServiceException = 'GraphServiceException',
}

export type ApiErrorResponse = {
  Message: string | undefined;
  ErrorCode: ErrorCode;
  Time: string;
};
