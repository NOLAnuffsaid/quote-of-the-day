/**
 * Created by widner on 6/19/17.
 */
var {exec} = require('child_process')
var Express = require('express')
var _ = require('ramda')

var {compose} = _

var app = new Express()

var setPort = () => {
  switch(process.env.NODE_ENV) {
    case 'dev':
      return 3001;
    case 'test':
      return 8080;
    default:
      return 4567;
  }
}

function cleanUp(a, e) {
  let PID = process.pid
  exec('rm -rf ./build/*', (e,so,se) => {
    if (e) { log(se.toString()) }
    process.kill(PID)
    process.exit(1)
  })
}

process.on("SIGINT", cleanUp.bind(null))
process.on("kill", cleanUp.bind(null))

const PORT = setPort()

app.set('view engine', 'ejs')

var indexRouteHandler = (ctx, next) => rs.render('index', {title: 'quotes of the day', msg: 'Hello, World'})
app.get('/', indexRouteHandler)

app.listen(PORT, () => console.log(`the app is running at:  http://localhost:${PORT}\n`))