// Walandio Martian Creation - SDK
// Version 0.0.9
// Web Game App SDK -
// @ Developer: walandio, martian
// 
// Features:
//  - Added WMCType functionality
//  - Added API functionality
//  - Added API responses to parameters
//  - Added strict mode
//  - 
//  - 
//  - 
//  - 

// WMC Predefined Settings
(function (define, WMCType, undefined, document, isStrict) {
  isStrict;

  var path_href = define.location.href,
      MainType = (function () {
        function MainType (path) {
          this.path = path;
        }
        MainType.prototype = {
          api: (function () { return { api: true } })(),
          modules: (function () { return { modules: true } })(),
          init: function () {
            var href = this.path;
            if (href.includes('api')) return this.api; else return this.modules; 
          }
        }
        return new MainType(path_href);
      })();

    var settings = {
        WMC: true,
        WMCType: MainType.init()
      }

  // Initialize WMC Type
  WMCType(settings, define);

})((self || window || this), function (settings, w) {
  const isWMC = settings.WMC;

  function checkType(type, value) {
      w.SDKType = {
        [type]: value
      };
  }

  function WMCType(settings) {
    if (settings.hasOwnProperty('WMCType')) {
      var WMCType = settings.WMCType;
      for (var isTypeof in WMCType) {
        checkType(isTypeof, WMCType[isTypeof]);
      }
    }
  }

  function loaderAPI(d, s, id, async) {
    var doc = d,
        el = doc.createElement('script');

    el.src = s;
    el.id = id;
    el.async = async;
    return d.head.appendChild(el);
  }

  if (isWMC) {
    w.WMC = true;
    WMCType(settings);
  }

}, undefined, document, "use strict");

