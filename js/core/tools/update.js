/* 


 * NAME: update
 * in: update.js 
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
 * Module that update app version
 * @module update
 *
 *
 */
 module.exports = function update () {
     /*
     * @require latest - module to get last semVersion from npm
     * @require pkage.json - loads the app package.json file 
     * @require compare-semver - compare the semantic versions
     */
     var latest = require( 'latest' );
     var pkg = require( '../../../package.json' );
     var compare = require( 'compare-semver' ); 
 


  return {
  /** 
     * 
     * Checks the server for an update and compares with running version
     * @method check
     *
     * 
     * @return true or false if there is an update
     */
     check:function () {
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
      if ( maxSemver === lastVersion ) console.log( "update please" );
      });
    }  


  };
};