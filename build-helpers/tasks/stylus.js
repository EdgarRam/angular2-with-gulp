module.exports = ( config ) =>{

    config.modules.gulp.task('stylus:main', ( ) =>
        config.modules.gulp
        .src( config.foldersPath.stylus.main )
        .pipe( config.modules.stylus())
        .pipe( config.modules.gulp.dest( config.foldersPath.stylus.build ) )
    )

    config.modules.gulp.task('stylus:components', ( ) =>
        config.modules.gulp
        .src( config.foldersPath.stylus.components )
        .pipe( config.modules.stylus())
        .pipe( config.modules.gulp.dest( `${config.foldersPath.build}/components` ) )
    )

    config.modules.gulp.task('stylus', [ 'stylus:main', 'stylus:components'] )

}
