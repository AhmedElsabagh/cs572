var fs = require('fs');
process.on('message', (file) => {
    if (file) {
        var f = fs.createReadStream(file, 'utf8');
        f.on('data', function (chunk) {
            process.send(chunk);
        });

        f.on('end', function () {
            process.send('done');
        });
    }
});