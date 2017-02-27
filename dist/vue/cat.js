!function(t,e){if("function"==typeof define&&define.amd)define(["exports","./observer.js"],e);else if("undefined"!=typeof exports)e(exports,require("./observer.js"));else{var n={exports:{}};e(n.exports,t.observer),t.Cat=n.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=n(e),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=/\{\{((?:.|\n)+?)\}\}/g,s=function(){function t(e){var n=e.template,a=e.el,o=void 0===a?null:a,s=e.data,u=void 0===s?{}:s,h=e.watch,f=void 0===h?{}:h;e.methods;r(this,t),this.$el=o,this.$template=n||this.$el.innerHTML,this.$watcher=this.__initWatcher(f),this.$data=new i["default"](u,this.$watcher),this.__render(),this.$watcher.__render__=this.__render.bind(this)}return a(t,[{key:"__initWatcher",value:function(t){var e={};for(var n in t)e[n]?e[n].push(this.__bindContext(t[n])):e[n]=[this.__bindContext(t[n])];return e}},{key:"__bindContext",value:function(t){if("function"==typeof t)return t.bind(this)}},{key:"__render",value:function(){var t="`"+this.__parseTemplate()+"`",e="\n\t\twith (this.$data){\n\t\t\treturn eval(arguments[0])\n\t\t}\n\t\treturn exp\n\t\t",n=new Function(e).call(this,t);this.$el.innerHTML=n}},{key:"__parseTemplate",value:function(){this.$data;return this.$template.replace(o,function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return"${"+e[1].trim()+"}"})}},{key:"$watch",value:function(t,e){this.$watcher[t]?this.$watcher[t].push(this.__bindContext(e)):this.$watcher[t]=[this.__bindContext(e)]}}]),t}();t["default"]=s});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZ1ZS9DYXQuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsImV4cG9ydHMiLCJyZXF1aXJlIiwibW9kIiwib2JzZXJ2ZXIiLCJDYXQiLCJ0aGlzIiwiX29ic2VydmVyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfb2JzZXJ2ZXIyIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJSRSIsIl9yZWYiLCJ0ZW1wbGF0ZSIsIl9yZWYkZWwiLCJlbCIsInVuZGVmaW5lZCIsIl9yZWYkZGF0YSIsImRhdGEiLCJfcmVmJHdhdGNoIiwid2F0Y2giLCJtZXRob2RzIiwiJGVsIiwiJHRlbXBsYXRlIiwiaW5uZXJIVE1MIiwiJHdhdGNoZXIiLCJfX2luaXRXYXRjaGVyIiwiJGRhdGEiLCJfX3JlbmRlciIsIl9fcmVuZGVyX18iLCJiaW5kIiwicHVzaCIsIl9fYmluZENvbnRleHQiLCJmbiIsImV4cCIsIl9fcGFyc2VUZW1wbGF0ZSIsImNvZGUiLCJodG1sIiwiRnVuY3Rpb24iLCJjYWxsIiwicmVwbGFjZSIsIl9sZW4iLCJhcmd1bWVudHMiLCJhcmciLCJBcnJheSIsIl9rZXkiLCJ0cmltIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFXQSxFQUFRQyxHQUNsQixHQUFzQixrQkFBWEMsU0FBeUJBLE9BQU9DLElBQzFDRCxRQUFRLFVBQVcsaUJBQWtCRCxPQUMvQixJQUF1QixtQkFB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LEtBQUswQyxTQUFTbEIsR0FBS3dCLEtBQUtoRCxLQUFLaUQsY0FBY0MsSUFHM0NsRCxLQUFLMEMsU0FBU2xCLElBQVF4QixLQUFLaUQsY0FBY0MsUUFnRW5DbkQsSUFHUkosR0FBQUEsV0EvSG9CSSIsImZpbGUiOiJ2dWUvQ2F0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9ic2VydmVyIGZyb20gJy4vb2JzZXJ2ZXIuanMnXHJcblxyXG4vKiAg5Yy56YWN5Y+M5aSn5ous5Y+35YaF55qE5YaF5a65ICAqL1xyXG5jb25zdCBSRSA9IC9cXHtcXHsoKD86LnxcXG4pKz8pXFx9XFx9L2dcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdCB7XHJcblx0Y29uc3RydWN0b3Ioe1xyXG5cdFx0dGVtcGxhdGUsXHJcblx0XHRlbCA9IG51bGwsXHJcblx0XHRkYXRhID0ge30sXHJcblx0XHR3YXRjaCA9IHt9LFxyXG5cdFx0bWV0aG9kcyA9IHt9XHJcblx0fSkge1xyXG5cdFx0dGhpcy4kZWwgPSBlbFxyXG5cdFx0dGhpcy4kdGVtcGxhdGUgPSB0ZW1wbGF0ZSB8fCB0aGlzLiRlbC5pbm5lckhUTUxcclxuXHRcdHRoaXMuJHdhdGNoZXIgPSB0aGlzLl9faW5pdFdhdGNoZXIod2F0Y2gpXHJcblx0XHR0aGlzLiRkYXRhID0gbmV3IE9ic2VydmVyKGRhdGEsIHRoaXMuJHdhdGNoZXIpXHJcblx0XHR0aGlzLl9fcmVuZGVyKClcclxuXHRcdHRoaXMuJHdhdGNoZXIuX19yZW5kZXJfXyA9IHRoaXMuX19yZW5kZXIuYmluZCh0aGlzKVxyXG5cdH1cclxuXHQvKiAg5Yid5aeL5YyWV2F0Y2hlciAgKi9cclxuXHRfX2luaXRXYXRjaGVyKHdhdGNoKSB7XHJcblx0XHRsZXQgb2JqID0ge31cclxuXHRcdGZvciAobGV0IGtleSBpbiB3YXRjaCkge1xyXG5cdFx0XHRpZiAob2JqW2tleV0pIHtcclxuXHRcdFx0XHRvYmpba2V5XS5wdXNoKHRoaXMuX19iaW5kQ29udGV4dCh3YXRjaFtrZXldKSlcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRvYmpba2V5XSA9IFt0aGlzLl9fYmluZENvbnRleHQod2F0Y2hba2V5XSldXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBvYmpcclxuXHR9XHJcblx0LyogIOe7keWumuaWueazleeahOS4iuS4i+aWh+aMh+WQkXRoaXMgICovXHJcblx0X19iaW5kQ29udGV4dChmbikge1xyXG5cdFx0aWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJylcclxuXHRcdFx0cmV0dXJuXHJcblxyXG5cdFx0cmV0dXJuIGZuLmJpbmQodGhpcylcclxuXHR9XHJcblx0LyogIOW8gOWni+a4suafkyAgKi9cclxuXHRfX3JlbmRlcigpIHtcclxuXHRcdGxldCBleHAgPSBgXFxgJHt0aGlzLl9fcGFyc2VUZW1wbGF0ZSgpfVxcYGBcclxuXHRcdGxldCBjb2RlID0gYFxyXG5cdFx0d2l0aCAodGhpcy4kZGF0YSl7XHJcblx0XHRcdHJldHVybiBldmFsKGFyZ3VtZW50c1swXSlcclxuXHRcdH1cclxuXHRcdHJldHVybiBleHBcclxuXHRcdGBcclxuXHRcdGxldCBodG1sID0gbmV3IEZ1bmN0aW9uKGNvZGUpLmNhbGwodGhpcywgZXhwKVxyXG5cdFx0dGhpcy4kZWwuaW5uZXJIVE1MID0gaHRtbFxyXG5cdH1cclxuXHQvKiAg5qih5p2/6Kej5p6QICAqL1xyXG5cdF9fcGFyc2VUZW1wbGF0ZSgpIHtcclxuXHRcdGxldCBkYXRhID0gdGhpcy4kZGF0YVxyXG5cdFx0cmV0dXJuIHRoaXMuJHRlbXBsYXRlLnJlcGxhY2UoUkUsICguLi5hcmcpID0+IHtcclxuXHRcdFx0cmV0dXJuICckeycgKyBhcmdbMV0udHJpbSgpICsgJ30nXHJcblx0XHR9KVxyXG5cdH1cclxuXHQvKiAg5re75Yqgd2F0Y2ggICovXHJcblx0JHdhdGNoKGtleSwgZm4pIHtcclxuXHRcdGlmICh0aGlzLiR3YXRjaGVyW2tleV0pIHtcclxuXHRcdFx0dGhpcy4kd2F0Y2hlcltrZXldLnB1c2godGhpcy5fX2JpbmRDb250ZXh0KGZuKSlcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLiR3YXRjaGVyW2tleV0gPSBbdGhpcy5fX2JpbmRDb250ZXh0KGZuKV1cclxuXHRcdH1cclxuXHR9XHJcbn0iXX0=