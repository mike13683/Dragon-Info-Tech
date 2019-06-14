module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            static: {
                options: {
                    progrressive: true
                },
                files: [{
                    expand:true,
                    cwd: 'assets/_img-temp/',
                    src: ['**/*.{png,jpg,gif,PNG,JPG,GIF}'],
                    dest: 'assets/img'
                }]
            }
        },
        sass: {

                files: {
                    // 'css/main.css': ['sass/*.scss', 'sass/partials/*.scss'],
                    '_site/assets/scss/main.css': ['/assets/scss/main.scss']

            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: 'last 3 version, IE 9'
                    }), // add vendor prefixes.
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: '_site/assets/css/main.css'
            }
        },
        uglify: {
            dist: {
                src: '_site/assets/js/source.js',
                dest: '_site/assets/js/source.js'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    collapseWhitespace: true
                },
                expand: true,
                cwd: '_site/',
                src: ['**/*.html'],
                dest: '_site/'
            }
        }, // htmlmin

        watch: {
            imagemin: {
                files: ['assets/_img-temp/**/*.{png,jpg,gif,PNG,JPG,GIF}'],
                tasks: ['imagemin']
            },
            content: {
                files: ['_site/**/*.*'],
                tasks: ['newer:htmlmin'],
                options: {
                    livereload: false,
                    spawn: false
                }
            },
            css: {
                files: ['/assets/scss/main.scss', '/assets/scss/_bootstrap-override.scss', '/assets/scss/**/*.scss'],
                tasks: ['sass', 'postcss'],
                options: {
                    spawn: false
                }
            },
            scripts: {
                files: ['/assets/js/*.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true,
                    spawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-newer');

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['newer:imagemin','watch']);

    grunt.registerTask('dev', ['sass', 'newer:imagemin', 'watch']);

};
