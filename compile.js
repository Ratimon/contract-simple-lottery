const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
                        //(current directory,)
const source = fs.readFileSync(lotteryPath, 'utf8');

// console.log(solc.compile(source, 1));
// see what is going on when running node command

module.exports = solc.compile(source, 1).contracts[':Lottery'];
                    //(,number of contracts)