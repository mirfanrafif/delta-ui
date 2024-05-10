export const checkPasswordLength = (
  minLength: number,
  password: string,
): boolean => {
  return password.length >= minLength;
};

export const passwordContainsAlphabet = (password: string): boolean => {
  const regex = /[a-zA-Z]/;
  return regex.test(password);
};

export const passwordContainsNumeric = (password: string): boolean => {
  const regex = /\d/;
  return regex.test(password);
};
