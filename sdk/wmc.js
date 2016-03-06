// Walandio Martian Creation - SDK
// Version 0.0.2
// Game Project - Card Game: Grand Celestials
// 

(function(window, modules, undefined){
  
  window = window || {};
  window.defineFn;
  
  modules = {};
  this.defineFn = {};
  
  // Give function a definition to start creating that function
  defineFn = function(define, type){
    
    typeof define === 'string' ? [ define = define ]  : 
    typeof define === 'function' ? [ (define = new Function) ].call() : 
    typeof define === 'undefined' ? [ define = '' ] :
    [ define = new Array ].prototype[define] ;
    
    switch (define) {
      
      case 'login':
        
        // if(type == 'function' || type.toLowerCase() == 'function' || type == 'func'){
        //   type = type.toLowerCase() || 'function';
        // }
        
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
        return;
      case 'screen':
        window[define] = function(width, height){
          
        }
        return;
      case 'server':
        window[define] = function(choose){
          
          typeof choose === 'undefined' ? [ console.error('Please specify your correct environment.') ] : 
          choose instanceof Function ? [ (choose).call(this) ] :
          typeof choose === 'string' ? [ api.server(choose) ] : 
          console.debug('Sorry the environment does not exist. Please try again.') ;
           
          console.debug('Initializing... >>>>>>', define);
          return; 
        }
        console.debug('Created function >>>', define);
        return;
      case 'mapFunctions':
       window[define] =  function(lookupFn){
         
       }
       return;
      case 'load':
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
              
            })
            
            callbackFn = callbackFn;
            return;
           }
           
        }
        return;
      default:
      
        break;
    }
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
      alert('Choose your deck!')
    },
    hero: function(){
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
      // Unit - Define ht measurement unit: e.g. px, pt, em, etc..
      
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