// WMC SDK - Intialization
(function (WMC, modules, undefined, document, isStrict) {
  isStrict;

  WMC.synced = false,
    defineWMC = {};

  // Initialize modules
  modules('WMCjs', ['', 'WMCjs', 'WMCAsync'], WMC);

  // Complete Synchronization
  this.WMCjs = {};
  if (synced === true) {
    WMCjs = function (connection) {
      if (typeof connection === 'string' && connection === 'open') {
        this.defineFn = defineWMC;
        return this;
      }
      else if (connection === '') {
        return console.debug('WMC JS closing now...');
      }
      else if (connection === null) {
        return console.debug('WMC JS closing now...');
      }
    }
  }

  // Give function a definition to start creating that function
  defineWMC = function (createFn, args, bool) {
    var define = createFn || {}, dfnEach, defineFunctions;

    dfnEach = function (dfnLists) {
      dfnLists = dfnLists;
      dfnLists.forEach(function (val, key) {
        console.debug('Creating functions >>>>>>>', val);
        define = val;
        return defineFunctions(define);
      });
    }

    defineFunctions = function (define) {
      switch (define) {
        case 'login':

          args = args || [] || {};
          window[define] = function (usr, pwd) {
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
          window[define] = function (nameFn, startFn) {

            if (nameFn == 'deck') {
              nameFn = api.deck;
              return nameFn.call(this);
            } else if (nameFn == 'hero') {
              nameFn = api.hero;
              return nameFn.call(this);
            }

            (startFn instanceof Function === true) ?
              [nameFn = (startFn).call(this)] :
              (startFn instanceof Function === false) ?
                [nameFn.call(this)] :
                console.throw(nameFn + ' >>>> It is not a function. The function does not exist.');

            return;
          }
          console.debug('Created function >>>', define);

          this.WMC = true;
          return this;

        case 'screen':

          args = args || [] || {};
          window[define] = function (width, height) {

          }

          this.WMC = true;
          return this;

        case 'server':

          args = args || [] || {};
          window[define] = function (choose) {

            typeof choose === 'undefined' ? [console.error('Please specify your correct environment.')] :
              choose instanceof Function ? [(choose).call(this)] :
                typeof choose === 'string' ? [api.server(choose)] :
                  console.debug('Sorry the environment does not exist. Please try again.');

            console.debug('Initializing... >>>>>>', define);
            return;
          }
          console.debug('Created function >>>', define);

          this.WMC = true;
          return this;

        case 'mapFunctions':

          // mapFunctions are only used for development. Use this function to detect the functions created
          window[define] = fn.checkFuncs(args);
          if (typeof objects !== 'array') { return console.error('Could not map available WMC functions.') }

          this.WMC = true;
          return this;

        case 'load':

          args = args || [] || {};
          console.debug('This is load function');
          window[define] = function (dfn, opts, callbackFn) {
            opts = {};
            if (callbackFn instanceof Function === false) { callbackFn = callbackFn; }

            if (typeof dfn === 'object' && callbackFn instanceof Function === false) {
              dfn.forEach(function (val, key) {
                console.debug(val);

                // Checks the function from UI to load
                if (val in ui) {
                  ui[val].call(this);
                }

                // Checks the function from API Environment to load
                if (val in api) {
                  if (val === 'environment') { return false; }
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

          window[define] = api.callDataFunc;
          console.debug('Created function >>>>>> ', define);
          return;
        case 'template':
          window[define] = ui.template();
          console.debug('Created function >>>>>>', define);
          return;

        default:
          break;
      }
    }

    typeof define === 'string' ? [defineFunctions(define)] :
      typeof define === 'function' ? [define.call(this)] :
        (createFn instanceof Array) ? [dfnEach(createFn)] :
          typeof define === 'undefined' ? [define = ''] :
            [console.error('Could not create functions.')];


    // Extension features of defineFn functions
    this.custom = function (func) { (typeof func === 'function') ? func.call(this) : console.debug('Error calling function or method', func); }
    this.config = function (nameFn, settings) {
      nameFn = nameFn;
      // Settings for nameFn
      var isDemo = /^[D|d](emo)/ig;
      var isDB = /^[D|d](atabase)/ig;
  
      // -- Database Config --
      // Example for settings format
      // { db:'open', dbName:'game.json'}
      if (nameFn.match(isDB)) {
        if (settings === null || settings === '' || settings === undefined) { settings = {} }
        if ( typeof (settings.db && settings.dbName) !== undefined ) return console.debug(settings.dbName);
      }
      if (nameFn.match(isDemo)) {
        if (settings == 'on' || settings == 'enable' || settings == true) {
          window.demo = demo;
        }
      }

    }
    return this;
  }

  // ---------------------------- End Security Functions -----------------------------
  //
  //

  // ---------------------------- Websocket Connection -------------------------------

  // if('WebSocket' in window){
  //   try{
  //     var url = api;
  //     var ws = new WebSocket();

  //   } catch (error) {
  //     console.debug(error);
  //     console.debug('Websocket cannot connect at the moment. Closing connection...');
  //   }
  // }

  // ---------------------------- Start Modular --------------------------------------
  var fn = {},
    api = {},
    ui = {},
    storage = {},
    demo = {};

  // Modular Functions
  fn = {

    engine: {
      start: function (apiName, apiCall) {
        apiCall = apiCall || '';
        apiName.call(this);
        console.debug('Working function');
      },
      end: function () {
      },
      error: function (err) {
      },
      after: function (fn) {
        return fn();
      },
      init: function () {
      }
    },
    checkFuncs: function (lookupFn) {
      if (lookupFn instanceof Array) {
        // Checks all functions created by WMC and evaluate
        lookupFn.forEach(function (val, key) {
          console.debug(val);
          if (val in window) {
            console.debug('WMC checking functions >>>>>>', lookupFn);
            this.engine(lookupFn);
          }
        });
      }

      if (lookupFn in window) {
        console.debug('----WMC---- function: ', lookupFn);
      }
      return;
    },

    game: (function (a) {
      this.actions = function (event, t) {
        this.config = function (event, settings) { };
        if (typeof t === 'undefined' && typeof event === 'undefined') {
          return a = {
            moveRight: function (event) {
              // [Native Code]
            },
            moveLeft: function (event) {
              // [Native Code]
            },
            moveUp: function (event) {
              // [Native Code]
            },
            moveDown: function (event) {
              // [Native Code]
            },
            pause: function (event) {
              // [Native Code]
            }
          }
        }
        if (t !== undefined && t.settings === 'on') {
          return this;
        }

      }
      return this;
    })()

  };

  // Modular API
  api = {

    path: function (url, callback, event) { },
    callDataFunc: function (data, ws, config, callback) {
      // ws = 'ws://' + ws;
      // // console.debug(data);
      // if('WebSocket' in window){
      //   alert('Websocket!');
      //   var socket = new WebSocket(ws);

      //   socket.onopen = function(event) {
      //     console.debug('Open message');
      //     alert('Open Message');
      //   }

      //   socket.onmessage = function(event) {
      //     console.debug('Sending message');
      //     alert('Sending message');
      //   }

      //   socket.onclose = function(event) {
      //     console.debug('Close message!');
      //     alert('Close message');
      //   }

      //   socket.onerror = function(event) {
      //     console.debug('Error sending message');
      //     alert('Error sending message');
      //   }
      // }

    },
    callback: function (serverName) {
      for (var checkpoint in api.environment) {
        if (serverName === checkpoint) {
          api.server(serverName);
          return;
        }
      }
    },
    server: function (env) {
      //
      this.environment = (function (selectThis) {
        selectThis = selectThis || '';
        // Get List of Environments
        var listEnvironment = api.environment(env);
        for (var checkEnv in listEnvironment) {
          // console.debug(checkEnv);
          if (env === checkEnv) {
            api.environment[checkEnv] = true;
            console.debug('Your environment is now on server >>>>>>> [' + api.environment[checkEnv] + ']', checkEnv);
            selectThis = "[" + checkEnv.toUpperCase() + "]";
            console.debug(selectThis);
            return;
          }
        }
      })();

      if (env) { return this; }
    },
    deck: function () {
      // API Call - deck.json
      alert('Choose your deck!');
      var ws = 'ws://localhost:29330/projects/wmc-gc/data/deck.json';
    },
    hero: function () {
      // API Call - hero.json
      alert('Choose you hero!');
      var ws = 'ws://localhost:29330/projects/wmc-gc/data/hero.json';
    },
    // Websocket Connection Server Data
    ws: function (host, event) {

    },
    // Long polling AJAX Connection Server Data
    get: function (data, event) {
      // Load jQuery and use AJAX callback
      data = data || {};
      console.debug(host);
      console.debug(data);
      if (typeof host != 'undefined') {
        console.debug(host);
      }
      
      return {
        forms: {
          settings: {}
        },
        data: function (projects, source) {
          var name = projects;
          return {}
        }
      }

    },
    // Sending message for WMC Message Listener
    postMessage: function (data, event) {
      // Post Message
    },
    // This is you server environment
    // Note: This is required to login and searches it. If it does not exist,
    // the user will be notified to try to connect on a different server.
    environment: function (data, event) {
      var env = api.get(data, event);
      if (!env.hasOwnProperty(data)) env[data] = true;
      return env;
    },

    // Player's Stats
    player: function (userData) {
      userData = userData || {};
      userData = {
        userName: api.user,
        userLvl: api.userlvl

      }
      return userData;
    },

    // Data
    data: function (event, data) {
      if (typeof data === 'undefined' && typeof event === 'undefined') {
        var dataCollection = {};
        var _this = dataCollection;
        dataCollection = {
          loc: 'data/',
          game: _this.loc + 'game.json',
          deck: _this.loc + 'deck.json',
          environment: _this.loc + 'environment.json',
          quests: _this.loc + 'quests.json',
          user: _this.loc + 'user.json',
        }
        console.debug(dataCollection);
        // data = api.get(dataCollection);
      }

      switch (event) {
        case 'get':
          // Get data
        break;
        case 'post':
          // Post data
        break;

        default:
        break;
        
      }

    }
  };

  // Modular UI
  ui = {

    // WMC HTML Template
    //
    //
    templateEnable: function (element, event) {
      var a;
      // console.debug(element['data-wmc-template']);
      var res = element['data-wmc-template'];
      if (res === "on") {
        return a = "on";
      } else if (res === 'off' || typeof res === 'undefined') {
        return a = 'off';
      }
    },
    template: function (flags, event) {

      var htmlShowEach, templateAttrbCheck, callTemplateEnabler, htmlChildren,
        htmlAttributes, htmlNodeName, htmlNodeDataSets, wmcLabel, wmcType;

      flags = flags || {};
      // Check window type if parent or self
      var win = (window.self == window.parent) ? parent : self,
        getAllElem = win.document.body.children,
        nodeName = 'wmc',
        wmc = nodeName || nodeName.toUpperCase();

      // Checking all HTML elements


      return {
        checkElement: function () {
          for (var chck = 0; chck < getAllElem.length; chck++) {
            htmlShowEach = getAllElem[chck];
            if ((htmlShowEach.length != -1)) {
              templateAttrbCheck = htmlShowEach.attributes;
              callTemplateEnabler = ui.templateEnable(templateAttrbCheck);
              // Check callTemplateEnabler
              console.debug('check this callTemplateEnabler -->', callTemplateEnabler);

              if (callTemplateEnabler == 'off') { alert('Template disabled.'); return true; }
              htmlChildren = htmlShowEach.children;
              for (var x = 0; x < htmlChildren.length; x++) {
                htmlAttributes = htmlChildren[x].attributes;
                for (var y = 0; y < htmlAttributes.length; y++) {
                  htmlNodeName = htmlAttributes[y].nodeName;
                  if ((htmlNodeName === nodeName)) {
                    // -- IMPORTANT -- 
                    // WMC attribute must be evaluated of each HTML element. 
                    // This is the first priority before proceeding.
                    // Once it is passed, it then checks other WMC's HTML rules
                    // ---------------
                    //

                    // Set datalists
                    var htmlNodeDataSets = htmlChildren[x].dataset;

                    // -- Start Template Check ---
                    if ('wmcType' in htmlNodeDataSets && 'wmcLabel' in htmlNodeDataSets) {

                      // console.debug("Templating... \nLabel:"+htmlNodeDataSets['wmcLabel']+"\nType:"+htmlNodeDataSets['wmcType']);

                      wmcLabel = htmlNodeDataSets['wmcLabel'];
                      wmcType = htmlNodeDataSets['wmcType'];

                      switch (wmcLabel) {
                        case 'form':

                          if (wmcType === 'login') {
                            var data = htmlChildren[x].innerText;
                            var attributes = {
                              wmcLabel: htmlNodeDataSets['wmcLabel'],
                              wmcType: htmlNodeDataSets['wmcType'],
                              types: {
                                text: "text",
                                email: "email",
                                password: "password"
                              },
                              label: "wmc-login",
                              class: "wmc-login"
                            };
                            var htmlElement = htmlChildren[x];
                            return ui.login(data, attributes, htmlElement);
                          }
                          else if (wmcType === 'contact') {
                            var data = htmlChildren[x].innerText;
                            var attribute = {};
                            var htmlSelector = htmlChildren[x];
                            return ui.contact(data, attributes, htmlElement);
                          }

                        case 'display':

                          if (wmcType === 'menu') {
                            // Renders menu element
                            var data = htmlChildren[x].innerText;
                            var attributes = {
                              wmcLabel: htmlNodeDataSets['wmcLabel'],
                              wmcType: htmlNodeDataSets['wmcType'],
                              types: {
                                text: "text",
                                email: "email",
                                password: "password"
                              },
                              label: "wmc-login",
                              class: "wmc-login"
                            };
                            var htmlElement = htmlChildren[x];

                            console.debug('Rendering menu elements...', htmlChildren[x]);
                            ui.menuScreen(data, attributes, htmlElement);
                          }
                          if (wmcType === 'start-game') {

                          }

                        case 'modes':

                          if (wmcType === 'story-mode') {

                          }
                          if (wmcType === 'extra-mode') {

                          }
                          if (wmcType === 'gallery-mode') {

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

      }

    },

    templateSettings: {
      wmcType: false,
      wmcLabel: false
    },

    create: function (element, attributes) {
      var createDomElement = window.document.createElement(element);
      console.debug(createDomElement);
      return createDomElement;
      // return createDomElement;
    },

    collectData: function () {

    },

    // ---------
    // Template
    // ---------
    //
    // UI Menu
    menuScreen: function (data, attributes, element, event) {
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

      renderTemplate.innerHTML = "<h1>" + labels.start + "</h1>" +
        "<ul class='wmc-game-display' data-wmc-gamedisplay='false'>" +
        "<li data-newgame='true'>" + labels.newGame + "</li>" +
        "<li data-savedata='0'>" + labels.loadGame + "</li>" +
        "<li data-game-options=''>" + labels.options + "</li>" +
        "<li data-gamedisplay='false'>" + labels.feature + "</li>" +
        "</ul>";
    },
    // UI Start Game
    startGame: function (data, attributes, element, event) {
      var renderTemplate = element,
        attr = attributes,
        settings = html.innerText;

      renderTemplate.innerHTML = "" + "" + "" + "";

    },
    // UI Login
    login: function (data, attributes, element, event) {
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
        "Username " + "<input type='" + attr.types.email + "' class='wmc-login username'>" + "<br>" +
        "Password " + "<input type='" + attr.types.password + "' class='wmc-login pwd'>" + "<br>" +
        "Confirm Password" + "<input type='" + attr.types.password + "' class='wmc-login confirm-pwd'>" + "<br>" +
        "<button type='submit' class='wmc-login btn-submit'>login</button>" +
        "</form>";
    },
    // UI Redeem    
    redeem: function () {

    },
    // UI Events
    events: function (event, triggerFn) {

      if (event) {

        this.game = triggerFn || function () { };
        this.reward = triggerFn || function () { };
        this.player = triggerFn || function () { };
        this.back = triggerFn || function () { };

        return this;
      }

    },
    // UI Rewards
    rewards: function () {

    },
    // UI Contacts
    contact: function (data, attributes, element, events) {

    },
    // ---------------
    // -- End Template
    // ---------------

    // Different Modes
    // ---------------
    // Core
    mode: (function(){
      function mode(type){
        this.type = type;
        alert('Mode: ' + typeof this.type);
      }
      mode.prototype = {
        select: function () {
          mode.prototype[this.type].call(this);
        },
        story: function () {
          alert('Story Mode!');
          return 'story' || 'Story';
        },
        BGT: function () {
          alert('Battleground Tournament');
          return 'BGT' || 'Battlegroung Tournament';
        }
      }
    return new mode;
    }()),
    // Mode Selectors
    storyMode: ui.mode,
    // ------- This is the Battle Ground Tournament
    BGTMode: ui.mode,

    // Screen Settings
    screen: function (width, height, unit) {
      // Width - Define the x value of the screen
      // Height - Define the y value of the screen
      // Unit - Define the measurement unit: e.g. px, pt, em, etc..

      alert('This is screen settings!')

      width = width;
      height = height;
      unit = unit;

      var x, y;

      x = width + "" + unit;
      y = height + "" + unit;


    }

  };

  // Modular Storage (Offline)
  storage = {
    db: function (connection, event) {
      if (typeof connection === 'string' && connection === 'open') {
        console.debug('Storage open');
      }
    }
  };

  // EventListeners
  //
  //
  events = {

  };

  demo = {
    project: function (name) {
      name = name || "";
      var options = {};
      // Stricted to Private
      function event() {
        
      }

      return options = {
        projectName: name,
        status: {
          html5: true
        },
        screen: function () {
          return {
            width: window.innerWidth || document.documentElement.clientWidth || document.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.clientHeight
          }
        },
        isMobile: function () {
          return (this.screen().width < 640) ? true : false
        },
        isDesktop: function () {
          return (this.screen().width > 1320) ? true : false
        },
        gameBoard: function (canvas) {
          canvas = false;
          let options = {};
          return options = {
            // Creation Methods
            create: function (type, args) {
              let ct = this.createType(), extend = {}, createdObj;
              if (ct && ct.hasOwnProperty(type)) {
                let callback = ct[type];
                // console.debug('Found! -->', this.createType()[type]);
                // console.debug('Creating '+ type + '...');
                // console.debug('check this callback -->', callback);
                console.debug('check callback -->',callback);
                createdObj = callback('div');
                createdObj;
                this[type+'Created'] = createdObj;
              }

              return this, extend = {
                addText: function (val, tags) {
                  let textElement, text;
                  console.debug('check this created element -->',options[type+'Created']);
                  // console.debug('check this gg element -->', options.gg);
                  // This is default addText feature
                  textElement = document.createElement('span');
                  text = document.createTextNode(val);
                  textElement.appendChild(text);

                  // Customize text into different tags
                  if (tags && tags !== undefined) {
                    textElement = document.createElement(tags);
                    text = document.createTextNode(val);
                    textElement.appendChild(text);
                  }
                  return options[type+'Created'].appendChild(textElement);
                },
                overwriteText: function (txt, tags) {
                  if (typeof options[type+'Created'].innerText == 'string' && options[type+'Created'].innerText == txt) {
                    // Overwrite text
                    return options[type+'Created'].appendChild(txt);
                  }
                },
                transform: function (d,s) {
                  shape = {
                    box: function () {
                      return options[type+'Created'].appendChild()
                    },
                    rect: function () {
                      return options[type+'Created'].appendChild();
                    },
                    circle: function () {
                      return options[type+'Created'].appendChild();
                    }
                  }
                  for (d in shape) {
                    console.debug('check this property in shape -->',d)
                    // return shape[d](this);
                  }
                }
              }
            },
            createType: function () {
              let options = {};

              return options = {
                gameboard: function (obj) {
                  obj = obj || {};
                  
                  let styles = {
                    height: options.status.height + "px"
                  }

                  let board = document.createElement(obj);

                      options.addClass(board, 'wmc-game-board');
                      options.elementStyle(board, styles);

                      document.body.innerHTML = "";
                      document.body.appendChild(board);
                  
                  return board;
                },
                element: function (obj) {
                  obj = obj || {};

                  let styles = {
                        height: options.status.height + 'px'
                      }

                  let createdObj = document.createElement(obj);

                  return createdObj;
                },
                // s is object Array { display: 'block', background: '#333' }
                elementStyle: function (obj, s) {
                  s = s || {};
                  for (var i in s) {
                    obj.style[i] = s[i];
                  }
                  return obj;
                },
                function: function (cn, fn) {
                  if (typeof fn == 'function') { return options[cn] = fn }
                  fn = fn || {};
                  fn = {
                    custom: function () { }
                  }
                  return fn;
                },
                addClass: function (el, name) {
                  el.classList.add(name)
                },
                removeClass: function (el, name) {
                  el.classList.remove(name)
                },
                status: {
                  width: window.innerWidth || document.documentElement.clientWidth || document.clientWidth,
                  height: window.innerHeight || document.documentElement.clientHeight || document.clientHeight
                }
              }
            },
            addClass: function (name) {
              this.elementCreated.classList.add(name);
            },
            removeClass: function (name) {
              this.elementCreated.classList.remove(name)
            },
            render: function () {
              
            }
            
          }
        },
        init: function () {
          if (this.isMobile()) {
            console.debug('You are viewing in Mobile Mode');
            var sel = document.querySelector('.wmc-game-board');
            sel.innerHTML = 'Sorry, we still do not support this feature. Come back again sometime. Thanks!'
            return;
          }
          if (this.isDesktop()) {
            console.debug('You are viewing in Desktop mode');
            console.debug('check this project name -->', this.projectName);
            var app = this.projectName;
            demo.list[app].call(this, options);
            if (!demo.list.hasOwnProperty(app)) { throw "Sorry, that demo app does not exist on the list."}
          }
        }
      }
    },
    // Project Lists
    list: {
      blocks: function (app) {
        var labels = {};
        // console.debug('check this app -->', app);
        var game = app.gameBoard();
        var boardGame = game.create('gameboard').addText('Game Start','h1');
            // game.addClass('wmc-game-board');
            
            // game.create('function').triggers({
            // })

            // game.events();
            // game.render();
        let win = window;
        let startButton = document.querySelector('.wmc-game-board > h1');
        var trigger = {};
            // console.debug('check this start button -->', startButton);
            // win.addEventListener('resize', trigger.resize);
            

        trigger = {
          click: function (e) {
            e.preventDefault();
              this.remove();
            return trigger.init();
          },
          resize: function (e) {
            console.debug('trigger resize events -->', e);
          },
          init: function () {
            // alert('Game Triggered!');
           var object = document.createElement('div');
           var shape = {
                 box: function (el,s) {
                   el = el;
                   s = s || {};
                  //  var style = el.style;
                  //   style.width = "100px";
                  //   style.height = "100px";
                  //   style.border = "1px solid #fff";
                  trigger.elemClass(el).add('wmc-box')
                 },
                 circle: function (el,s) {
                   s = s || {};
                   var style = el.style;
                   style.width = "100px";
                   style.height = "100px";
                   style.borderRadius = "100%";
                 }
               }

           var newBoard = document.querySelector('.wmc-game-board');
          
           shape.box(object);
           this.elemClass(object).add('wmc-box');
           newBoard.appendChild(object);
           
           this.events(object);
          
          //  console.debug('created box element -->', box);
          //  box.transform('box', {});
          //  box.render();
          //  box.animate();
          //  box.action();

          //  var score = game.score();
          //  score.player();
          },
          elemClass: function (el, props) {
              el = el;
              return {
                add: function (name) {
                  el.classList.add(name);
                },
                remove: function (name) {
                  el.classList.remove(name);
                }
              }
          },
          events: function (obj, event) {
            obj = obj;
            // Box Events
            obj.addEventListener('click', this.actions);
            
          },
          actions: function () {
            alert('Box Destroyed!');
            labels.message = "Box Destroyed!";
            let note = document.createElement('section');
            let noteText = document.createTextNode(labels.message);
                note.appendChild(noteText);
            
            let board = document.querySelector('.wmc-game-board');
            board.appendChild(note);
            trigger.elemClass(note).add('wmc-message');
            
            let checkMsg = document.querySelectorAll('.wmc-message');
            if (checkMsg.length > 1) {
              note.remove();
            }

            let box = document.querySelector('.wmc-box');
            box.remove();
            
            trigger.init();

            let animation;
            
          }
        }

        ui = {
          animate: function(element, type) {
            
            var animate;

            animate = {
              element: function() {

                return this;
              },
              types: {
                "fadeIn": animate.element(),
                "fadeOut":"",
                "show":"",
                "hide":"",
                "":"",
              }
            }

            if (animate.hasOwnProperty(type)) {
              return animate.types[type].call(this);
            }
          }
        }

        startButton.addEventListener('click', trigger.click);

        

      }
    }
  }

  // Checks once the user is logged in and then disable login function
  if ('login' in window) {
    if (window.addEventListener) {
      window.addEventListener('message', function () {
        console.debug('Complete login datbase');
        console.debug('Deleting Function');

        delete window['login'];
        window['logout'] = function (usr) {
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
  // window['player'] = api.player;
  // window['testStorage'] = storage;
  // window['ui'] = ui;
  // window['gameActions'] = fn.game;
  // window.dataCollection = api.data;
  WMC['mode'] = ui.mode;
  WMC['storymode'] = ui.storyMode;
  WMC['BGTmode'] = ui.BGTMode;
}).apply(null,

  // Enable API if TRUE
  WMC === true && SDKType.hasOwnProperty('api') && SDKType.api ?
    [(self || window || this),
      function (state, api) {

        return (self || window || this)[state] = api;
      },
      undefined,
      document,
      "use strict"] :

    // Enable MODULES if TRUE
    WMC === true && SDKType.hasOwnProperty('modules') && SDKType.modules ?
      [(self || window || this),
        function (state, modules, WMC) {
          var SDK = state === 'WMCjs';
          if (!SDK) { throw ("Cannot open SDKjs.. Please try again..") };

          for (var m = 1; m <= modules.length; m++) {
            var modName = (typeof modules[m] != 'undefined') ? modules[m] : null;
            WMC[modName];
            (modName in window) ? console.debug('Synced Module..', modName) : console.debug('Module still syncing...');
            (m === modules.length) ? [console.debug('WMC SDK Completely Synced!'), synced = true] : [console.debug("WMC syncing to SDK...", modName)];
          }

        },
        undefined,
        document,
        "use strict"] :

      [('')]

  )

//(window.self === window.parent ? window.parent : window , ['','WMCjs','WMCAsync'], undefined)



