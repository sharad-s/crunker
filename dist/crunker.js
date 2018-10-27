!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Crunker",[],t):"object"==typeof exports?exports.Crunker=t():e.Crunker=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).sampleRate,n=void 0===t?44100:t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sampleRate=n,this._context=this._createContext()}return r(e,[{key:"_createContext",value:function(){return window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext,new AudioContext}},{key:"fetchAudio",value:async function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=n.map(async function(t){var n=await fetch(t).then(function(e){return e.arrayBuffer()});return await e._context.decodeAudioData(n)});return await Promise.all(o)}},{key:"mergeAudio",value:function(e){var t=this._context.createBuffer(1,this._sampleRate*this._durationOfFirst(e),this._sampleRate);return e.map(function(e){for(var n=e.getChannelData(0).length-1;n>=0;n--)t.getChannelData(0)[n]+=e.getChannelData(0)[n]}),t}},{key:"concatAudio",value:function(e){var t=this._context.createBuffer(1,this._totalLength(e),this._sampleRate),n=0;return e.map(function(e){t.getChannelData(0).set(e.getChannelData(0),n),n+=e.length}),t}},{key:"play",value:function(e){var t=this._context.createBufferSource();return t.buffer=e,t.connect(this._context.destination),t.start(),t}},{key:"export",value:function(e,t){var n=t||"audio/mp3",r=this._interleave(e),o=this._writeHeaders(r),i=new Blob([o],{type:n});return{blob:i,url:this._renderURL(i),element:this._renderAudioElement(i,n)}}},{key:"download",value:function(e,t){var n=t||"crunker",r=document.createElement("a");return r.style="display: none",r.href=this._renderURL(e),r.download=n+"."+e.type.split("/")[1],r.click(),r}},{key:"notSupported",value:function(e){return!this._isSupported()&&e()}},{key:"close",value:function(){return this._context.close(),this}},{key:"_maxDuration",value:function(e){return Math.max.apply(Math,e.map(function(e){return e.duration}))}},{key:"_durationOfFirst",value:function(e){return e[0].duration}},{key:"_totalLength",value:function(e){return e.map(function(e){return e.length}).reduce(function(e,t){return e+t},0)}},{key:"_isSupported",value:function(){return"AudioContext"in window}},{key:"_writeHeaders",value:function(e){var t=new ArrayBuffer(44+2*e.length),n=new DataView(t);return this._writeString(n,0,"RIFF"),n.setUint32(4,32+2*e.length,!0),this._writeString(n,8,"WAVE"),this._writeString(n,12,"fmt "),n.setUint32(16,16,!0),n.setUint16(20,1,!0),n.setUint16(22,2,!0),n.setUint32(24,this._sampleRate,!0),n.setUint32(28,4*this._sampleRate,!0),n.setUint16(32,4,!0),n.setUint16(34,16,!0),this._writeString(n,36,"data"),n.setUint32(40,2*e.length,!0),this._floatTo16BitPCM(n,e,44)}},{key:"_floatTo16BitPCM",value:function(e,t,n){for(var r=0;r<t.length;r++,n+=2){var o=Math.max(-1,Math.min(1,t[r]));e.setInt16(n,o<0?32768*o:32767*o,!0)}return e}},{key:"_writeString",value:function(e,t,n){for(var r=0;r<n.length;r++)e.setUint8(t+r,n.charCodeAt(r))}},{key:"_interleave",value:function(e){for(var t=e.getChannelData(0),n=2*t.length,r=new Float32Array(n),o=0,i=0;o<n;)r[o++]=t[i],r[o++]=t[i],i++;return r}},{key:"_renderAudioElement",value:function(e,t){var n=document.createElement("audio");return n.controls="controls",n.type=t,n.src=this._renderURL(e),n}},{key:"_renderURL",value:function(e){return(window.URL||window.webkitURL).createObjectURL(e)}}]),e}();t.default=o}])});