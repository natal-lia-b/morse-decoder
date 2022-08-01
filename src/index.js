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
};

function decode(expr) {
    // write your solution here
    let start = 0;
    let result = '';

    do {
        let num = expr.substring(start, start + 10).replaceAll('00', '');
        if (String(num) == '**********') { 
            result += ' ';
            start += 10;
            continue;
        }

        let letter = '';
        do {
            letter = (num % 100 == 10 ? '.' : '-') + letter;
            num = Math.floor(num / 100);
        } while (num > 0);

        if (Reflect.ownKeys(MORSE_TABLE).includes(letter)) {
            result += MORSE_TABLE[letter];
        }

        start += 10;
    } while (start < String(expr).length);

    return result;
}

module.exports = {
    decode
}