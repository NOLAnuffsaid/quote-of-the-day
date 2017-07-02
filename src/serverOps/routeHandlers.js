/**
 * Created by widner on 6/20/17.
 */

var indexRouteHandler = (req, rs) => rs.render('index', {title: 'quotes of the day', msg: 'Hello, World'})

module.exports = {
  indexRouteHandler
}
