useEffect(() => {
  console.log(name);
}, []); // 依存している参照値nameを配列に含むべきというLintエラーが発生
