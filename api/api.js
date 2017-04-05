// Async API Call
(function (global, api, undefined, document){

 var count, res, _nurl, _ourl, _nHashIndex, _oHashIndex, oldurl, newurl;

 var apiURL = {},
     loc = location,
     rq,
     handler,
     getAPI;

 rq = {
    history: {},
    apiName: "api",
    apiOrigin: "api/",
    apiHash: window.location.hash,
    apiLocation: window.location,
    apiHref: function () {
      let self = this;
      return self.apiLocation.href
    },
    apiRep: function (v) {
      let self = this;
      return (v.href).match('#!');
    },
    apiHost: function() {
      let self = this;
      return self.apiLocation;
    },
    apiHistory: function(name, url) {
      let self = this;
      if (!self.history.hasOwnProperty(name) || !self.history[name]) {
        self.historyRegister(name);
      }
      return self.history[name].push(url), self;
    },
    apiRelocation: function(url) {
      self.location.href = url;
    },
    historyRegister: function(name) {
      let self = this;
      return self.history[name] = new Array(), self;
    },
    callbackType: (function () {
      for (var t in WMC.SDKType) {
        if (WMC.SDKType.hasOwnProperty(t) && WMC.SDKType[t] === true) { 
          var a = {};
          a[t] = WMC.SDKType[t];
          return  a;
        }
      }
    })(),
    codeHash: function () {
      var v = rq.apiLocation,
          u = rq.apiLocation.href,
          m = rq.apiRep(v),
          h = (rq.hash) ? (rq.hash).match('#!') : '#!',
          keygen, val;

      if (!m) { location.href = (v.href).replace('api/','api/#!'), location.reload(); }
          keygen = function (hash) {
            let chars = {}, sets = {}, res = "", val, id;
            var _m;
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
            return id = res;
          }

          _m = m;
          val = (_m[0] || _m).replace(/(#!)/ig, keygen);

          if (rq.new !== undefined){
            rq.new = rq.new.replace("{key}", "{"+val+"}");
          }  
          rq.apiRelocation(rq.new);
    }
 };
 
 // Create prototypes for handler
 handler = (function(){
   
   function handler() {
     this.name = 'handler';
   }
   handler.prototype = {
     trigger: function(callbackName) {
        rq[callbackName].call(self);
     },
     encryptAPICodeDB: function(data) {
        this.trigger(data);
     },
     update: function(a, b) {
        for (var d in b) {
          for (var i in a) {
            if (!a.hasOwnProperty(d)) {
              a[d] = b[d];
            }
            else if (a.hasOwnProperty(d) && d == i) {
              a[d] = b[d];
            }
          }
        }
        return a, this;
     },
     async: function(options) {
        var promise = new Promise;
        return {
          data: options,
          success: promise.resolve,
          failed: promise.reject,
          when: promise.when,
          new: promise
        }
     }
   }
   return new handler;
 })();

 getAPI = {
   
 }
 // API call works by applying #!/api/
 // References:
 // /g/ - call function get()
 // /p/
 //
 // If Bible Data
 // wmc/#!/db?=/bible/
 //
 // If Game Data - User
 // wmc/#!/game-project/user
 //
 // If Game Data - Stat
 // wmc/#!/game-project/stat
global.addEventListener('hashchange', function(event){
  event = event;
  var apiURL = {
    
    // Registers New url
    new: (function(eventURL){
      if (eventURL.newURL === undefined) {
        var _nurl = eventURL.target.location.hash.toString().substr(2);
        rq.apiHistory(rq.apiName, _nurl);
        return _nurl;
      }
      else {
        var _nurl = eventURL.newURL.toString();
        _nhashIndex = _nurl.search('#');

        // Lists API history
        var newurl = _nurl.substr(_nHashIndex+2);
        rq.apiHistory(rq.apiName, newurl);
        return newurl;
      }
    })(event),

    // Registers Old url
    old: (function(eventURL){
      if (eventURL.oldURL === undefined) {
        var count = rq.history.api.length;
        if (count === 0) return rq.apiHash.substr(2);
        for (var i=0; i<count; i++) {
          res = i-1;
        }
        return rq.history.api[res];
      } 
      else {
        var _ourl = eventURL.oldURL.toString();
        hashIndex = _ourl.search('#');
        
        var oldurl = _ourl.substr(_oHashIndex+2);
        return oldurl;
      }
    })(event)

  }
  handler.update(rq, apiURL).encryptAPICodeDB('codeHash');
  return global.req = rq;
});


}).apply(null,

// Checks if API is valid and will get JSON and return its data to the page in JSON database
WMC.status === true && WMC.SDKType.api ?

[ window,
  function(api, response) {

    function beforeInit() {
    }

    return {
      init: function() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", api.url, true);
        xhr.onload = function(e) {
          console.debug('check this e for event -->', e);
          console.debug('check status of this -->', this);
          if (e.target.status == 200 && e.target.readyState === 4) {
            WMC.db = JSON.parse(this.responseText);
          }
        }
        xhr.send();
      } 
    }
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