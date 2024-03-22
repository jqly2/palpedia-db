
export default function writeFile(name, json){
    const FileSystem = require("fs");
    FileSystem.writeFileSync(`${name}.json`, JSON.stringify(json), (err) => {
        if(err) throw err;
    })
}

