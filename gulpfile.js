

var config = require('./build-helpers/config');

config.tscConfig = require('./tsconfig.json');
config.fn.readFolder( './tasks' );

config.modules.gulp.task('default', function(){
	console.log("no se puede hacer nada en default!!!");
})

config.modules.gulp.task('dev', config.modules.sync.sync(
	[
		'clean',
        [
            'copy',
            'pug',
            'ts',
            'stylus'
        ],
        'watch',
		'server'
	]
))
