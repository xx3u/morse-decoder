const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    function chunkArray(expr, chunk_size){
        var index = 0;
        var chunk_size = 10;
        var result = [];
        
        for (index = 0; index < expr.length; index += chunk_size) {
            myChunk = expr.slice(index, index+chunk_size);
            result.push(myChunk);
        }
    
        return result;
    }
    var result = chunkArray(expr, 10).toString();
    var result = result.replace(/11/g, `-`).replace(/10/g, '.').replace(/00/g, '').split(',').map(letter => MORSE_TABLE[letter]).join('');
    
    return result;
}

module.exports = {
    decode
}
