export enum RequestStates {
  LOADING,
  SUCCESS,
  ERROR,
}

export interface RequestError {
  message: string;
}
