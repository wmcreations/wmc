# Walandio Martian Creation SDK

GETTING STARTED:
================
In your HTML file, indicate a line of code of script file at the bottom of your page:

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



