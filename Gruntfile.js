module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! jquery.<%= pkg.name %>@<%= pkg.version %> by <%= pkg.author.name %> */\n',
                mangle: {
                    except: ['jQuery', '$']
                }
            },
            priceformat: {
                files: {
                    'jquery.priceformat.min.js': ['jquery.priceformat.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('dist', ['uglify']);

};