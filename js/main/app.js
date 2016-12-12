var config = require('../../ovni.json');

for ( var property in config.apps ){

  document.write("<br> app-id: "+ property + "<br>" +"<br>");

  for ( var innerproperty in config.apps[property] ){
  document.write( innerproperty + ": "+ config.apps[property][innerproperty] +"<br>"); // the way to access the apps object
  }
}
