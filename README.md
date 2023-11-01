# World of Martian Creations SDK

GETTING STARTED:
================
In your HTML file, indicate a code line of script file at the bottom of your page:

    <script src="wmc.js" type="text/javascript"></script>

Once the script is now attached to the HTML, you can now start implementing this code to open WMCjs features. 


Example:
--------
Enable one function:

    WMCjs('open').defineFn('load')


Enable multiple functions and put it into an Array variable:

    var funcs =  [ 'load', 'start', 'server', 'template'];
    WMCjs('open').defineFn(funcs);


Notice: The WMCjs('open') must be defined as 'open', otherwise the WMCjs will just close. This is a better way of scope
functions for not to be exposed.


After functions are enable, you can start using 'load()' for each functions that needs to be executed:

    // Use this to check if functions are available to use:
    // Check in Browser Console

    funcs.forEach(function(val, key){

      for(val in window){
        console.debug('WMC Function checked and working >>>>', val) // Debug 
        console.log('WMC Function checked and working >>>>', val) // Log 
      }

    })

    // How to use load() functions:
    // Use Single or Multiple callbacks

    // Single Function to be called
    load('template')

    // Multiple Functions to be called
    var lists = ['template','screen','hero','deck']
    load(lists)

    or

    load(['template','screen','hero','deck'])




