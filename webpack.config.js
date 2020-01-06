const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')


function resolve(dir) {
    return path.resolve(__dirname, dir)
}

module.exports = {
    // 模式: 生产环境
    // mode: 'production',
    // mode: 'development',

    //入口
    /*entry:{
        app:path.resolve(__dirname,'src/index.js')
    },*/
    entry:'./src/index.js',

    //出口
    output:{
        // filename:'static/js/[name].bundle.js',
        filename:'js/bundle.js',
        // path:path.resolve(__dirname,'dist')
        path:resolve('dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                //exclude: /(node_modules|bower_components)/,
                // include: path.resolve(__dirname, 'src'),
                include:resolve('src'),
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'], // 多个loader从右到左处理
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                        limit: 1000,
                        name: 'img/[hash:7].[ext]' // 相对于output.path
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'index.html'
        }),
        new VueLoaderPlugin(),
        // new CleanWebpackPlugin(), // 清除打包文件夹dist

    ],
    devServer:{
        port:8888,
        open:true,
        quiet:true,
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
        alias: { // 模块路径别名(简写方式)
          'vue$': 'vue/dist/vue.esm.js',  // 默认查找vue/dist/vue.runtime.js
          '@': resolve('src'),
          '@comps': resolve('src/components'),  

        }
    }
}