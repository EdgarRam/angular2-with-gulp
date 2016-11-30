module.exports = ( config ) =>


   config.modules.gulp.task( 'ts', ( ) =>
       config.modules.gulp
       .src( config.foldersPath.ts.src )
       .pipe( config.modules.typescript( config.tscConfig.compilerOptions ) )
       .pipe( config.modules.gulp.dest( config.foldersPath.ts.build ) )
   )
