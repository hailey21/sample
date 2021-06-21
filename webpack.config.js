const path = require('path');

module.export = {
    mode: 'development', 
    entry : {
        main: './src/app.js'
    }, 
    output: {
        path: path.resolve('./dist'), 
        filename: '[name].js'
    }
}  