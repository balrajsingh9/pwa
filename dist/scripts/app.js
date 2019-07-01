!function(s){var a={};function i(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=s,i.c=a,i.d=function(s,a,e){i.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:e})},i.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,a){if(1&a&&(s=i(s)),8&a)return s;if(4&a&&"object"==typeof s&&s&&s.__esModule)return s;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:s}),2&a&&"string"!=typeof s)for(var t in s)i.d(e,t,function(a){return s[a]}.bind(null,t));return e},i.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(a,"a",a),a},i.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},i.p="",i(i.s=0)}([function(s,a,i){s.exports=i(1)},function(s,a){s.exports=' <!doctype html> <html lang=en> <head> <meta charset=utf-8> <meta http-equiv=X-UA-Compatible content="IE=edge"> <meta name=viewport content="width=device-width,initial-scale=1"> <title>Weather PWA</title> <meta name=codelab content=your-first-pwa-v3> <link rel=stylesheet type=text/css href=/styles/inline.css> <link rel=icon href=/images/favicon.ico type=image/x-icon /> <link rel=manifest href=/manifest.json> <meta name=description content="A sample weather app"> <meta name=theme-color content=#2F3BA2 /> <script><\/script> </head> <body> <header class=header> <h1> Weather PWA <a href=https://darksky.net/poweredby/ class=powered-by> Powered by Dark Sky </a> </h1> <button id=butInstall aria-label=Install hidden>Hello</button> <button id=butRefresh aria-label=Refresh></button> </header> <main class=main> <button id=butAdd class=fab aria-label=Add> <span class="icon add"></span> </button> <div id=about class=weather-card> <b>Your First Progressive Web App Codelab</b><br> Get started at <a href=https://g.co/codelabs/pwa>https://g.co/codelabs/pwa</a>. </div> <div id=weather-template class=weather-card hidden> <div class=card-spinner> <svg viewBox="0 0 32 32" width=32 height=32> <circle cx=16 cy=16 r=14 fill=none></circle> </svg> </div> <button class=remove-city>&times;</button> <div class=city-key hidden></div> <div class=card-last-updated hidden></div> <div class=location>&nbsp;</div> <div class=date>&nbsp;</div> <div class=description>&nbsp;</div> <div class=current> <div class=visual> <div class=icon></div> <div class=temperature> <span class=value></span><span class=scale>°F</span> </div> </div> <div class=description> <div class=humidity> <span class=label>Humidity:</span> <span class=value></span><span class=scale>%</span> </div> <div class=wind> <span class=label>Wind:</span> <span class=value></span> <span class=scale>mph</span> <span class=direction></span>° </div> <div class=sunrise> <span class=label>Sunrise:</span> <span class=value></span> </div> <div class=sunset> <span class=label>Sunset:</span> <span class=value></span> </div> </div> </div> <div class=future> <div class=oneday> <div class=date></div> <div class=icon></div> <div class=temp-high> <span class=value></span>° </div> <div class=temp-low> <span class=value></span>° </div> </div> <div class=oneday> <div class=date></div> <div class=icon></div> <div class=temp-high> <span class=value></span>° </div> <div class=temp-low> <span class=value></span>° </div> </div> <div class=oneday> <div class=date></div> <div class=icon></div> <div class=temp-high> <span class=value></span>° </div> <div class=temp-low> <span class=value></span>° </div> </div> <div class=oneday> <div class=date></div> <div class=icon></div> <div class=temp-high> <span class=value></span>° </div> <div class=temp-low> <span class=value></span>° </div> </div> <div class=oneday> <div class=date></div> <div class=icon></div> <div class=temp-high> <span class=value></span>° </div> <div class=temp-low> <span class=value></span>° </div> </div> <div class=oneday> <div class=date></div> <div class=icon></div> <div class=temp-high> <span class=value></span>° </div> <div class=temp-low> <span class=value></span>° </div> </div> <div class=oneday> <div class=date></div> <div class=icon></div> <div class=temp-high> <span class=value></span>° </div> <div class=temp-low> <span class=value></span>° </div> </div> </div> </div> </main> <div id=addDialogContainer> <div class=dialog> <div class=dialog-title>Add new city</div> <div class=dialog-body> <select id=selectCityToAdd aria-label="City to add"> <option value=28.6472799,76.8130727>Dehli, India</option> <option value=-5.7759362,106.1174957>Jakarta, Indonesia</option> <option value=51.5287718,-0.2416815>London, UK</option> <option value=40.6976701,-74.2598666>New York, USA</option> <option value=48.8589507,2.2770202>Paris, France</option> <option value=-64.8251018,-63.496847>Port Lockroy, Antarctica</option> <option value=37.757815,-122.5076401>San Francisco, USA</option> <option value=31.2243085,120.9162955>Shanghai, China</option> <option value=35.6735408,139.5703032>Tokyo, Japan</option> </select> </div> <div class=dialog-buttons> <button id=butDialogCancel class=button>Cancel</button> <button id=butDialogAdd class=button>Add</button> </div> </div> </div> <script src=/scripts/luxon-1.11.4.js><\/script> <script src=/scripts/app.js><\/script> <script src=/scripts/install.js><\/script> <script> // CODELAB: Register service worker.\n    if (\'serviceWorker\' in navigator) {\n      window.addEventListener(\'load\', () => {\n        navigator.serviceWorker.register(\'/service-worker.js\')\n          .then((reg) => {\n            console.log(\'Service worker registered.\', reg);\n          });\n      });\n    } <\/script> </body> </html>'}]);
//# sourceMappingURL=app.js.map