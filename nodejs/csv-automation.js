const fs = require('fs');
const csv = require('csv-parser');

const inputFilePath = 'input.csv';
const outputFilePath = 'output.csv';

const results = [];

function processCsvData(data){
    const age = parseInt(data.Age);
    if(age >= 30){
        results.push({...data, IsAdult: (age >= 18)});
    }
}

function writeCsvOutput(results){
    const csvData = results.map((row)=>{
        return Object.values(row).map((value)=>{
            return JSON.stringify(value);
        }).join(',');
    });
    const header = 'Name,Age,City,Email,IsAdult';
    const csvString = `${header}\n${csvData.join('\n')}`;
    fs.writeFileSync(outputFilePath, csvString, (err) =>{
        if(err){
            console.error(err);
        }else{
            console.log(`Results written to ${outputFilePath}`);
        }
    });
}

function main() {
    // does the file exists?
    if(!fs.existsSync(inputFilePath)){
        console.error('Input file not found');
        return;
    }

    fs.createReadStream(inputFilePath)
        .pipe(csv())
        .on('data', (data) => {
            try {
                // process data
                processCsvData(data);
            } catch (err) {
                console.error(`Error while processing data: ${err}`);
            }
        })
        .on('end', () => {
            try {
                //write the output file
                writeCsvOutput(results);
            } catch (err) {
                console.error(`Error while writing output file: ${err}`)
            }
        })
        .on('error', (err) => {
            console.error(`Error while reading input file: ${err}`);
        });
}

main();