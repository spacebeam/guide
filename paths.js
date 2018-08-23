module.exports = {
   	build: function(){
   		var build = [
	  		//modules
	  		'./node_modules/jquery/dist/jquery.js',
	  		'./node_modules/underscore/underscore.js',
	  		'./node_modules/backbone/backbone.js',
        './src/js/libs/bootstrap.min.js',
        './src/js/libs/validate/jquery.validate.min.js',
	  		//utils
	  		'./src/js/utils/fun.config.js',
	  		'./src/js/utils/get.template.js',
	  		'./src/js/utils/translate.js',
        //models
        './src/js/models/*.js',
        './src/js/collections/*.js',
	  		//views
        './src/js/views/**/*.js',
	  		//app
	  		'./src/js/main.js'
	  	];
	  	return build;
  	}
};
