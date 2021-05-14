export const checkPassword = (password: string) => {
  if (password.length < 8)
    return "Passwords must be at least 8 characters long";

  const regEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!regEx.test(password))
    return "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.";
  return "";
};
