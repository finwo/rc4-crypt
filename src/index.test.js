// import b64url  from 'base64url';
import expect from 'expect';
import rc4    from './index';

expect.extend(require('jest-isa'));

test('Ensure rc4-crypt is a function', () => {
  expect(rc4).isA(Function);
});
