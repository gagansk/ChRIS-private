export var defaultTitle = function defaultTitle(data) {
  return data && data.hasOwnProperty('title') ? data.title : data;
};