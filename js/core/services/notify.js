 /* 


 * NAME: notify
 * in: notify.js 
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
 * Core module for building notifications.
 * @module notify
 *
 *
 */
module.exports = function notify () {

var notifier = require( 'electron-notifications' );

 /** 
     * 
     * Build a the notification using the electron-notifications node-module.
     * @method createNotification
     *
     * 
     * 
     */
function createNotification( title, notifyObject ){ 
	
	// uses electron-notigications to notify something

	if( notifyObject.buttons !== undefined ){

		var notificate;
		if( notifyObject.buttons.length === 2 ){

			var buttonsfunction =  notifyObject.buttons[ 1 ];
			var buttonsLayer = [ notifyObject.buttons[ 0 ] ];
			
			notifyObject.buttons = buttonsLayer; // pass the layer of buttons befor set the listeners
			notificate = notifier.notify( title , notifyObject );
			

			notificate.on('buttonClicked', function (text) {
			  if (text === notifyObject.buttons[0]) {
			    // execute code for button one
			    buttonsfunction();
			  }
			  notificate.close();
			});
		}
		if( notifyObject.buttons.length === 4 ){
			// get the function and the layers
			var buttonsfunction2 = notifyObject.buttons[ 3 ];
			var buttonsfunction = notifyObject.buttons[ 1 ];
			var buttonsLayer = [notifyObject.buttons[ 0 ], notifyObject.buttons[ 2 ]] ;

			notifyObject.buttons = buttonsLayer; // pass the layer of buttons befor set the listeners
			// set the notification
			notificate = notifier.notify( title , notifyObject );

			notificate.on('buttonClicked', function (text) {
			  if (text === buttonsLayer[ 0 ]) {
			    // execute code for button one
			    buttonsfunction();
			  }
			  if (text ===  buttonsLayer[ 1 ]) {
			  	// execute code for button two
			    buttonsfunction2();
			  }
			  notificate.close();
			});
		}
		
	}
	else notifier.notify( title , notifyObject );



	

}

   return{
    /** 
     * 
     * Start the service.
     * @method start
     *
     * 
     */
     start:function () { console.log( 'Notify - ready to recieve notifications') },
	/** 
     * 
     * Comunication port for building notifications from other core extensions
     * @method create
     * @param { array } - array with the options for building notifications. Options are title - String / message - String / icon - String (path or url for the icon) / duration - miliseconds / buttons - array with one string for the text of the button , another for the function to execute when it's clicked. Buttons only can be one or two.
     * 
     */
     create:function ( array ) { 
     	var title = array [ 0 ];
     	var message = array [ 1 ];
     	var icon = array [ 2 ];
     	var duration = array [ 3 ];
     	var buttons = array [ 4 ];


     	// call the function that creates the notification
     	createNotification( title, {
     		message: message,
     		icon: icon,
     		duration: duration,
     		buttons: buttons,
     		
     	});


     },



     };
}; 
