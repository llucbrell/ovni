/*HHEADER
       dP                dP       dP                                                 dP         
       88                88       88                                                 88         
       88d888b. .d8888b. 88d888b. 88d888b. .d8888b. .d8888b. .d8888b. .d8888b. .d888b88 .d8888b.
       88'  `88 88'  `88 88'  `88 88'  `88 88ooood8 Y8ooooo. 88'  `"" 88'  `88 88'  `88 88ooood8
       88    88 88.  .88 88.  .88 88.  .88 88.  ...       88 88.  ... 88.  .88 88.  .88 88.  ...
       dP    dP `88888P' 88Y8888' 88Y8888' `88888P' `88888P' `88888P' `88888P' `88888P8 `88888P'


                                                                                                 
                                   i8@@8Li.                t@8000                                
                                 .GitL:::GGGC;             G8ifGt80LtL11,.                       
                                  C,Li;i8i;Ci:ti  i11i:;i::i00ii;;ifffi;;f@8                     
                                  ,L;0L88iCf;L01f.   ,;  ifG0101f0t:;:;;;1GC                     
                                    t@80CL0LfC,    ,1i :;ii CGti1;G8fi::fCiL:                    
                                      L0C11tGf;      ,1;   L .;:.         Lii                    
                                      ,i0fLGt;f1.    t:                    1.                    
                                    ;0C8Li;t88L;:,,i  :t,          :1 .,  .t                     
                                  18i;i;1fC8tL,      .             ,  1. :L                      
                                1C:;G8Gf;f;             ::::      ;LG0t. iLG0CCi                 
            ..t0fC0tGt,       iC:ifCGCt:             ;,    ;L  i G1G0C11CLCL1C88CGti             
          ,Li;G01f01C::GC.   C8G1;:;:;              t           ii8@@@@@C  ;G81iGfitCtt1tf:      
        .CiGtL,      :0:;8: Gi:i08@8.           ..                .ifft,       iL:.       .1     
       .0CLfi          Ct;;08Cffti1.          .,                                f.  i   it:      
       t1i:L            0GLf:::;;;i          ;.                                 i  :.  ;   ::    
       0@@@;            ,iGt:::;:1          f                                    ;; ,i  i1ti     
       C@@@.             18888@@8C         .f     :t11:                               t. i       
       .8@0               G;:::;C8f      :;.L   ,i   , f                                         
                          ff:C8L;;;: t81,:8::f..f    @1 1                                        
                          G0i:::i8L10@8,,ff,f0L0. t@,.f.1                                        
                           C1:18L:i8;88,:Lf8t:f:   : Lt:.                                        
                           ,80C:::8t:L8f:G@G,:L   ,@8  i   ;i.                                   
                            ,8:::t8i::C8C1@8CfG   f@G i ;;    ;1                                 
                              tC:t8f::,;C8C1L0f     .G1f..1 G@,1                                 
                                i0t01::::::f01,f1,iG0;1  Gf    1                                 
                                   :tC00Lt:.      ;G,       8L1.           
                          .LG:;                    f.  f@@1  t.            
                      ,;.0ttC::::                   L   :t: ,:             
                 i;ftttttttt8:::;                    .L.  :1.              
             .:Gtttttfttttttttf;::;                                        
         i8tttttft::Cttttttttt;::::                                        
         tttC,.;;:::::fttttttttt::::;                                      
       ,::1Lt8;:::::::tttttttttt;:::f                                      
     8:0tttttttG;::::::;tttttttttt:::;                                     
   CtfttttttttttG::::::::tttttttttt:::i                                    
   ttttttttttttttt:::::::;tttttttttC:::                                    
    Gtttttttttttttt:::::::Gtttttttttf::t                                   
    .ttttttttttttttt:L.Cii;tttttttttL;f1                                   
     Lttttttttttttttfift,8ttttttttff            
      Gttttttttttttt0fttttttttt,                
       tttttttt1GGttCtLtG8G                     
        .1ft.i,.  t18i           GGGf;;;:::::;::i;:;C 
                t          .ifi:::;:;1fft11if;L11LLf1itC8fi 
                   ;  C8LttttCCLttttttttG1ft1f       
                   :         t                     
                  ;         ;                 Project  >      ovni
                 L        t                   Version  >      0.0.1
               C       t                      Author   >      Lucas_C/llucbrell
                 8    C                       License  >      GPL-3.0
                 ;Ct                          Date     >      2016-12-05

       Home theater software based on web tecnologies
 HHEADER*/

/*

 * NAME: core
 * in: core.js 
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
 * Module that implements ovni's core app.
 * @module core
 *
 * @param { object } configurationObject - object that contains all configuration options
 *
 */
