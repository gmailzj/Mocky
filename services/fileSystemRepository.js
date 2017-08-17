// 定义导出模块
const fs = require("fs");
const path = require("path");
const config = require('config');
const uuidv1 = require('uuid/v1');

var fileSystemRepository = exports = module.exports = {};

var outputDirectory = process.cwd() + config.get('Customer.fs.outputDir');
console.log(outputDirectory)

var readFile = function(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName, function(error, data) {
            if (error) reject([error]);
            resolve([null, data]);
        });
    });
};
// fs.writeFile('./wfile.txt',data,{flag:'w',encoding:'utf-8',mode:'0666'},function(err){})
var writeFile = function(fileName, data) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(fileName, data, function(error) {
            if (error) reject(error);
            resolve(null);
        });
    });
}
fileSystemRepository.save = async function(mocker) {
    // __dirname This the same as the path.dirname() of the __filename
    // __filename The file name of the current module. This is the resolved absolute path of the current module file.
    // console.log(`Current directory: ${process.cwd()}`);
    var fileContent = JSON.stringify(mocker);
    var uuid = uuidv1().replace(/-/g, "");
    var result = await writeFile(outputDirectory + uuid, fileContent);
    return [result, uuid];
}
fileSystemRepository.getMockFromId = async function(id) {
    var [err, data] = await readFile(outputDirectory + id);
    if (!err) {
        data = JSON.parse(data);
    }
    return [err, data];
}