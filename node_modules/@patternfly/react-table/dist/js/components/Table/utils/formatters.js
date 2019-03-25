'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultTitle = exports.defaultTitle = function defaultTitle(data) {
  return data && data.hasOwnProperty('title') ? data.title : data;
};