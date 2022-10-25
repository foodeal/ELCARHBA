const strongRegex = new RegExp(
  /^.*(?=.{8,128})((?=.*[!@#$%^&*()\-_=+{};: ,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[0-9]){1})((?=.*[A-Z]){1}).*$/
);
const uppercaseRegex = new RegExp(/^.*((?=.*[A-Z]){1}).*$/);
const lowercaseRegex = new RegExp(/^.*((?=.*[a-z]){1}).*$/);
const digitRegex = new RegExp(/^.*((?=.*[0-9]){1}).*$/);
const diffCharRegex = new RegExp(/^.*((?=.*[!@#$%^&*()\-_=+{};: ,<.>]){1}).*$/);
const digitNotAllowedRegex = new RegExp(/^([^0-9]*)$/);
export namespace Validators {
  export const required = (message: string) => (value: number | string) =>
    value ? "" : message;

  export const max =
    (maxSize: number, message?: string) => (value: number | string) =>
      value?.toString().length > maxSize ? `Max ${maxSize}` || message : "";

  export const checkEmail = (value: string) =>
    /^\w+([!#$%&'*+-/=?^_`{|]?\w+)*@([\w-]+\.)+[\w-]{2,10}$/.test(value);
  export const isEmail = (message: string) => (value: string) =>
    /^\w+([!#$%&'*+-/=?^_`{|]?\w+)*@([\w-]+\.)+[\w-]{2,10}$/.test(value)
      ? ""
      : message;

  export const strong = (message: string) => (value: string) =>
    strongRegex.test(value) ? "" : message;
  export const isStrong = (value: string) => strongRegex.test(value);
  export const hasLowerCase = (value: string) => lowercaseRegex.test(value);
  export const hasUpperCase = (value: string) => uppercaseRegex.test(value);
  export const hasDigit = (value: string) => digitRegex.test(value);
  export const hasDiffChar = (value: string) => diffCharRegex.test(value);

  export const hasNoDigit = (message: string) => (value: string) =>
    digitNotAllowedRegex.test(value) ? "" : message;
}
