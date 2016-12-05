 /* 


 * NAME: windows
 * in: windows.js 
  _______________________

                                                  MH   ._
                       .,v_                      L"`H  H"}  .
                     ,H" J#\                     S  T.|P 9.,H|
                    ,M'./\/ `v.              ,/""'  `'`^ |dT F
                    Hkr' <\_  `\vvv_      .v^             '  % .v~?
                     `"`~\.`\_ `&&'&\ o+vM^                 `d' |[ 
     ┌┬┐┌─┐┌┬┐┬ ┬┬  ┌─┐   `+HHMHHMMMZ&J'  `"?-               `'  J|  
     ││││ │ │││ ││  ├┤       "*&9HHMMHHH+,  `~-            .     /:. 
     ┴ ┴└─┘─┴┘└─┘┴─┘└─┘         ```<*<R}HH*'             , \     '/
     ┌─┐┬  ┌─┐┌─┐┬ ┬┬─┐┌─┐           &b":|               `'`     /&|
     │  │  │ │└─┐│ │├┬┘├┤            `M\`'               _.      :b.
     └─┘┴─┘└─┘└─┘└─┘┴└─└─┘            |&H\               "`\.,\|#\.
                                     "M]&MHo.         |.  _H"''`` `
                                      `MM&&?&,    _,/^""*"'
                                       JMP???*=d-d&~=?..
                                      ,d\:-\::--:--:(/&'&?p ,~?,
                                    .?:._`'--:--:`\/H:/oP-~? d-?|
                                   |/---_?`-.:`\,MHHHb&H':*   -^6
                                  +6Z::~--:?:-&?/     `'  -^"'"`'
                                   &o??:-\o_:?'|
                                   {MMMMMMMMMMH
                              , ,dbHMMMMMMMMMMMb.
                           _&dH/"   \*"  `[?&9&H"\d?o<_.._
                           `"'""\==~`\vv\\\ooo='""&MM&:^M?--
                                                --  `"        """'
 */
 
 /** 
 * 
 * Module that creates and manage windows.
 * @module windows
 *
 * @param {object} configWin - javascript object with windows configuration.
 *
 */
module.exports = function windows () {
  
     /** 
       * 
       * 
       * @require electron - electron API.
       * @require electron.app - module to control application life activity
       * 
       * 
       */

  var _electronAPI = require( 'electron' );
  var _BrowserWindow = _electronAPI.BrowserWindow;
  
    /** 
     * 
     * Build a window using the electron-lib.
     * @method createWindow
     *
     * 
     * 
     */
  function createWindow( _url, _config ) {

	 // Create the browser window.
     var _window = new _BrowserWindow( _config ); 

     // the url of the view
      _window.loadURL( _url );
	 
	  // Open the DevTools for debuggin purposes.
	 _window.webContents.openDevTools();

	  // Emitted when the window is closed.
	  _window.on( 'closed', function () {
	    // Dereference the window object, usually you would store windows
	    // in an array if your app supports multi windows, this is the time
	    // when you should delete the corresponding element.
	  _window = null;

	  });
     }






   return {
    /** 
     * 
     * Description for the method.
     * @method window
     *
     * 
     * @return a basic window object
     */
     window:function ( url, config ) {    	 
		   /**
		   * 
		   * @namespace {javascript-object} config - javascript object with the basic window characteristics
		   * @default {width:800, height:600, fullscreen: true, autoHideMenuBar: true, webPreferences: {devTools: true (for debuggin purposes)}
		   * @namespace {string} url - the view for rendering on the borwser
		   * @default `file://${__dirname}/app/index.html`
		   *
		   */
		   var _config= config || {

		   							width:800,
		   						    height:600,
		   						    fullscreen: true,
		   						    autoHideMenuBar: true,
		   						    webPreferences: { devTools: true }

		   							};

		   var _url= url || 'file://' + $ + '{__dirname}/app/index.html';


     	   var main= createWindow( _url, _config ); 

     	return main;

     	}


     };

     





}; 
