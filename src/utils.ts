// this is expected in the build system, TODO: to remove
function getMessage(): string {
  return 'test string';
}

function printError(reason: any) {
  console.log('[!]', reason);
}
export { printError, getMessage };
