export const errorHandler = (statusCode, massage) => {
  const error = new Error();
  error.statuscode = statusCode;
  error.massage = massage;
  return error;
};
