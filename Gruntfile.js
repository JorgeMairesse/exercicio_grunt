module.exports = function(grunt) {
    // Configuração das tarefas
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      // Tarefa LESS
      less: {
        development: {
          files: {
            'css/main.css': 'less/main.less'
          }
        }
      },
  
      // Tarefa Uglify (minificação de JS)
      uglify: {
        build: {
          src: 'js/main.js',
          dest: 'js/main.min.js'
        }
      }
    });
  
    // Carregar os plugins necessários
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Tarefa padrão
    grunt.registerTask('default', ['less', 'uglify']);
  };
  