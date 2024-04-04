export function Product() {
  this.id = ''
}

// Export module
const func1 = () => {
  console.log('Func 1');
}
const func2 = () => {
  console.log('Func 2');
}
export { func1, func2 };


// Export default
function defaultFunc() {
  console.log('Export Dafault');
}
export default defaultFunc;