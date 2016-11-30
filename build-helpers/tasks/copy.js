module.exports = ( config ) =>{


   config.modules.gulp.task('copy:node', ( ) =>
       config.modules.gulp
       .src( `${config.foldersPath.src}/../node_modules/**/*` )
       .pipe( config.modules.gulp.dest( `${config.foldersPath.build}/node_modules` ) )
   )



   config.modules.gulp.task('copy', [ 'copy:node'] )
}
