export function checkEmail(email) {
  let errors = [];

  if (email.length == 0) {
    errors.push("Cannot be blank");
  }
  if (!email.endsWith("@iteducation.com")) {
    errors.push("Must end in @iteducation.com");
  }

  return errors;
}

export function checkPassword(password) {
  const errors = [];

  if (password.length < 10) {
    errors.push("Must be at least 10 characters");
  }

  if (!password.match(/[a-z]/)) {
    errors.push("Must include at least 1 lowercase letter");
  }

  if (!password.match(/[A-Z]/)) {
    errors.push("Must include at least 1 uppercase letter");
  }

  if (!password.match(/[0-9]/)) {
    errors.push("Must include at least 1 number");
  }

  return errors;
}
