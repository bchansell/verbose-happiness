import CodedError from "./CodedError";

export default class DbNotInitialisedError extends CodedError { 
  constructor(message?: string ) {
    const error = message || 'Database connection not initialised'
    super(error, 'DBA001');
  }
}