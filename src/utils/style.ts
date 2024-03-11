interface cnObjType {
  [className: string]: boolean | string;
}

export const cn = (...arg: (string | cnObjType | undefined)[]) => {
  let classNames: string[] = [];
  arg.map((el) => {
    if (!el) return;
    if (typeof el === 'string') {
      classNames.push(el);
    } else if (typeof el === 'object') {
      for (const [key, value] of Object.entries(el)) {
        if (typeof value === 'boolean' && value) {
          classNames.push(key);
        }
      }
    }
  });
  return classNames.join(' ');
};
