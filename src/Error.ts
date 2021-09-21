// at the end I don't use this, but error codes would be useful
//   in a large program

type errorType = "OBJECT_INACCESSIBLE" | "OBJECT_ALREADY_EXISTS";

// usage: `throw Error("definedErrorType");`
// TODO: include more information in error
class Error {
  type: errorType;
  constructor(type: errorType)
  {
    this.type = type;
  }
}

export {Error, errorType};
