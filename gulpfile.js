

var config = require('./build-helpers/config');

config.tscConfig = require('./tsconfig.json');
config.fn.readFolder( './tasks' );

config.modules.gulp.task('default', config.modules.sync.sync(
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
