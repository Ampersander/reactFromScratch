function getProp(obj, keys) {
  let value = obj;
  for (keys of keys) {
    value = value[keys];
  }
  return value;
}

function prop_access (obj, str) {
  if (typeof str === 'function') return '';
  let arr = str.split('.'); // str = 'a.b.c'
  while (arr.length && (obj = obj[arr.shift()])); // obj = a => b => c

  if (typeof obj === 'undefined') console.log(str + ' doesn\'t exist');
  return (typeof obj === 'undefined'
    ? ''
    : !!~['', null].indexOf(typeof obj)
    ? ''
    : obj);
};

export default String.prototype.interpolate = function (object) {
  let finalString = this;
  const regex = /{{(([a-zA-Z0-9\-\_\ \.])*)}}/g;
  let m;
  let result = new Map();

  // While there is a match like '{{ ... }}'
  while ((m = regex.exec(this)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    
    console.log(m[0], m[1].trim());
    result.set(m[0], m[1].trim());
  }

  // Return original string if no match
  if (!result || result.size == 0) {
    return this;
  }

  for (let [key, value] of result) {
    finalString = finalString.replace(key, prop_access(object, value));
  }
  return finalString;
};
