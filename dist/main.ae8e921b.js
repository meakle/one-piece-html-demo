parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
document.body.addEventListener("touchmove",function(n){n.preventDefault()},{passive:!1});var n=0,r=document.querySelector("#style"),t=document.querySelector("#html"),e="/*\n你好,\n我是方阿森,\n一个学生,\n想成为前端程序员,\n现在的背景颜色太亮了,我来给个灰色\n*/\n\nbody{\n    background-color: #dfe1e5;\n}\n\n/*\n现在我要在我页面的右边画一个太极的图案\n看好了!\n*/\n\n/*\n我先创建一个圆形出来\n*/\n\n#tai_ji {\n    position: relative;\n    width: 300px;\n    height: 300px;\n    border-radius: 50%;\n}\n  \n/*\n现在我把这个圆的背景色改一下\n*/\n\n#tai_ji {\n\n    background: rgb(0,0,0);\n    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);\n}\n\n/*\n现在我给它添加两个伪元素\n让这个两个伪元素放在他上面\n*/\n\n#tai_ji::after {\n    position: absolute;\n    content: '';\n    display: block;\n    width: 150px;\n    height: 150px;\n  \n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n  \n    background: rgb(255,255,255);\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);\n  \n  }\n  \n  #tai_ji::before {\n    position: absolute;\n    content: '';\n    display: block;\n    width: 150px;\n    height: 150px;\n  \n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n  \n    background: rgb(0,0,0);\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);\n  \n}\n\n/*\nok , 大功告成了!👏\n*/\n",o="",a=function a(){setTimeout(function(){"\n"===e[n]?o+="<br>":" "===e[n]?o+="&nbsp":o+=e[n],t.innerHTML=o,r.innerHTML=e.substring(0,n),window.scrollTo(0,99999),t.scrollTo(0,99999),n+1<e.length&&(n+=1,a())},1)};a();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.ae8e921b.js.map