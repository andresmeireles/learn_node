const {readFile, writeFile} = require('fs');

readFile(__dirname + '/folder/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile(__dirname + '/folder/second.txt', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(__dirname + '/folder/result-async.txt', `Mash up of ${first} and ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        });
    });
});