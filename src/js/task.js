const myError = new Error('Ввод не является числом в десятичной системе счисления!');

export default function numInt(num) {
  const result = parseInt(num, 10);
  if (Number.isNaN(result)) {
    throw myError;
  }
  return result;
}
