var fs = require('fs');

var output = fs.readFileSync('data.txt');

console.log('output', output);


var output1 = fs.readFileSync('data.txt', 'utf8');  // character encoding is done

console.log('output\n',output1);


var output2 = fs.readFileSync('data.txt', 'utf8').trim().split('\n'); // splitting after every newline and storing in array
// trim(): applied on strings and Removes the leading and trailing white space and line terminator characters from a string.


console.log('output\n',output2);


var output3 = fs.readFileSync('data.txt', 'utf8').trim().split('\n').map(line => line.split('\t'));



console.log('output\n',output3);


var output4 = fs.readFileSync('data.txt', 'utf8').trim().split('\n').map(line => line.split('\t')).reduce((customer,line)=>{
    console.log('hello', line);
    customer[line[0]] = customer[line[0]] || [];
    customer[line[0]].push({
        name : line[1],
        price : line[2],
        quantity: line[3]
    })
    return customer 
}, {});
// trim(): applied on strings and Removes the leading and trailing white space and line terminator characters from a string.


console.log('output\n',JSON.stringify(output4,null, 2));