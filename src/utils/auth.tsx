import bcrypt from "bcryptjs";

export function hashAndSalt(password: string) {
  // Replace this with a secure password hashing library in production

  // $2a$10$VnNlbPnbtWNzTvWyWO0id.U3i0T.v6n67le/4NUnvwstcJLp6IGBe hashedPassword

  const salt = bcrypt.genSaltSync(10);

  const hashedPassword = bcrypt.hashSync(
    password,
    salt
    // example of salt : "$2a$10$CwTycUXWue0Thq9StjUM0u"
  );
  // hash created previously created upon sign up

  return hashedPassword;
  // console.log(hashedPassword, "hashedPassword");
  // console.log(salt, "salt");
}

export function verifyPassword(inputPassword: string, storedPassword: string) {
  // Replace this with a secure password verification algorithm in production
  return inputPassword === storedPassword;
}