module.exports = function core ( configurationObject ) {
    /** 
       * 
       * 
       * @require electron - electron API.
       * @require electron.app - module to control application life activity
       * @require loader - module for loading core tools
       * 
       */
  var electronAPI = require( 'electron' );
  var app = electronAPI.app;
  var loader = require( './loader.js' )();
  

   /**
   * 
   * @namespace {namespaceType} namespace_name - namespaceDescription
   * @default namespaceDefaultValue
   *
   */
   var _config = configurationObject || {};


   return {
    /** 
     * 
     * This function intis the core functionality, used to start the core.
     * @method start
     *
     * 
     * 
     */
     start:function () { 

      //  functions definitions
     // -------------------------------- //
    

    // define de tools container befor running the loader
    var tools, services;
    /** 
     * 
     * Run after correct tools loads
     * @method loadtoolsOk
     *
     * 
     * 
     */   
    var loadtoolsOk = function () {
      // define the actions after tools loading 


      // use windows tool to build a window
      /*
      tools.windows.window( "https://github.com" );
      console.log( tools );
      console.log( _config );

      // use update tool to check for updates
      tools.update.check();
      */

    }; 
    /** 
     * 
     * Start ovni's services after their are load
     * @method startAllServices
     *
     * 
     * 
     */  
    var startAllServices = function () {
      // start services after loading

      //  loop
      for( var property in services ){
         services [ property ].start();
      }
    }

    // when the electron library it's ready executes
      app.on( 'ready', function () { 

    

     //  the main process
     // -------------------------------- //
    

  // start loading tools when the library is ready
  tools = loader.path( './tools', loadtoolsOk );
  services = loader.path( './services', startAllServices );

  
    
       
    });// end main porcess 
      // ------------------------------ //   





    // Quit when all windows are closed.
    // --------------------------------- //
    app.on( 'window-all-closed', function () {
      // On OS X it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if ( process.platform !== 'darwin' )  app.quit();
      
    }); 


    }
  };
}; 








/*HFOOTER
888               888       888                                                       888     
888               888       888                                                       888      
888               888       888                                                       888       
888-~88e  e88~-_  888-~88e  888-~88e   e88~~8e   d88~  e88~~  e88~~  e88~-_   e88~888  e88~~8e 
888  888 d888   i 888  888b 888  888b d888  88b C888   d888    d888    d888   i d888  888 d888  88b 
888  888 8888   | 888  8888 888  8888 8888__888  Y88b  8888    8888    8888   | 8888  888 8888__888 
888  888 Y888   ' 888  888P 888  888P Y888    ,   888D Y888    Y888    Y888   ' Y888  888 Y888    , 
888  888  "88_-~  888-_88"  888-_88"   "88___/  _88P   "88__/  "88__/  "88_-~   "88_/888  "88___/  
                        
                                                                        copyright Lucas_C/llucbrell
                                                                           hobbescode@gmail.com 
               :088C;                                                  
          ,008000LtCCt.  it;1;tC00G00LfLG0t                            
         :800808000Gt.t0GCCGGG00L; ...:tLCt1tt0G,                      
          i0800LCL880C.,;  fG0t                ,8G0G000GC,             
          ;0080C.    .    f0C                   ,80000GG00;            
           :8080GftC.                .           .; 1GfGGLi            
             ,LG80C.             1G1 .0C; .1CCG1    :8GL0L.            
               .C800Gf:        ,t. 1   G0fL.C  Cf    ;                 
              18@0G80GCf     ::   :0G0 1t  :0G t1   i,                 
               t01     L     ,i         t:      ,L ..11                
            .Gti@.1i ,C1C    ;         ;1       11:GG0f                
         .1C1..L8018C8C0:    f        1G;      :L   ,Lf                
          ,C0t  ;C,CG000    1       C,fi      G     C.                 
      18G1            :C,   1,   ,LGCG01    .Gt  LftL                  
        :1f01                 .f08080G00Gtf0L, fC0080G1                
      tC1;                  :0LLt,.,,,,tL0G.    ;:t8C.                 
     C808Lt10,              @G f800G88881 1G:      ;C0C0C.             
          i0                i0808808088C81;GC       ff:                
        ;01:i1:               f0000GG008000G.        ;ff,              
        :f1. 1i                 .f@0000000,        ii   .              
           iG.                                      .1f.               
          ,1CG88L     :       .                 ,   it,                
                 .tt, tt      i1;;f0L          :,i0L:                  
               .i:    ,;L:                 G:   ,t                     
                        .G0t,           .f0  i;  ;:                    
                 tCGL       i@8G0LLLLC80f,. L                          
              ,LG1:            ..,,,.                                  
              18G000GGL.            .1.                                
             LG;    .;LG           ft                                  
             G8i      ,fGL         1G:                                 
         .1G0G800CCG0G0i             1t;.                              
         .GGG0GGGCGCG0G0,            :Cf;.                             
          f0C        .GL            ;10L                               
         fGG.       if                ;C;                              
         100GG00C;,Ct;:.           .0f,if1                             
        .G0CGG08L000:GL.            :C.                                
        10G  ,1CG00GG:               .Ci       
 HFOOTER*/