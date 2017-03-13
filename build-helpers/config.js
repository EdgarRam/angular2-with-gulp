

const config = {}
const source = './src'
const build = './build'

config.modules = {
	clean : require('gulp-clean'),
	fs: require('fs'),
	gulp : require('gulp'),
	path: require('path'),
	plumber : require('gulp-plumber'),
	pug : require('gulp-pug'),
	serverLiveReload: require( 'gulp-server-livereload' ),
	stylus : require('gulp-stylus'),
	sync : require('gulp-sync')(require('gulp')),
	typescript : require('gulp-typescript')
};


//`
config.foldersPath = {
	src: source,
    build: build,
    pug:{
        src :`${source}/views/**/*.pug`,
    },
    stylus: {
        main: `${source}/styles/main.styl`,
        src:  `${source}/**/*.styl`,
		build: `${build}/styles`,
		components:  `${source}/styles/components/**/*.styl`
    },
    ts: {
        src: [
			`${source}/scripts/**/*.ts`,
			`!${source}/scripts/systemjs.config.ts`
		],
		build: `${build}/scripts`
    }
};


config.fn ={
	readFolder: ( folder ) => {
		var PATH = config.modules.path.join( __dirname, folder )
		var FILES = config.modules.fs.readdirSync(PATH)

		for( var file of FILES )
			require( `${folder}/${file}` )(config)
	}
}


module.exports = config
