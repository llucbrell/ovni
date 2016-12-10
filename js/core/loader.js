 /* 


 * NAME: loader
 * in: loader.js 
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
 * Module that returns an object with all the closure-modules from an specified folder. 
 * @module loader
 *
 */
module.exports = function loader () {
  
     /** 
       * 
       * 
       * @require fs - file system node native module.
       * 
       * 
       */
    var _filer = require( 'fs' );
   
    var _path;
    var _userpath;
    var _loadedObject = { };
    var _pathFiles = [ ];
  
 // function that requires all the js-files and  store them into a javascript object  
    function myLoad ( callback ) {
        _pathFiles.forEach( function ( element ) {
          console.log( "loaded " + element );
            _loadedObject[ element.substring( 0, element.length-3 ) ] = require( _path + '/' + element )();
      });
         callback();
    }
   // Stores all the file paths inside an array.   
  function leedir ( callback ) {
   
  _filer.readdir( _path,  function ( err, files ) {
      if ( err ) {
         // retuns an error object
        var error = { msg: "Loader can't read folder", data: err };
        console.log( err );
        return error;
      }
      else {
      files.forEach( function ( element ) {
        _pathFiles.push( element );
        //process.stdout.write(" "+element);        
        });
      // call for loading
        myLoad( callback );
      }
   });      
 }   



   return {
    /** 
     * 
     * Method that makes all the hard work, returns an object with all the closure-modules from an specified folder. 
     * @method path 
     * @param userPath - the folder's path
     * @param callback {function}
     * @return {javascript-object} a matriusca with all the modules loaded into.
     */
     path:function ( userPath, callback ) {      
       /**
       * 
       * @namespace {string} userPath - the folder's path for the modules to load
       * @todo Implement error handling
       */
       _userpath = userPath;
       if ( userPath[ 0 ] === '.' ) userPath = userPath.substring( 1, userPath.length );
            _path = __dirname + userPath;  
        // fullfill the _loadedObject
        leedir(  callback );
        // return that object
        

        return _loadedObject;

      }


     };

     





}; 
