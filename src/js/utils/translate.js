fun.utils.translate = function (key) {
  var value = key;
  if (typeof fun.strings[key] != 'undefined') {
    value = fun.strings[key]
  };
  for( var i = 1; i < arguments.length; i++) {
    value = value.replace('%' + i + '$s', args[i])
  };
  return value
};
