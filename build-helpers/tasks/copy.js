module.exports = ( config ) =>{
    var copy = [
        'core-js',
        'zone.js',
        'reflect-metadata',
        'systemjs',
    ]
    var copyNode = copy.map(function(val){
        return `${config.foldersPath.src}/../node_modul**/${val}/**`;
    });


    config.modules.gulp.task('copy:node', ( ) =>
        config.modules.gulp
        .src( copyNode )
        .pipe( config.modules.gulp.dest( `${config.foldersPath.build}/` ) )
    )

    config.modules.gulp.task('copy:js', ( ) =>
        config.modules.gulp
        .src( `${config.foldersPath.src}/scripts/systemjs.config.js` )
        .pipe( config.modules.gulp.dest( `${config.foldersPath.build}/scripts` ) )
    )


    config.modules.gulp.task('copy', [ 'copy:node', 'copy:js' ] )
}
