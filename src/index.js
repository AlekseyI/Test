// Точка входа в приложение

require('./less/index');
var $ = require('jquery');

var App = function() {
    $('body').html('<div class="b_test"><h3 class="b_test_h3">Hello <div>  </div></h3></div>');
};

var app = new App();
