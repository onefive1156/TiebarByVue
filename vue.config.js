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
        }
    },
    devServer: {
        proxy: {
            '/RNG/UserLogin': {
                target:"http://121.5.151.159",
            },
            '/RNG/UserRegister':{
                target: 'http://121.5.151.159',
            }

        }
    }
}
