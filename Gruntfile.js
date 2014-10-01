module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bump: {
            options: {
                files: ['package.json', 'priceformat.jquery.json', 'bower.json'],
                updateConfigs: ['pkg'],
                commit: true,
                "commitMessage": "Release v%VERSION%",
                createTag: true,
                tagName: '%VERSION%',
                tagMessage: 'Release v%VERSION%',
                push: true,
                pushTo: 'origin'
            }
        },

        uglify: {
            options: {
                banner: '/*! jquery.<%= pkg.name %>@<%= pkg.version %> by <%= pkg.author.name %> */\n',
                mangle: {
                    except: ['jQuery', '$']
                }
            },
            priceformat: {
                files: {
                    'dist/jquery.priceformat.min.js': ['dist/jquery.priceformat.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('release:patch', ['bump-only:patch', 'uglify', 'bump-commit']);
    grunt.registerTask('release:minor', ['bump-only:minor', 'uglify', 'bump-commit']);
    grunt.registerTask('release:major', ['bump-only:major', 'uglify', 'bump-commit']);
};