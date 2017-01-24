// Async API Call
(function (global, api, undefined, document){

 var url = location;
 var rq = {};

 rq = {
        apiName: "api",
        apiOrigin: "api/",
        apiHash: "#!",
        apiLocation: window.location,
        apiHref: function () {
          return this.apiLocation.href
        },
        apiRep: function (v) {
          return (v.href).match('#!');
        },
        apiHost: function() {
          return this.apiLocation
        },
        callbackType: (function (ct) {
          var isAPI = ct;
              console.debug(isAPI);
              if (isAPI) { return 'api' };
        })(WMC.SDKType.api),

        codeHash: function (v) {
          var u = v.href,
              m = this.apiRep(v),
              h = (v.hash) ? (v.hash).match('#!') : '#!',
              keygen, val;

          if (!m) { location.href = (v.href).replace('api/','api/#!'), location.reload(); }
              keygen = function (hash) {
                let chars = {}, sets = {}, res = "", val, id;
                    chars = { startlength: 1, minlength: 8, maxlength: 12,
                              randomD1: Math.floor((Math.random()*8) + 7),
                              randomD2: Math.floor((Math.random()*8) + 5),
                              randomD3: Math.floor((Math.random()*5) + 1),
                              randomD4: Math.floor((Math.random()*8) + 3),
                              randomD5: Math.floor((Math.random()*8) + 2),
                              randomD6: Math.floor((Math.random()*8) + 1),
                              randomD7: Math.floor((Math.random()*8) + 4),
                              randomD8: Math.floor((Math.random()*8) + 1),
                              stackn : [], stackl : []
                            };
                    sets = { 1: 'a', 2: 'b', 3: 'c', 4: 'd',
                            5: 'e', 6: 'f', 7: 'g', 8: 'h',
                            9: 'i', 10: 'j', 11: 'k', 12: 'l',
                            13: 'm', 14: 'n', 15: 'o', 16: 'p',
                            17: 'q', 18: 'r', 19: 's', 20: 't',
                            21: 'u', 22: 'v', 23: 'w', 24: 'x',
                            25: 'y', 26: 'z'
                            }
                for (var i = chars.startlength; i < chars.minlength; i++) {
                  (chars.stackn).push( chars['randomD' + i ] );
                }
                for (var c = chars.startlength; c < chars.minlength; c++) {
                  (chars.stackl).push( sets[ chars['randomD' + c] ] );
                }
                for (var r = 0; r < (chars.stackn).length; r++) {
                  res += chars.stackl[r] + chars.stackn[r];
                }
                return id = hash + res;
              }
              var _m = m;
              console.debug('check m --->',_m);
              val = (_m[0] || _m).replace('#!', keygen);
              console.debug('final value --->',val);
              return val;

        },

        appType: function () {},

        extend: function (ep) {
          // Endpoint
          switch (ep) {

            case bible:

            return

            case gc:

            return

            default:
            break

          }

        }
      }

 jq = {

 }


 // http://localhost/api/
 //
 // If Bible Data
 // hostname/api/#!/bible/
 //
 // If Game Data - User
 // hostname/type/#!/game-project/user

 // If Game Data - Stat
 // hostname/type/#!/game-project/stat
global.req = rq;
api({url:'.wmc-bible/book/genesis.json'});

}).apply(null,

// Checks if API is valid and will get JSON and return its data to the page in JSON database
WMC.status === true && WMC.SDKType.api ?

[ window,
  function(request, response) {
     var xhr = new XMLHttpRequest();
     xhr.open("GET", request.url, true);
     xhr.onload = function(e) {
       console.debug('check this e for event -->', e);
       console.debug('check status of this -->', this);
       if (this.status == 200) {
         WMC.db = JSON.parse(this.responseText);
       }
     }
     xhr.send();
 },
  undefined,
  document,
  'use strict']

:

WMC.status === false && WMC.SDKType.api
[ window,
  function (url, param, string, func, event) {

  },
  undefined,
  document,
  'use strict']

);