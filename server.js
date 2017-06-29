/**
 * Created by widner on 6/19/17.
 */
var {exec} = require('child_process')
var Express = require('express')
var _ = require('ramda')

var {getPort} = require('./src/utils/portsUtils')
var {indexRouteHandler} = require('./src/serverOps/routeHandlers')

require('./src/utils/serverUtils').registerExitListeners()


const app = new Express()
const PORT = getPort()

app.set('view engine', 'ejs')

app.get('/', indexRouteHandler)

app.listen(PORT, () => console.log(`the app is running at:  http://localhost:${PORT}\n`))