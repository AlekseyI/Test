// Чтобы подключить к WebShtorm необходимо зайти в File-Settings-Languages-Code Quality Tools-Eslint
var webpack = require('webpack');
// Файл настройки сборки скриптов в bundle.js
module.exports = {
    // Скрипт который будет собран
    entry: './src/index.js',
    output: {
        // Путь к файлу где будет собран
        path: __dirname + '/public',
        // В какой файл будет собран
        filename: 'bundle.js'
    },

    module: {
        rules: [
                {
                    // Сборка стилей
                    //нужно выполнить команду npm i --save-dev style-loader css-loader less-loader less
                    test:/\.less$/,
                    use:[
                        "style-loader",
                        "css-loader",
                        "less-loader",
                    ],
                }
            ]
    }
};
