function checkType(type: 'A' | 'B' | 'C'): string {
  const message: string = 'valid type';
  if (type === 'A') {
    return message;
  }
  if (type === 'B') {
    return message;
  }
  // 例外発生有無によって、関数の戻り値型推論が変わる
  throw new Error('invalid type');
}
