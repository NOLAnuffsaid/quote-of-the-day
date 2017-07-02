/**
 * Created by widner on 6/19/17.
 */
var {readFileSync} = require('fs')
var {resolve} = require('path')
var https = require('https')
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
var httpsOptions = {
  key: readFileSync(resolve(process.cwd(), 'certs/key.pem')),
  cert: readFileSync(resolve(process.cwd(), 'certs/cert.pem'))
}
var secServer = https.createServer(httpsOptions, app)
secServer.listen(PORT, () => console.log(`the app is running at:  https://localhost:${PORT}\n`))