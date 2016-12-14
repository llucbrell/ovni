/* 


 * NAME: Notify Interface
 * in: notifyInterface.js 
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
 * The Comunication Interface betweeen core services and Notifications sercice. Every Core service must implement it's own interface into th folder ./js/core/comunication-interfaces for arrange comunication changes or substitutions in services. If you make a big change in one service, it's a good practice to adpat the changes into the interface. 
 * @module notifyInterface
 *
 *
 */
module.exports = function notifyInterface ()  {
  

    return{
      create:function( paramsArray ){

       var _newParamsArray = paramsArray;

         if ( paramsArray [ 0 ] === undefined ){
          //handle error for title
          _newParamsArray [ 0 ] =  undefined;

         }
         if ( paramsArray [ 1 ] === undefined ){
          //handle error for message
         _newParamsArray [ 1 ] = undefined;

         }

         if ( paramsArray [ 2 ] === undefined ){
          //handle error for icon
          _newParamsArray [ 2 ] = __dirname + '/../../../assets/icons/notification.svg'


         }
         if ( paramsArray [ 2 ].substring( 0, 5 ) === 'error' ){
          //add error icon
          _newParamsArray [ 2 ] = __dirname + '/../../../assets/icons/notification-error.svg'


         }
         if ( paramsArray [ 2 ].substring( 0, 7 ) === 'warning' ){
          //add error icon
          _newParamsArray [ 2 ] = __dirname + '/../../../assets/icons/notification-warning.svg'


         }
         if ( paramsArray [ 2 ].substring( 0, 4 ) === 'info' ){
          //add error icon
          _newParamsArray [ 2 ] = __dirname + '/../../../assets/icons/notification-info.svg'


         }
/** 
 * 
 * @todo Implement icons for different skins (maybe skin in ovni.json or use of a database )
 *
 */

         if ( paramsArray [ 3 ] === undefined ){
          //handle error for duration
          _newParamsArray [ 3 ] =  10000;

         }
         
          return _newParamsArray;
      },
    }

};
