function getMessage(): string {
  return 'message 1';
}

function requireDefined<Type>(object: Type): Type
{
  if (object === undefined) throw Error("OBJECT_INACCESSIBLE");
  return object;
}
function requireUndefined<Type>(object: Type): undefined 
{
  if (object !== undefined) throw Error("OBJECT_ALREADY_EXISTS");
  return undefined;
}

interface Event {
  readonly type: string;
  readonly message: string;
}
/* at the moment I decided that an interface is sufficient until
   there would be missing something more complex
  private _message!: string;
  private _type!: string;
//  constructor(type: string)
//  {
//    // I have several ideas of a way to use typing
//    // to check event types, but at the moment I
//    // will simply use strings and the programmer
//    // should use enums etc. in order to be sure
//    // that there is no writting error in Event.type
//    this.type = type;
//  }
  get message(): string
  {
    return this._message;
  }

  set message(message: string)
  {
    this._message = message;
  }

  get type(): string
  {
    return this._type;
  }

  // TODO: this should be limited to the range of values
  //  of eventBus.getEventTypes(). I will return to this
  //  if there is time
  set type(type: string)
  {
    this._type = type;
  }
}
*/

export {requireDefined, requireUndefined, getMessage, Event};
