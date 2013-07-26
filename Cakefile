{spawn} = child_process = require 'child_process'

begin = (fn0, fn...) ->
  fn0? ->
    begin fn...

exec = (cmd, cb, opt) ->
  console.log '%', cmd
  opt or= {}
  child_process.exec cmd, opt, (err, stdout, stderr) ->
    console.log stdout if stdout
    console.log stderr if stderr
    throw err if err
    cb() if cb

task 'build', 'Build *.coffee to jquery.caret.min.js', ->
  begin (exec.bind @, 'rm *.js || true'),
  (exec.bind @, 'coffee -bc *.coffee'),
  (exec.bind @, 'cp COPYING jquery.caret.min.js'),
  (exec.bind @, 'java -jar lib/closure-compiler/build/compiler.jar *.js>>jquery.caret.min.js'),
  (exec.bind @, 'cat COPYING jquery.caret.js>jquery.caret.tmp.js'),
  (exec.bind @, 'mv jquery.caret.tmp.js jquery.caret.js')
