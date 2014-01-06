//http://24ways.org/2013/grunt-is-not-weird-and-hard/
module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: [
            'js/production.js',
            'js/production.min.js'
        ],
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [
                    'js/*.js'
                    ],
                dest: 'js/production.js',
            },
        },
        uglify: {
            build: {
                src: 'js/production.js',
                dest: 'js/production.min.js'
            }
        },
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['clean', 'concat', 'uglify'],
                options: {
                    spawn: false,
                },
            } 
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default',
        [
            //'watch',
            'clean',
            'concat', 
            'uglify'
        ]
    );

};
