// import b64url  from 'base64url';
import expect from 'expect';
import rc4    from './index';

expect.extend(require('jest-isa'));

test('Ensure rc4-crypt is a function', () => {
  expect(rc4).isA(Function);
});

test('Verify a round trip', async () => {
  expect(rc4).isA(Function);

  let encrypt = rc4('deadbeef'),
      decrypt = rc4('deadbeef');

  expect(decrypt(encrypt("Hello World")).toString()).toBe("Hello World");

});
