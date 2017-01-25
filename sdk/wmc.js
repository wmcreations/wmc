// Walandio Martian Creation - SDK
// Version 1.0.0
// Web Game App SDK -
// @ Developer: walandio, martian
//


// WMC Predefined Settings
(function (define, WMCType, undefined, document, isStrict) {
  isStrict;

  var MainType = (function () {
        function MainType() {
          this.path = define.location.href;
          return this.init();
        }
        MainType.prototype = {
          api: (function () { return { api: true } })(),
          modules: (function () { return { modules: true } })(),
          init: function () {
            var href = this.path;
            if (href.includes('api')) return this.api; else return this.modules;
          }
        }
        return new MainType();
      })();

    var settings = {
        WMC: true,
        WMCType: MainType
      }

  // Initialize WMC Type
  WMCType(settings, define);

})((self || window || this), function (settings, w) {
  var isWMC = settings.hasOwnProperty('WMC');

  function checkType(type, value) {
      // Create SDKType
      w.SDKType = {
        [type]: value
      }

      // Create SDKType for WMC Globals
      if ('WMC' in window) {
        WMC.SDKType = w.SDKType;
      }
      return;
  }

  function WMCType(settings) {
    if (settings.hasOwnProperty('WMCType')) {
      var WMCType = settings.WMCType;
      for (var isTypeof in WMCType) {
        checkType(isTypeof, WMCType[isTypeof]);
        if (WMC.SDKType.api) {
          loaderAPI(document, 'api.js', 'wmc-api', true);
        }
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

  // This WMC SDK Globals
  function WMCGlobals(WMCGlobals, prop) {
    console.debug('check this WMC -->', w.WMC);
    // Overwrite WMC Globals once, it set to true
    for (var p in prop) {
      if (!WMCGlobals.hasOwnProperty(p)) {
        WMCGlobals[p] = prop[p];
      }
      for (var i in prop[p]) {
        if (!WMCGlobals[p].hasOwnProperty(i)) {
          WMCGlobals[p][i] = prop[p][i];
        }
      }
    }
    return WMCGlobals;
  }

  // Initialization before WMC-SDK Compiler
  if (isWMC) {
    window['WMC'] = {};
    WMC.status = isWMC;
    WMCType(settings);
    window['WMCGlobals'] = WMCGlobals;
  }

}, undefined, document, "use strict");

// WMC SDK - Intialization
(function (_WMC, modules, undefined, document, isStrict, deferfn) {
  isStrict;

  _WMC.synced = false,
    defineWMC = {};

  // Initialize modules
  modules('WMCjs', ['', 'WMCjs', 'WMCAsync'], _WMC);

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
          WMC[define] = function (usr, pwd) {
            WMC[define].usr = usr;
            WMC[define].pwd = pwd;
            WMC[define].key = '';
            WMC[define].id = '';
            return WMC[define];
          }
          console.debug('Created function login >>>', define);
          return;
        case 'start':
          WMC[define] = fn.engine.start();
          console.debug('check this start -->', define);
          return;
        case 'screen':
          args = args || [] || {};
          WMC[define] = function (width, height) {}
          return;
        case 'server':
          args = args || [] || {};
          WMC[define] = function (choose) {

            typeof choose === 'undefined' ? [console.error('Please specify your correct environment.')] :
              choose instanceof Function ? [(choose).call(this)] :
                typeof choose === 'string' ? [api.server(choose)] :
                  console.debug('Sorry the environment does not exist. Please try again.');

            console.debug('Initializing... >>>>>>', define);
            return;
          }
          console.debug('Created function server >>>', define);
          return;
        case 'mapFunctions':
          // mapFunctions are only used for development. Use this function to detect the functions created
          WMC[define] = fn.checkFuncs(args);
          if (typeof objects !== 'array') { return console.error('Could not map available WMC functions.') }
          return;
        case 'load':
          args = args || [] || {};
          console.debug('This is load function');
          WMC[define] = fn.engine.load;
          return;
        case 'connect':
          WMC[define] = api.callDataFunc;
          console.debug('Created function >>>>>> ', define);
          return;
        case 'template':
          WMC[define] = ui.template;
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
      // var BRAND = BRAND || "";

      nameFn = nameFn;
      settings = settings;

      // BRAND = {
      //   overwite: 'BRAND',
      //   list: {
      //     modules: true,
      //     api: false
      //   }
      // }

      // Settings for nameFn
      var isDemo = /^[D|d](emo|EMO)/ig,
          isBrand = /[B|b](rand|RAND)/ig,
          isDB = /^[D|d](atabase|ATABASE)/ig;

      // -- Database Config --
      // Example for settings format
      // { db:'open', dbName:'game.json'}
      if (typeof nameFn == 'string' && nameFn.match(isDB)) {
        if (settings === null || settings === '' || settings === undefined) { settings = {} }
        if ( typeof (settings.db && settings.dbName) !== undefined ) return console.debug(settings.dbName);
      }

      // -- Demo Project Config --
      // This configuration is for Demo Projects
      if (typeof nameFn == 'string' && nameFn.match(isDemo)) {
        if (settings == 'on' || settings == 'enable' || settings == true) {
          window.demo = demo;
        }
      }

      // -- BRANDING Config --
      // This Configuration is for BRANDING
      if (settings === true) {
        if (typeof nameFn == 'object' && nameFn instanceof Array) {
          if (nameFn.hasOwnProperty('brand') && nameFn.brand) {
            for (var l in nameFn) {
              for (var o in nameFn[l]) {
                if (nameFn.list.hasOwnProperty(o) && nameFn.list.hasOwnProperty(o)) {
                  if (nameFn.overwrite === l && l in window) {
                    console.debug('check this nameFn overwrite -->', nameFn.overwrite);
                    var obj = 'WMC' in window ? window['WMC'] : l ;
                    window[l] = {};
                    window[l] = obj;

                    if (!nameFn.list.api) {

                    }
                    // Once Brand is implemented, then delete WMC
                    delete window['WMC'];
                  }
                }
              }
            }
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
      // Work in progress
      start: function(){

        var START = (function(){
          function start(nameFn, startFn) {
            this.name = 'start';
            return this.start = this.init;
          }
          start.prototype = {
            init: function(_name, callback) {
              _name = _name || "";
              callback = callback || function(){};
              if (_name == 'deck') {
                return api.deck();
              } else if (_name == 'hero') {
                return api.hero();
              } else {
                callback();
              }
            }
          }
          console.debug('check this new start -->', start);
          return new start;
        })();

        return START;
      },
      // Work in progress
      end: function () {
      },
      // Work in progress
      error: function (err) {
      },
      // Work in progress
      after: function (fn) {
        return fn();
      },
      // Work in progress
      init: function () {
      },
      load: function (dfn, opts, callbackFn) {
        opts = {};
        this.name = 'load';
        console.debug('check this --> dfn', dfn);
        console.debug('check this --> opts', opts);
        console.debug('check this --> callbackFn', callbackFn);

        if (callbackFn instanceof Function === false) { callbackFn = callbackFn; }
        if (typeof dfn === 'object' && callbackFn instanceof Function === false) {
          dfn.forEach(function (val, key) {

            // Checks the function from UI to load
            if (ui.hasOwnProperty(val)) {
              ui[val].call(this);
            }

            // Checks the function from API Environment to load
            if (api.hasOwnProperty(val)) {
              var _api, _ui;
              _api = {
                type: "api",
                list: {
                  environment: true,
                  data: true
                }
              }
              console.debug('check this lists of api -->', api);
              deferfn.fn(_api, val);
              api[val].call(this, callbackFn);
            }
          });
          callbackFn = callbackFn;
          return;
        }

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
    create_api: function(name, callback) {
      if (!api.hasOwnProperty(name)) return api[name] = callback;
      else console.error('Function name created already exists.');
    },
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
    get: function (d, event) {
      // Load jQuery and use AJAX callback
      d = d || {}, g = {}, fn = api.get;
      var method_type = fn.name;
      console.debug('Check this method_type -->', method_type);

      if ('jQuery' in window) {
        jQuery.ajax({
          method: method_type,
          data: d,
          success: function(d) {
            console.debug('Retrieving Data Success! -->', d);
            return d;
          },
          error: function(e) {
            console.debug('Retrieving Data Failed! -->', e);
          }
        })
      }
      else {

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
    data: function (event_name, data) {
      // DC - Data Collection Event Handler
      var dc = {}, event_handler = {};
      event_name = event_name;

      dc = {
        loc: 'data/',
        "game": dc.loc + 'game.json',
        "deck": dc.loc + 'deck.json',
        "environment": dc.loc + 'environment.json',
        "quests": dc.loc + 'quests.json',
        "user": dc.loc + 'user.json',
      }

      event_handler = {
        get: api.get(dc[data]),
        post: api.post(dc[data]),
        put: api.put(dc[data]),
        search: api.search(dc[data])
      }

      console.debug('Check event_handlers -->', event_handler);
      return event_handler[event_name];
    }
  };

  // -----------
  // Modular UI
  // -----------
  ui = {

    // WMC HTML Template
    //
    //
    nodeEach: function(node, validNode) {
      for (var n=0; n < node.length; n++) {
        console.debug('check each nodeName -->',node[n].name);
        if (node[n].name === validNode) {
          alert(node[n].nodeName+"\n"+node[n].nodeValue);
          return node[n].nodeValue;
        }
      }
    },
    templateEnable: function (element) {
      // console.debug(element['data-wmc-template']);
      console.debug('check this element -->', element);
      var tmp_enable = ui.nodeEach(element, 'data-wmc-template');
      return tmp_enable;
    },
    template: function (flags, event) {
      this.name = 'template';
      var htmlShowEach, templateAttrbCheck, callTemplateEnabler, htmlChildren,
        htmlAttributes, htmlNodeName, htmlNodeDataSets, wmcLabel, wmcType;

      flags = flags || {};
      // Check window type if parent or self
      var getAllElem = document.body.children,
          nodeName = 'wmc',
          wmc = nodeName || nodeName.toUpperCase();

      // Checking all HTML elements

      return this, {
        checkElement: function () {
          for (var chck = 0; chck < getAllElem.length; chck++) {
            htmlShowEach = getAllElem[chck];
            if ( (htmlShowEach.length !== -1) ) {
              console.debug('check this HTMLELEMENTS -->', htmlShowEach);
              templateAttrbCheck = htmlShowEach.attributes;
              callTemplateEnabler = ui.templateEnable(templateAttrbCheck);
              // Check callTemplateEnabler
              console.debug('check this callTemplateEnabler -->', callTemplateEnabler);

              if (callTemplateEnabler == 'off') { return alert('Template disabled.'); }
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
                            ui.login(data, attributes, htmlElement);
                          }
                          else if (wmcType === 'contact') {
                            var data = htmlChildren[x].innerText;
                            var attribute = {};
                            var htmlSelector = htmlChildren[x];
                            ui.contact(data, attributes, htmlElement);
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

                        // case 'modes':

                        //   if (wmcType === 'story-mode') {

                        //   }
                        //   if (wmcType === 'extra-mode') {

                        //   }
                        //   if (wmcType === 'gallery-mode') {

                        //   }

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
      var createDomElement = document.createElement(element);
      console.log('created element -->',createDomElement);
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
          regexp = {
            scope: /[{]|[}]/ig,
            colon: /[:]/ig
          },
          settings = renderTemplate.innerText;


      var config = settings.replace(regexp, "").split(regexp.colon);
      // console.debug(settings);
      console.debug(config);

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

      return renderTemplate;
    },
    // UI Redeem
    redeem: function () {

    },
    // UI Events
    // Work in progrees
    events: function (event, triggerFn) {

      if (event) {
        this.game = triggerFn || function () { };
        this.reward = triggerFn || function () { };
        this.player = triggerFn || function () { };
        this.back = triggerFn || function () { };

        return this[event];
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
    mode: function() {

      var MODE = (function(){
        function modes(type){
          this.type = type;
          alert('Mode: ' + typeof this.type);
        }
        modes.prototype = {
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
      return new modes;
      })();

      return MODE;
    },
    // Mode Selectors
    storyMode: function(mode){ ui.mode(mode) } ,
    // ------- This is the Battle Ground Tournament
    BGTMode: function(mode){ ui.mode(mode) } ,

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
  WMC.status === true && WMC.SDKType.hasOwnProperty('api') && WMC.SDKType.api ?
    [(self || window || this),
      function (state, api) {

        return (self || window || this)[state] = api;
      },
      undefined,
      document,
      "use strict"] :

  // Enable MODULES if TRUE
  WMC.status === true && WMC.SDKType.hasOwnProperty('modules') && WMC.SDKType.modules ?
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
        "use strict",
        (function() {
          var deferral;

          deferral = (function(){

            function defer(){
              this.name = this.name;
            }

            defer.prototype = {
              fn: function(opts, val){
                this[opts.type].call(this, opts, val);
              },
              api: function(opts, val) {
                console.debug('check this val -->', val);
                if (opts.list.hasOwnProperty(val) && opts.list[val] === true) {
                  console.debug('check this to defer api list -->', val + "-->" + opts.list[val]);
                  return false;
                }
              },
              ui: function(opts, val) {
                for (var l in ui) {
                  if (opts.list.hasOwnProperty(val) && opts.list[val] === true) {
                    console.debug('check this to defer ui list', val + "-->" + opts.list[val]);
                    return false;
                  }
                }
              }
            }
            return new defer;
          })();

          return deferral;
        })(window || self || this)] :

      [('')]

  )

//(window.self === window.parent ? window.parent : window , ['','WMCjs','WMCAsync'], undefined)



