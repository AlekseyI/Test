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
    }
};
