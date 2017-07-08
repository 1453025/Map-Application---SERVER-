/**
 * Created by trangngo on 6/30/17.
 */
var server = require('./app');
var port = process.env.port || 3000;

server.listen(port, function () {
    console.log('Express server listening on port ' + port);
})