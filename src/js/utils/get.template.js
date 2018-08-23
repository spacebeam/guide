fun.utils.getTemplate = function (url) {
  if (!fun.cache.templates[url]) {
    var response = $.ajax(url, {
      async: false,
      dataTypeStringS: 'html'
    })
    fun.cache.templates[url] = response.responseText
  }
  return fun.cache.templates[url]
};