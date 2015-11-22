module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        presets: ['babel-preset-es2015', 'babel-preset-react']
      },
      build: {
        files: [{
          expand: true,
          cwd: 'js/',
          src: ['**/*.js', '!index.js'],
          dest: 'build/js'
        }, {
          'build/index.js': 'index.js'
        }]
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: ['fonts/**'],
          dest: 'build/'
        }, {
          'build/index.html': 'index.html',
          'build/package.json': 'package.json',
          'build/js/index.js': 'forBuild/index.js'
        }]
      }
    },

    less: {
      build: {
        files: {
          'build/css/main.css': 'less/main.less'
        }
      }
    },

    clean: {
      build: ['build']
    }
  });


  grunt.registerTask('build', ['clean:build', 'babel:build', 'copy:build',
                              'less:build']);
};
