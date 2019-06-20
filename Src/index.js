const app = require('./App/Config/Server/app')
const path = require('path')
//init server
app.listen(app.get('port'), (err) =>  {
    if (err)
        console.log(err)
    console.log('Server on port ', app.get('port'))
})


// routes
app.use(require(path.join(__dirname, 'App/Routes/routes.js')))

//handlers
app.use((err, req, res, next) => {
    res.status(500).json({'Error':err})
})