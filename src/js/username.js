export default class Validator {
  static ValidateUsername(username) {
    const dashAccept = /[\w-]/.test(username);
    const startEndOfLine = !/^[\d-_]|[\d-_]$/.test(username);
    const noMoreThanThreeDigits = !/\d{4}/.test(username);

    return dashAccept && startEndOfLine && noMoreThanThreeDigits;
  }
}
