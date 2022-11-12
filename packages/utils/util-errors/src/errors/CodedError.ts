export default class CodedError extends Error { 
  private readonly _errorCode: string;

  get ErrorCode() {
    return this._errorCode;
  }
  
  constructor(message: string, errorCode: string) {
    super(message);
    this._errorCode = errorCode
  }
}