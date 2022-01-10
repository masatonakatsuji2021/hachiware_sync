const fs = require("fs");

module.exports = function(){

    var syncStr = fs.readFileSync(__dirname + "/index.js").toString();
    syncStr = syncStr.split("module.exports = ")[1];

    return syncStr;
};