(this.webpackJsonpmathstudent=this.webpackJsonpmathstudent||[]).push([[4,6],{51:function(t,e,n){"use strict";n.r(e);var o=n(16);e.default=function t(){Object(o.a)(this,t)}},53:function(t,e,n){"use strict";n.r(e);var o=n(16),r=n(56),i=n(55),u=n(51),a=n(20),s=function t(){Object(o.a)(this,t),this.about=[],this.about.push("To create a line, you need to have the line's slope and a "),this.about.push(new a.a("point","Point2D")),this.about.push(" it passes through, or else two points."),this.about.push("\n\n"),this.about.push("In 2 dimensions, which is just what you have if you can vary from left to right and up and down, a point is just an x coordinate (a number for how far left and right) and a y coodinate (a number for how far up and down)."),this.about.push("\n\n"),this.about.push("The slope of a line is how much it goes up divided by how much it goes sideways.  This is commonly referred to as rise over run.  If x is a measurement of left and right and y is a measurement of movement lower and higher, rise over run is the change that occurs in y divided by the change in x that occurs at the same time.  Lines are defined as having the same slope for the entire line.  "),this.about.push("\n\n"),this.about.push("If you know two points in a line, you can use them to get the slope.  Subtract the y from one point from from the y from the other point to get the change in y.  Then subtract the x from the one point from the x from other popint to get the change in x.  Then, divide change in y by change in x to get the slope.  Negative signs do matter.  You also need to have at least one point the line goes through.  This lets you know where the line passes through.  "),this.about.push("\n\n"),this.about.push("Because lines's slopes do not change, they are perfectly straight.  Because nothing stops them from continuing, they go on forever.")},c=new(function(t){Object(r.a)(n,t);var e=Object(i.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return n}(n(57).a)),h=function(t){Object(r.a)(n,t);var e=Object(i.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).teaching=c,t.callingStrings=[],t.about=(new s).about,t.creationMethodSignatures=t.teaching.creationMethodSignatures,t}return n}(u.default);e.default=new h},54:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return r}))},55:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return function(){var e,n=o(t);if(r()){var i=o(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return u(this,e)}}n.d(e,"a",(function(){return a}))},56:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},57:function(t,e,n){"use strict";var o=n(16),r=n(54),i=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,null,[{key:"makeListFromArray",value:function(t){if(0===t.length)return"none";if(1===t.length)return t[0];for(var e="",n=0;n<t.length;n++)e+=t[n],n===t.length-2&&(e+=" and "),n<t.length-2&&(e+=", ");return e}}]),t}();e.a=i}}]);
//# sourceMappingURL=4.e5533cf8.chunk.js.map