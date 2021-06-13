module.exports = {
    runtimeCompiler: true,
    publicPath:"./",
    productionSourceMap: false,
    pages:{
        userLogin:{
            entry: './src/main.js',
            template: './public/userLogin.html',
        },
        userRegister:{
            entry: './src/userRegister.js',
            template: './public/userRegister.html',
        },
        abar:{
            entry: './src/abar.js',
            template: './public/abar.html',
        },
        atie:{
            entry: './src/atie.js',
            template: './public/atie.html',
        },
        aVideo:{
            entry: './src/aVideo.js',
            template: './public/aVideo.html',
        },
        recharge:{
            entry: './src/recharge.js',
            template: './public/recharge.html',
        },
        createNewBar:{
            entry: './src/createNewBar.js',
            template: './public/createNewBar.html',
        }
    },
    devServer: {
        proxy: {
            '/RNG/UserLogin': {
                target:"http://121.5.151.159",
                // target: 'http://192.168.1.101:8080',
            },
            '/RNG/UserRegister':{
                target: 'http://121.5.151.159',
                // target: 'http://192.168.1.101:8080',
            },
            '/RNG/barIndex': {
                target: 'http://121.5.151.159',
                // target: 'http://192.168.1.101:8080',
            }
        }
    }
}
