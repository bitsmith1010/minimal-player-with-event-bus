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

export {requireDefined, requireUndefined, getMessage, Event};
