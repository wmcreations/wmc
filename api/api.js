// Async API Call
(function (global, api, undefined, document){

  console.debug('check this global object ----->', global);

 var count, res, _nurl, _ourl, _nHashIndex, _oHashIndex, oldurl, newurl;

 var apiURL = {},
     loc = location,
     rq,
     handler,
     callbackAPI = {};

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
      location.href = url;
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
          h = (rq.hash) ? (rq.hash).match('#!') : '#!', val, keygen, applyKeygen;
      
      console.debug('check this m value -->', m);
      // if (m === null) { location.hash = "!/"; }
      
       keygen = function() {
          var chars = {}, sets = {}, res = "", val, key, id, pathUrl, encrypt = {};
          var _m;

              encrypt = {
                lock: function() {
                  // This is lock
                },
                reverseDetect: function() {
                  // This is Detecting Reversed Engineering Code
                  console.log('Trying to reverse Engineer the code? I will not allow you!');
                },
                addLooper: function() {
                  return this.looper(rq.keygen);
                },
                looper: function(privateKey) {
                  let currentTime = new Date().getTime(),
                      timeSequence = '',
                      timeStartPoint = '',
                      timeEndPoint = '',
                      pkey = privateKey;
                  
                  let overwriteKeygen = function(dbkey, time, sequence, startPoint, endPoint, callback) {
                      // 
                  }

                  overwriteKeygen(pkey, currentTime, timeSequence, timeStartPoint, timeEndPoint, function() {
                    console.debug('This is just a callback trigger, if necessary');
                  });
                  // Note: This is still a work on progress. Top priority on this is to focus on
                  // this API-SDK. This is the core base on listening and getting endPoints from
                  // Database (JSON). Looper is my new key-encryption methodology.
                },
              }

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

        applyKeygen = function(path, dbkey) {
          if (rq.hasOwnProperty('keygen')) { console.debug('Keygen already exists! Applying existing keygen: ', rq.keygen); }
          // For now this is the behaviour applying keygen, will update it in the future
          // Format might change in ff: 
          // rq.keygen = {
          //    config: '',
          //    key: "{this-dbkey}"
          // }
          dbkey = (rq.hasOwnProperty('keygen')) ? rq.keygen : dbkey;
          rq.new = path.replace('key', dbkey);
          rq.keygen = dbkey;
          return rq;
        }

        key = keygen();
        if (rq.new !== undefined) applyKeygen(rq.new, key);
        applyKeygen(rq.new, key);
        rq.apiRelocation(rq.new);
    }
 };
 
 // Create prototypes for handler
 handler = (function(){
   
   function handler() {
     this.name = 'handler';
   }
   handler.prototype = {
     regex: {
        in: /[{]|[}]/ig,
        db: {
          type: {
            get: /(\?g=)/ig,
            put: /(\?p=)/ig,
            update: /(\?u=)/ig
          },
          key: /{key}/ig,
        },
        project: {
          base: /{project}/ig,
          name: ''
        }
        
     },
     trigger: function(callbackName) {
        rq[callbackName].call(self);
     },
     encryptAPICodeDB: function(data) {
        this.trigger(data);
        return this;
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
     },
     transaction: function(apiData) {
        console.debug('#-Transaction-# >> check the base api url -->', apiData);
        console.debug('#-Transaction-# >> only startHash Point-->', rq.new.indexOf('#!'));
        var data = {};
        apiData = apiData || rq;

        // Sample Base URL Line for Data Query/Filter
        // wmc/#!/{db}?g={k11i9b2c3g7f6k11}/{type:game}/{project:gc}/{collections:environment}
        let path = {
          rootBase: (function(){
            return apiData.new.substr(rq.new.indexOf('#!'));
          })(),
          regexQuery: (function() {
            return {
              db: /\{(db:)[a-z][A-Z]*.}/ig,
              key: /[?](g|p|u)[=]{[a-zA-Z0-9]*}/ig,
              type: /\{(type:)[a-z][A-Z]*.}/ig,
              project: /\{(project:)[a-z][A-Z]*.}/ig,
              collection: /\{(collection:)[a-z][A-Z]*.}/ig,
              slash: /[/]/ig,
              params: /[{]|[:]|[}]/ig
            }
          })(),
          queryData: function (paramLevels) {
            var typesOfEndPoint = {};
            this.endpointData = {};
            
            if (!this.hasOwnProperty('endpointData')) { return }
            
            typesOfEndPoint.first = paramLevels.first();
            typesOfEndPoint.second = paramLevels.second();
            typesOfEndPoint.third = paramLevels.third();
            typesOfEndPoint.fourth = paramLevels.fourth();

            // DB Name
            this.queryDBName(typesOfEndPoint.first.tierParam) || "";
            this.queryDBKey(typesOfEndPoint.first.tierParam) || "";
        
            // Project Type
            this.queryProjectType(typesOfEndPoint.second.tierParam) || "";
        
            // Project
            this.queryProject(typesOfEndPoint.third.tierParam) || "";   
        
            // DB Collection
            this.filterDBCollection(typesOfEndPoint.fourth.tierParam) || "";   
            
            console.debug('check this endpointData -->', this.endpointData);
            return this;
          },
          queryDBName: function(param) {
            return this.endpointData.dbname = 
                   param.match(path.regexQuery.db)
                   .join()
                   .split(path.regexQuery.params)[2];
          },
          queryDBKey: function(param) {
            return this.endpointData.key = param.match(path.regexQuery.key).join();
          },
          queryProjectType: function (param) {
            return this.endpointData.type = 
                   param.match(path.regexQuery.type)
                   .join()
                   .split(path.regexQuery.params)[2];
          },
          queryProject: function(param) {
            return this.endpointData.project = 
                   param.match(path.regexQuery.project)
                   .join()
                   .split(path.regexQuery.params)[2];
          },
          filterDBCollection: function(param) {
            return this.endpointData.collection = 
                   param.match(path.regexQuery.collection)
                   .join()
                   .split(path.regexQuery.params)[2];
          },
          tier: function() {
            let tierData = [];
            let tierParams = path.rootBase.split(this.regexQuery.slash);
            let level = {}, properties = {};

            console.debug('check this tierParams -->', tierParams);

            // for (var u = 1; tierParams.length; u++) {
            //   level['fnParam'+u] = tierParams[u];
            // }

            level = {
              // DB Name & Key Level Tier
              first: function() {
                return {
                  tier: 1,
                  tierParam: tierParams[1] || ""
                }
              },
              // Type Level Tier
              second: function() {
                return {
                  tier: 2,
                  tierParam: tierParams[2] || ""
                }
              },
              // Project Level Tier
              third: function() {
                return {
                  tier: 3,
                  tierParam: tierParams[3] || ""
                }
              },
              // Collections Environment Level Tier
              fourth: function() {
                return {
                  tier: 4,
                  tierParam: tierParams[4] || ""
                }
              }
            }

            properties = {
              from: function() {

              },
              to: function() {

              },
              moveFromSetPoint: function() {

              },
              setEndPoint: function() {

              }
            }

            console.debug('#-Transaction-# >> check this tierParamLevel', level);
            console.debug('#-Transaction-# >> check level first', level.first());
            console.debug('#-Transaction-# >> check level second', level.second());

            return {
              when: function(callback) {
                path.queryData(level);
                return callback.call(this, path);
              },
              then: function(callback) {
                return callback.call(this);
              }
            }
          },
          applyTierParams: function(level, endpoints) {
            level = level;
            var l;
            for (l = 1; l < endpoints.length; l++) {
              level['fnParams'+l] = function(){
                console.debug('this is your endpoint', this.endpoint);
                return endpoints[l];
              }
            }
            return level;
          }
          // db: (function(){
          //   return base.new.match(handler.regex.db.key)[0];
          // })(),
          // project: (function(){
            
          // })()
        }
        
        console.debug('#-Transaction-# >> check this path within transaction -->', path);
        
        path.tier().when(function(response){
          console.debug('This is awesome API JS for WMC!!! <--->');
          console.debug('Now checking response!!! --->', response);
        });
        

        return;

        // var xhr = new XMLHttpRequest;
        // var transactionPath = path;
        
        // if (transactionPath.tier()) {

        // }

        // xhr.open(path, true);
        // if ( !addEvenListener in window) {
        //   xhr.onload = function(event) {
        //     if (event.target.status === 200 && event.target.readyState === 4) {
        //       WMC[base] = JSON.parse(this.responseText);
              
        //     }
        //   }
        // }
        // xhr.addEventListener("load", function(event) { 
        //   if (event.target.status === 200 && event.target.readyState ===4) {
        //     WMC[base];
        //   }
        // });
        // xhr.send();
     },
     // Adding Dexie for IndexedDB Storage
     dbStore: function() {
       
     }
   }
   return new handler;
 })();

 console.debug('check this handler -->', handler);

 callbackAPI = {
   getAPI: function() {
     let api = {
        // Registers New url
        new: (function(eventURL) {
          console.debug('check this event url -->', eventURL);
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
        old: (function(eventURL) {
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
     return api;
   },
   init: function(event) {
      let apiURL;
      event = event;
      apiURL = callbackAPI.getAPI(event);
      handler
        .update(rq, apiURL)
        .encryptAPICodeDB('codeHash')
        .transaction(rq);
      // Database Transitional
      return global.req = rq;
   }
 }
 // API call works by applying #!/api/
 // 
 // The API Handler handles the behaviour in a different URL format when
 // requesting data(JSON). As you will see, as for the API handler, it uses
 // "{}" (Curly Brackets) to identify. If "{}" does not exist, the API handler will not request
 // the data(JSON). This behaviour gives a strict rule to identify the API-Js.
 // 
 // The API-JS is basically just a hash change url.
 // Note: This is just a prototype of making it possible.
 //
 // The downside of this hashChange behaviour "#!", it first need to trigger
 // the [OnLoad] eventListener. Which then will trigger [OnHashChange] eventListener.
 // It will only trigger once, then the [OnHashChange] eventListener will do the rest
 // of requesting data(JSON).
 //
 // Breaking Down the API Call Format:
 //
 // g - call function get() - This is still an idea implementation
 // p - call function put() - This is still an idea implementation
 // u - call function update() - This is still an idea implementation
 //
 // If Bible Data
 // wmc/#!/db?g={key}/{project-type=}/{project}/{book:x}/{verse:x} or {page:x}/{chapter:x}
 //
 // If Game Data - User
 // wmc/#!/db?g={key}/{project-type=}/{project}/user
 //
 // If Game Data - Stat
 // wmc/#!/db?g={key}
 // 
 // The behaviour of calling DB transition:
 // 1) Database(DB) Name must be identified
 // 2) Specify the project type {wmc-project}
 //    Note: The API will search the existing folder for {wmc-project}. Example:
 //          
 //
 // ......
 // Database Architecture
 //

  // global.addEventListener('load', callbackAPI.init);
  global.addEventListener('hashchange', callbackAPI.init);

}).apply(null,

// Checks if API is valid and will get JSON and return its data to the page in JSON database
WMC.status === true && WMC.SDKType.hasOwnProperty('api') && WMC.SDKType.api === true ?

[ (window || self || this),
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