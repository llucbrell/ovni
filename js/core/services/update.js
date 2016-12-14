/* 


 * NAME: updater
 * in: updater.js 
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
 * Module that manages an update app version when ovni starts
 * @module updater
 *
 *
 */
 module.exports = function updater () {
     /*
     * @require latest - module to get last semVersion from npm
     * @require pkage.json - loads the app package.json file 
     * @require compare-semver - compare the semantic versions
     */
     var latest = require( 'latest' );
     var pkg = require( '../../../package.json' );
     var compare = require( 'compare-semver' ); 
     var coreCom= require('../core.js')().coreCom; 
     var mustUpdate;

  return {
  /** 
     * 
     * Checks the server for an update and compares with running version
     * @method check
     *
     * 
     */
     start:function () {
     // stores the last version
      var lastVersion;

         /** 
         * 
         * @todo change repository for checking version
         */
      // call npm and get the last semVer of the app
      latest( 'audrey-two', function ( err, v ) {
      // asign the version to one variable (more readable)
      lastVersion = v; 
      // the running version of the app
      currentVersion = pkg.version;
      // put the versions in the array
      var versions = [ lastVersion, currentVersion ];
      // compare the versions
      var maxSemver = compare.max( versions );
      //call the core if we need to update the app
      if ( maxSemver === lastVersion ) 
        {mustUpdate = true; 
        }
      });
    },
     /** 
     * Start the comunication with other parts of core to inicialize the update
     * @method startCom
     *
     * 
     */
     startCom:function(){

        // run the script to actualize the OS
         var install = function install(){
            console.log("Installation inicialized");
         }
         var reset = function reset(){
            console.log('reset');
         }
      
      function repeat() {
        // listen eery second til http request is finished
       if( mustUpdate !== undefined ){ 
            // if there is a new release
            if( mustUpdate === true ){
            //console.log(__dirname + '../../../assets/icons/info.png');
             
             // builds a notification to display to the user
             coreCom.create ( 'notify', ['Update Version',
                                          'new version of Ovni avaliable', 
                                          'info', 
                                          10000, 
                                          ['Install', install , 'Reset' , reset ] ]);

            
            }
            // when the request is finished, clean the setInterval
        clearInterval(intervalId);
          }
                  
        }
        // the interval for checking when the http request is finished
      var intervalId = setInterval(repeat, 10000);

     
    }  


  };
};