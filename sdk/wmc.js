// Walandio Martian Creation - SDK
// Version 0.0.3
// Game Project - Card Game: Grand Celestials
// @ Developer: walandio, martian
// 
// Features:
//  - Easy creating and defining functions in Object Array
//  - Created Log System for Mapping Functions: which allows to check the functions created by WMC 
//  - Lots of Choices for developer to customize functions
//  - Improved securing the scope functions by not exposing publicly
//  - 
//  - 
//  - 

(function(window, modules, undefined){
  
  window = window || {};
  window.defineFn;
  
  modules = {};
  this.defineFn = {};
  
  // Give function a definition to start creating that function
  defineFn = function(createFn, args){
    var define = createFn || {}, dfnEach, defineFunctions;
    
    dfnEach = function(dfnLists){
      dfnLists = dfnLists;
      dfnLists.forEach(function(val,key){
        console.debug('Creating functions >>>>>>>', val);
        define = val;
        return defineFunctions(define);
      });
    }
    
    defineFunctions = function(define){
      switch (define) {
        case 'login':

          args = args || [] || {};
          window[define] = function(usr, pwd){
            this.usr = usr;
            this.pwd = pwd;
            this.key = '';
            this.id = '';
            this.WMC = true;
            
            return this;
          }
          
          // WMC functions is true
          this.WMC = true;
          console.debug('Created function >>>', define);
          return;
          
        case 'start':
          args = args || [] || {};
          window[define] = function(nameFn, startFn){

            if (nameFn == 'deck'){
              nameFn = api.deck;
              return nameFn.call(this);
            } else if (nameFn == 'hero'){
              nameFn = api.hero;
              return nameFn.call(this);
            }

            (startFn instanceof Function === true) ? 
            [ nameFn = (startFn).call(this) ] : 
            (startFn instanceof Function === false) ? 
            [ nameFn.call(this) ] :
            console.throw(nameFn+' >>>> It is not a function. The function does not exist.') ;
            
            return;
          }
          console.debug('Created function >>>', define);
          
          this.WMC = true;
          return this;
          
        case 'screen':
        
          args = args || [] || {};
          window[define] = function(width, height){
            
          }
          
          this.WMC = true;
          return this;
          
        case 'server':
          
          args = args || [] || {};
          window[define] = function(choose){
            
            typeof choose === 'undefined' ? [ console.error('Please specify your correct environment.') ] : 
            choose instanceof Function ? [ (choose).call(this) ] :
            typeof choose === 'string' ? [ api.server(choose) ] : 
            console.debug('Sorry the environment does not exist. Please try again.') ;
            
            console.debug('Initializing... >>>>>>', define);
            return; 
          }
          console.debug('Created function >>>', define);
          
          this.WMC = true;
          return this;
          
        case 'mapFunctions':

          window[define] =  fn.checkFuncs(args);
          if(typeof objects !== 'array'){ return console.error('Could not map available WMC functions.') }
          
          this.WMC = true;
          return this;
        
        case 'load':
        
          args = args || [] || {};
          console.debug('This is load function');
          window[define] = function(dfn, opts, callbackFn){
            opts = {};
            if(callbackFn instanceof Function === false){ callbackFn = callbackFn; }
            
            if(typeof dfn === 'object' && callbackFn instanceof Function === false){
              dfn.forEach(function(val, key){
                console.debug(val);
                
                // Checks the function from UI to load
                if(val in ui){
                  ui[val].call(this);
                }

                // Checks the function from API to load
                if (val in api){
                  if(val === 'environment'){ return false; }
                  api[val].call(this);
                }
                
              });
              
              callbackFn = callbackFn;
              this.WMC = true;
              return this;
            }
            
          }
          return;
        default:
          break;
      }
    }
    
    typeof define === 'string' ? [ defineFunctions(define) ]  : 
    typeof define === 'function' ? [ define.call(this) ] :
    (createFn instanceof Array) ? [ dfnEach(createFn) ] : 
    typeof define === 'undefined' ? [ define = '' ] :
    [ console.error('Could not create functions.') ];
    
  }
  // ---------------------------- End Security Functions -----------------------------
  //
  //
  
  // ---------------------------- Start Modular --------------------------------------
  var fn = {},
      api = {},
      ui = {},
      storage = {};
  
  // Modular Functions
  fn = {
    
    engine: {
      start: function(apiName, apiCall){
        apiCall = apiCall || '';
        apiName.call(this);
        console.debug('Working function');
      },
      end: function(){
      },
      error: function(err){
      },
      after: function(fn){
        return fn();
      },
      init: function(){
      }
    },
    checkFuncs: function(lookupFn){
      if(lookupFn instanceof Array){
        // Checks all functions created by WMC and evaluate
        lookupFn.forEach(function(val, key){
          console.debug(val);
          if(val in window){
            console.debug('WMC checking functions >>>>>>', lookupFn);
            fn.engine(lookupFn);
          }
        });
      }
      
      if(lookupFn in window){
        console.debug('----WMC---- function: ', lookupFn);
      }
      return;
    }
    
  };
  
  // Modular API
  api = {
    callback: function(serverName){
      for(var checkpoint in api.environment){
        if(serverName === checkpoint){
          api.server(serverName);
          return;
        }
      }
    },
    server: function(env){
      //
      this.environment = (function(selectThis){
        selectThis = selectThis || '';
        for(var checkEnv in api.environment){
          // console.debug(checkEnv);
          if(env === checkEnv){
            api.environment[checkEnv] = true;
            console.debug('Your environment is now on server >>>>>>> ['+api.environment[checkEnv]+']', checkEnv);
            selectThis = "["+checkEnv.toUpperCase()+"]";
            console.debug(selectThis);
            return;
          }
        }
      })();
      
      if(env){ return this; }
    },
    deck: function(){
      //
      alert('Choose your deck!')
    },
    hero: function(){
      //
      alert('Choose you hero!')
    },
    
    // This is you server environment
    // Note: This is required to login and searches it. If it does not exist,
    // the user will be notified to try to connect on a different server.
    environment: {
      loren: false,
      valhalla: false,
      gaiden: false,
      bastian: false,
      eden: false,
      yggdrasil: false
    },
    
    // Player's Stats
    player: function(userData){
      userData = userData || {};
      userData = {
        userName: api.user,
        userLvl: api.userlvl
        
      }
      return userData;
    }
  };
  
  // Modular UI
  ui = {
    
    menuSrceen: function(){
      
    },
    startGame: function(){
      
    },
    redeem: function(){
      
    },
    events: function(event, triggerFn){
      
      if(event){
        
        this.game = triggerFn || function(){ };
        this.reward = triggerFn || function(){ };
        this.player = triggerFn || function(){ };
        this.back = triggerFn || function(){};
        
        return this;
      }
      
    },
    rewards: function (){
      
    },
    
    // Different Modes
    storyMode: function(){
      
    },
    // ------- This is the Battle Ground Tournament
    BGTMode: function(){
      
    },
    
    
    // Screen Settings
    screen: function(width, height, unit){
      // Width - Define the x value of the screen
      // Height - Define the y value of the screen
      // Unit - Define the measurement unit: e.g. px, pt, em, etc..
      
      alert('This is screen settings!')
      
      width = width;
      height = height;
      unit = unit;
      
      var x, y;
      
      x = width + "" + unit;
      y = height + "" +  unit;
      
      
      
      
    }
    
  };
  
  // Modular Storage (Offline)
  storage = {
    
  }
  
  // EventListeners
  //
  //
  //
  
  // Checks once the uers is logged in and then disable login function
  if('login' in window){
    if(addEventListener){
      login.addEventListener('message', function(){
        console.debug('Complete login datbase');
        console.debug('Deleting Function');
        
        delete window['login'];
        window['logout'] = function(usr){
          console.debug('This is logout function');
        }
        
      });
    }
  } else {
    
  }
  
  // if(globals instanceof Function){
  //   Function.prototype.extend = new globals();
  // }
  
  // Enable WMC search functions
  //
  //
  //
  //
  //
  
  // window['testsrvr'] = api.server;
  // window['env'] = api.environment;
  window['player'] = api.player;
  window['testStorage'] = storage;
  window['ui'] = ui;
  
}).apply(null, ('defineFn' in window === false) ? [ window ] : [ console.debug('defineFn could not be created.') ])



