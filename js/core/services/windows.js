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
 * Module that creates and manage the ovni main-window.
 * @module windows
 *
 *
 */
module.exports = function windows () {
  
     /** 
       * 
       * 
       * @require electron - electron API.
       * @require electro.BrowserWindow - module to create windows
       * @require ovni.json - configuration file
       * 
       */
  var _BrowserWindow = require( 'electron' ).BrowserWindow;
  var ovniJSON = require('../../../ovni.json');
     /** 
       * @namespace {javascript-object} _windows - all the windows active in the sesion  
       */
  var _windowStack = {};
  



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


 // for a more native feel less browser load view experience
     _window.once('ready-to-show', function () {
        _window.show();
      });

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

    // store the window on the namespace _windowStack 

     _windowStack[ _config.ovni.id ] = _window;

  }
 





   return {
    /** 
     * 
     * Open the ovni's main window
     * @method windows.start
     *
     * 
     * 
     */
     start:function () { 
     var _url;   	 
		   /**
		   * 
		   * @namespace {javascript-object} config - javascript object with the basic window characteristics
		   * @default {width:800, height:600, fullscreen: true, autoHideMenuBar: true, webPreferences: {devTools: true (for debuggin purposes)}
		   * @namespace {string} url - the view for rendering on the borwser
		   *
		   */
		   var _config = ovniJSON.wconfig.default; // get the windows characteristics
       _config.ovni =  { id: "ovni-main", name:"main" };


        // set the default view or skin            
       if ( !ovniJSON.skin ) _url= 'file://${' + __dirname +'}/../../../views/main.html';
       else _url = 'file://${'+ __dirname + '}/../../../' + ovniJSON.skin.html;

     	 var main= createWindow( _url, _config ); 

     	},

    /** 
     * 
     * Create a new window
     * @method windows.create
     *
     * 
     * 
     */
     create:function ( url, type ) {      
       /**
       * 
       * @namespace {javascript-object} config - javascript object with the basic window characteristics
       * @default {width:800, height:600, fullscreen: true, autoHideMenuBar: true, webPreferences: {devTools: true (for debuggin purposes)}
       * @namespace {string} url - the view for rendering on the borwser
       * @default `file://${__dirname}/app/index.html`
       *
       */
       var _config;

       if( !type ) _config =  ovniJSON.wconfig.default;
       else _config =  ovniJSON.wconfig[ type ]; // get the windows characteristics

    /** 
     * @todo implement not url error 
     */
     // set the ovni's object 
       if ( !url ) _config.ovni = { id:"anonimous", name:"anonimous"}; 
       else _config.ovni =  { id: url  , name: ovniJSON.apps[ url ].name}; // unic identifier
    /** 
     * @todo implement mixt window mode
     */
       if( url.substring(0,4)=== "http" )_url=  url; 
       else _url = 'file://${' + __dirname + '}/../../../' + _config.ovni.id;


       var main= createWindow( _url, _config ); 

      },

    /** 
     * 
     * Obtain the windows objects
     * @method windows.read
     * @return {javascript-object} - the windows stack
     * 
     * 
     */
      read:function (){
          return _windowStack;
      },
    /** 
     * 
     * Update the windws stack
     * @method windows.update
     * @param windowId { string } - the id
     * @param action { string } - the action to update the window. Possible actions are - close, minimize
     * 
     */
      update:function ( windowId, action ){
           if ( action === 'hide' )  _windowStack [ windowId ].hide();
           
           if ( action === 'show' ) _windowStack [ windowId ].show();

           if ( action === 'minimize' ) _windowStack [ windowId ].minimize();

           if ( action === 'restore' ) _windowStack [ windowId ].restore();
           
           if ( action === 'close' ) {
               _windowStack [ windowId ].close();
               delete _windowStack[ windowId ];
           }
           
      },
    /** 
     * 
     * Update the windws stack
     * @method windows.update
     * 
     */
      delete:function ( windowId ){

        _windowStack [ windowId ].destroy();
        delete _windowStack[ windowId ];
          
      }






    };

     





}; 
