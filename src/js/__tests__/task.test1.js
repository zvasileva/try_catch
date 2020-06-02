import numInt from '../task';

test('error', () => {
  function err() {
    numInt('NN');
  }

  expect(err).toThrowError(new Error('Ввод не является числом в десятичной системе счисления!'));
});
