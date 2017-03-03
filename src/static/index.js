// pull in desired CSS/SASS files
require( './styles/main.scss' );
var $ = jQuery = require( '../../node_modules/jquery/dist/jquery.js' );           // <--- remove if jQuery not needed
require( '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js' );   // <--- remove if Bootstrap's JS not needed 

// inject bundled Elm app into div#main
var Elm = require( '../elm/Main' );

var Modules = {}
Modules['Main2'] = require('../elm/Main2');
Modules['Main3'] = require('../elm/Main3');
Modules['Main4'] = require('../elm/Main4');
Modules['Main5'] = require('../elm/Main5');

Elm.Main.embed( document.getElementById( 'main' ) );
