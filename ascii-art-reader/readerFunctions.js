const fs = require("fs");
const readline = require("readline");
const defaultData = "./data";

function showFiles(dir = defaultData) {
    const callback = (files) => {
        files.map((file, i) => console.log(`${i}: ${file}`));
        
        getInput();
    };
    getFiles(dir, callback);
}

function getInput(dir = defaultData) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("\nWhich file do you want to view?\n", function (index) {
        rl.close();
        
        getFile(index, dir, () => showFiles(defaultData));
        
    });

}

function getFiles(dir = defaultData, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.log("Error:", err);
        }
        else {
            if (callback) callback(files);
        }
    });
}

function getFile(index, dir = defaultData, callback) {

    const hollaback = (files) => {
        const path = `${dir}/${files[index]}`;
        fs.readFile(path, "utf8", (err, file) => {
            if (err) {
                console.log("Error:", err);
                if (callback) callback();
            } else {
                console.log(file);
                if (callback) callback(file);
            }
        });
    };
    getFiles(dir, hollaback);
}


module.exports = {
    showFiles,
    getFiles,
    getFile
};