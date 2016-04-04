// Walandio Martian Creation - SDK
// Version 0.0.6
// Web Game App SDK -
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

(function(WMC, modules, undefined, document){
  var synced = false, defineWMC = {};
  modules = modules;
  WMC = WMC || {};
  
  for(var m = 1; m <= modules.length; m++){
    var modName = (typeof modules[m] != 'undefined') ?  modules[m] : null;
    WMC[modName];
    (modName in window) ? console.debug('Synced Module..', modName) : console.debug('Module still syncing...');
    (m === modules.length) ? [console.debug('WMC SDK Completely Synced!'), synced = true] : [console.debug("WMC syncing to SDK...", modName)];
  }
  
  this.WMCjs = {};
  
  if(synced === true){
    WMCjs = function(connection){
      if(typeof connection === 'string' && connection === 'open'){
        this.defineFn = defineWMC;
        return this;
      } 
      else if (connection === ''){
        return console.debug('WMC JS closing now...');
      }
      else if (connection === null){
        return console.debug('WMC JS closing now...');
      }
    }
  }
  
  // Give function a definition to start creating that function
  defineWMC = function(createFn, args, bool){
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
        
          // mapFunctions are only used for development. Use this function to detect the functions created
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
        case 'connect':
        
          window[define] = api.callDataFunc ;
          console.debug('Created function >>>>>> ',define);
          return;
        case 'template':
          window[define] = ui.template() ;
          console.debug('Created function >>>>>>', define);
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
    
    
    // Extension features of defineFn functions
    this.custom = function(func){ (typeof func === 'function') ? func.call(this) : console.debug(func); }
    this.config = function(nameFn, settings){
      
      // -- Database Config --
      // Example for settings format
      // { db:'open', dbName:'game.json'}
      if(nameFn === 'database'){
        if(settings === null || settings === '' || settings === undefined){ settings = {} }
        for(var x in settings){
          if(x === 'db' && settings[x] === 'open') { 
            console.debug(settings.dbName);
          }
        }
      }
      
    }
    return this;
  }
  
  // ---------------------------- End Security Functions -----------------------------
  //
  //
  
  // ---------------------------- Websocket Connection -------------------------------
  
  if('WebSocket' in window){
    try{
      var url = api;
      var ws = new WebSocket();
      
    } catch (error) {
      console.debug(error);
      console.debug('Websocket cannot connect at the moment. Closing connection...');
    }
  }
  
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
    
    path: function( windowType ,event){
      if(typeof windowType === 'undefined' || windowType === '' ){ 
        return windowType = (window.parent) ? parent : self ;  
      } else {
        return windowType = windowType;
      }
    },
    callDataFunc: function(data, ws, config, callback){
      ws = 'ws://' + ws;
      // console.debug(data);
      if('WebSocket' in window){
        alert('Websocket!');
        var socket = new WebSocket(ws);
        
        socket.onopen = function(event) {
          console.debug('Open message');
          alert('Open Message');
        }
        
        socket.onmessage = function(event) {
          console.debug('Sending message');
          alert('Sending message');
        }
        
        socket.onclose = function(event) {
          console.debug('Close message!');
          alert('Close message');
        }
        
        socket.onerror = function(event) {
          console.debug('Error sending message');
          alert('Error sending message');
        }
      }
    },
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
      // API Call - deck.json
      alert('Choose your deck!');
      var ws = 'ws://localhost:29330/projects/martiangame-cg-grand-celestials/data/deck.json';
    },
    hero: function(){
      // API Call - hero.json
      alert('Choose you hero!');
      var ws = 'ws://localhost:29330/projects/martiangame-cg-grand-celestials/data/hero.json';
    },
    // Websocket Connection Server Data
    ws: function(host, event){
      
    },
    // Long polling AJAX Connection Server Data
    get: function(host, data, event){
      return {
        forms: {
          settings: {
            
          }
        },
        data: function(projects, source){
          var name = projects;
          return{
            
          }
        }
      }
    },
    // Sending message for WMC Message Listener
    postMessage: function(data, event){
      
    },
    // This is you server environment
    // Note: This is required to login and searches it. If it does not exist,
    // the user will be notified to try to connect on a different server.
    environment: function(data, event){
      
      var env = api.get(host, data, event);
      return env;
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
    
    // WMC HTML Template
    //
    //
    templateEnable: function(element, event){
      var a;
      console.debug(element['data-wmc-template']);
      var res = element['data-wmc-template'];
      if(res === 'on'){
        return a = 'on';
      } else if (res === 'off' || typeof res === 'undefined') {
        return a = 'off';
      }
    },
    template: function(flags, event){
      flags = flags || {};
      // Check window type if parent or self
      var win = (window.self == window.parent) ? parent  : self ,
          htmlAllCollection = win.document.body.children,
          nodeName = 'wmc',
          wmc = nodeName || nodeName.toUpperCase();
      
      // Checking all HTML elements
      for(var chck = 0; chck < htmlAllCollection.length; chck++){
        var htmlShowEach = htmlAllCollection[chck];
        if((htmlShowEach.length != -1)){
         var templateAttrbCheck = htmlShowEach.attributes;
         var callTemplateEnabler = ui.templateEnable(templateAttrbCheck);
         console.debug(callTemplateEnabler);
         if(callTemplateEnabler == 'off'){ alert('Template disabled.'); return true;}
         var htmlChildren = htmlShowEach.children;
         for(var x = 0; x < htmlChildren.length; x++){
           var htmlAttributes = htmlChildren[x].attributes;
           for(var y = 0; y < htmlAttributes.length; y++){
             var htmlNodeName = htmlAttributes[y].nodeName;
             if((htmlNodeName === nodeName)){
              // -- IMPORTANT -- 
              // WMC attribute must be evaluated of each HTML element. 
              // This is the first priority before proceeding.
              // Once it is passed, it then checks other WMC's HTML rules
              // ---------------
              //

              // Set datalists
              var htmlNodeDataSets = htmlChildren[x].dataset;
              
              // -- Start Template Check ---
              if('wmcType' in htmlNodeDataSets && 'wmcLabel' in htmlNodeDataSets){
                  
                  console.debug("Templating... \nLabel:"+htmlNodeDataSets['wmcLabel']+"\nType:"+htmlNodeDataSets['wmcType']);
                  
                  var wmcLabel = htmlNodeDataSets['wmcLabel'];
                  var wmcType = htmlNodeDataSets['wmcType'];
                  
                  switch(wmcLabel){
                    case 'form':
                      
                      if(wmcType === 'login'){
                        var data = htmlChildren[x].innerText;
                        var attributes = { wmcLabel: htmlNodeDataSets['wmcLabel'], 
                                           wmcType: htmlNodeDataSets['wmcType'], 
                                           types: {
                                             text:"text",
                                             email:"email",
                                             password:"password"
                                           }, 
                                           label: "wmc-login",
                                           class: "wmc-login"
                                          };
                        var htmlElement = htmlChildren[x];
                        return ui.login(data, attributes, htmlElement);
                      }
                      else if(wmcType === 'contact'){
                        var data = htmlChildren[x].innerText;
                        var attribute = {};
                        var htmlSelector = htmlChildren[x];
                        return ui.contact(data, attributes, htmlElement);
                      }
                    
                    case 'display':
                    
                      if(wmcType === 'menu'){
                        // Renders menu element
                        var data = htmlChildren[x].innerText;
                        var attributes = { wmcLabel: htmlNodeDataSets['wmcLabel'], 
                                           wmcType: htmlNodeDataSets['wmcType'], 
                                           types: {
                                             text:"text",
                                             email:"email",
                                             password:"password"
                                           }, 
                                           label: "wmc-login",
                                           class: "wmc-login"
                                          };
                        var htmlElement = htmlChildren[x];
                        
                        console.debug('Rendering menu elements...', htmlChildren[x]);
                        ui.menuScreen(data, attributes, htmlElement);
                      }
                      if(wmcType === 'start-game'){
                        
                      }
                    
                    case 'modes':
                    
                      if(wmcType === 'story-mode'){
                        
                      }
                      if(wmcType === 'extra-mode'){
                        
                      }
                      if(wmcType === 'gallery-mode'){
                        
                      }
                    
                    default:
                    break;
                  }
              }
             }
           }
         } 
        }
        
      }
      
    },
    
    templateSettings: {
      wmcType: false,
      wmcLabel: false
    },
    
    create: function(element, attributes){
      var createDomElement = window.document.createElement(element);
      console.debug(createDomElement);
      return createDomElement;
      // return createDomElement;
    },
    
    collectData: function(){
      
    },
    
    // ---------
    // Template
    // ---------
    //
    // UI Menu
    menuScreen: function(data, attributes, element, event){
      var renderTemplate = element,
          attr = attributes,
          settings = renderTemplate.innerText;
          
    
      var labels = {
        start: "Press Any Key to Start Game",
        newGame: "New Game",
        loadGame: "Load Game",
        options: "Options",
        feature: "Feature Mode"
      }
          
      renderTemplate.innerHTML = "<h1>"+ labels.start +"</h1>" + 
                                 "<ul class='wmc-game-display' data-wmc-gamedisplay='false'>" + 
                                    "<li data-newgame='true'>"+ labels.newGame +"</li>" +
                                    "<li data-savedata='0'>"+ labels.loadGame +"</li>" +
                                    "<li data-game-options=''>"+ labels.options +"</li>" +
                                    "<li data-gamedisplay='false'>"+ labels.feature +"</li>" + 
                                 "</ul>";
    },
    // UI Start Game
    startGame: function(data, attributes, element, event){
      var renderTemplate = element,
          attr = attributes,
          settings = html.innerText;
          
      renderTemplate.innerHTML = "" + "" + "" + "";
      
    },
    // UI Login
    login: function(data, attributes, element, event){
      var renderTemplate = element,
          attr = attributes,
          usrInput = ui.create("input"),
          pwdInput = ui.create("input"),
          confirmPwdInput = ui.create("input"),
          div = ui.create("div"),
          br = "br",
          span = ui.create("span"),
          settings = renderTemplate.innerText;

      var loginInfo = settings.split('{{');
      // console.debug(settings);
      // console.debug(loginInfo);
      
      // JS Code -- Longer Approach: Slow Performance
      // *****************************************************
      // usrInput.type = attr.types.email;
      // usrInput.setAttribute('class','wmc-login email');
      // usrInput.setAttribute('data-wmc-profile','profile.json');
      // usrInput.setAttribute('label','Enter Email');
      
      // pwdInput.type = attr.types.password;
      // pwdInput.setAttribute('class','wmc-login pwd');
      // pwdInput.setAttribute('data-wmc-profile','profile.json');
      // pwdInput.setAttribute('value','Enter Password');
      
      // confirmPwdInput.type = attr.types.password;
      // confirmPwdInput.setAttribute('class','wmc-login confirm-pwd');
      // confirmPwdInput.setAttribute('data-wmc-profile','profile.json');
      
      // html.innerText = '';
      
      // var labels = {
      //   usr: ui.create('label'),
      //   pwd: ui.create('label'),
      //   confirmPwd: ui.create('label')
      // }
      
      // labels.usr.innerText = 'Username ';
      // labels.usr.setAttribute('class','wmc-login username');
      // labels.pwd.innerText = 'Password ';
      // labels.pwd.setAttribute('class','wmc-login pwd');
      // labels.confirmPwd.innerText = 'Confirm Password ';
      // labels.confirmPwd.setAttribute('class','wmc-login confirm-pwd');
      
      // var renderTemplate = [
      //   labels.usr,         // Username:
      //   usrInput,           // [        ]
      //   ui.create(br),      //
      //   labels.pwd,         // Password:
      //   pwdInput,           // [ ********** ]
      //   ui.create(br),      //
      //   labels.confirmPwd,  // Confirm Password:
      //   confirmPwdInput     // [ ********** ]
      //  ];
      
      // for(var x = 0; x < renderTemplate.length; x++){
      //   html.appendChild(renderTemplate[x]);
      // }
      
      renderTemplate
          .innerHTML = "<form method='post'>" + 
                          "Username " + "<input type='"+ attr.types.email +"' class='wmc-login username'>" + "<br>" + 
                          "Password " + "<input type='"+ attr.types.password +"' class='wmc-login pwd'>" + "<br>" +
                          "Confirm Password" + "<input type='"+ attr.types.password +"' class='wmc-login confirm-pwd'>" + "<br>" +
                          "<button type='submit' class='wmc-login btn-submit'>login</button>" +
                       "</form>";
    },
    // UI Redeem    
    redeem: function(){
      
    },
    // UI Events
    events: function(event, triggerFn){
      
      if(event){
        
        this.game = triggerFn || function(){ };
        this.reward = triggerFn || function(){ };
        this.player = triggerFn || function(){ };
        this.back = triggerFn || function(){};
        
        return this;
      }
      
    },
    // UI Rewards
    rewards: function (){
      
    },
    // UI Contacts
    contact: function(data, attributes, element, events){
       
    },
    // ---------------
    // -- End Template
    // ---------------
    
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
    db: function(connection, event){
      if(typeof connection === 'string' && connection === 'open'){
        console.debug('Storage open');
      }
    }
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
  
})(window.self === window.parent ? parent : window , ['','WMCjs','WMCAsync'], undefined)



