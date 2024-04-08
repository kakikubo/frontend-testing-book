function getMessage(name: string | undefined) {
  const a = name; // a: string | undefined
  if (!name) {
    return `Hello anonymous!`;
  }
  // if文の分岐とreturnによりundefinedではないと判定される
  const b = name; // b: string
  return `Hello ${b}`;
}
