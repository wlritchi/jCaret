{spawn} = child_process = require 'child_process'

exec = (cmd, cb, opt) ->
  console.log '%', cmd
  opt or= {}
  child_process.exec cmd, opt, (err, stdout, stderr) ->
    console.log stdout if stdout
    console.log stderr if stderr
    throw err if err
    cb() if cb

task 'build', 'Build *.coffee to jquery.caret.min.js', ->
  exec 'rm *.js || true', ->
    exec 'coffee -bc *.coffee', ->
      exec 'cp COPYING jquery.caret.min.js', ->
        exec 'java -jar lib/closure-compiler/build/compiler.jar *.js>>jquery.caret.min.js'
