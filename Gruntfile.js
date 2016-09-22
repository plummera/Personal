/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
/**
 * Set project object
 */

project: {
  name: 'Anthony Plummer',
  website: 'http://anthonyplummer.elementfx.com',
  assets: 'assets',
  author: 'Anthony T. Plummer',
  src: 'build',
  css: '<%= project.assets %>/main.css',
  scss: '<%= project.assets %>/main.scss',
  js: '<%= project.assets %>/main.js',
  less: '<%= project.assets %>/main.less'
},

// Metadata.
meta: {
  version: '0.1.1'
},

banner: '/*! <%= project.name %> - v<%= meta.version %> - ' +
  '<%= grunt.template.today("yyyy-mm-dd") %>\n ' +
  '* <%= project.website %>/\n' +
  '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
  '<%= project.author %>; Licensed Black & Tan */\n',

// Task configuration.
concat: {
  options: {
    banner: '<%= banner %>',
    stripBanners: true,
    seperator: ';'
  },
  css: {
    src: ['<%= project.assets %>/css/**/*.css'],
    dest: '<%= project.css %>',
    filter: 'isFile'
  },
  sass: {
    src: ['<%= project.assets %>/scss/**/*.scss'],
    dest: '<%= project.scss %>',
    filter: 'isFile'

  },
  js: {
    src: ['<%= project.assets %>/js/**/*.js'],
    dest: '<%= project.js %>',
    filter: 'isFile'
  }
},

uglify: {
  options: {
    banner: '<%= banner %>'
  },
  dist: {
    files: {
      '<%= project.assets %>/<%= pkg.name %>.min.js' : ['<%= project.js %>']
    }
  }
},

jshint: {
  options: {
    curly: true,
    eqeqeq: true,
    immed: true,
    latedef: true,
    newcap: true,
    noarg: true,
    sub: true,
    undef: true,
    unused: true,
    boss: true,
    eqnull: true,
    browser: true,
    globals: {
      jQuery: true,
      "$": false
    }
  },
  monticristi: {
    src: ['<%= project.assets %>/js/**/*.js']
  }
},

/**
 * Sass
 */
sass: {
  anthony: {
    options: {
      style: 'expanded',
      compass: true,
    },
    files: {
      '<%= project.assets %>/css/style.css': '<%= project.assets %>/main.scss'
    }
  }
},

// less: {
//   // Compile all targeted LESS files individually
//   components: {
//     options: {
//       imports: {
//         // Use the new "reference" directive, e.g.
//         // @import (reference) "variables.less";
//         reference: [
//           'variables.less',
//           'mixins.less',
//           'scaffolding.less',
//           'forms.less',
//           'buttons.less',
//           'utilities.less'
//         ]
//       }
//     },
//     files: [
//       {
//         expand: true,
//         cwd: '<%= project.assets %>/bootstrap/less',
//         // Compile each LESS component excluding "bootstrap.less",
//         // "mixins.less" and "variables.less"
//         src: ['*.less'],
//         dest: 'css/',
//         ext: '.css'
//       }
//     ]
//   }
// },

watch: {
  options: {
    livereload: true
  },
  monticristi: {
    files: ['<%= project.assets %>/js/**/*.js', '<%= project.assets %>/scss/**/*.scss'],
    tasks: ['jshint', 'concat:sass', 'sass', 'concat', 'uglify']
  }
}
});

// These plugins provide necessary tasks.
grunt.loadNpmTasks('assemble-less');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-qunit');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-livereload');
grunt.loadNpmTasks('grunt-contrib-compass');

// Default task.
grunt.registerTask('default', ['jshint', 'concat:sass', 'sass', 'concat', 'uglify']);

};
