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
    const WORD_DEVIDER = '**********';
    const words = expr.split(WORD_DEVIDER);
    const wordsLetters = words.map((currentElement) => {
        const letters = currentElement.match(/.{1,10}/g)

        return letters.map((letter) => {
            const substr = parseInt(letter, 10)
            const morseArr = substr.toString().match(/.{1,2}/g).map((sym) => {
                if(sym === '10') {
                    return '.'
                } else if (sym === '11') {
                    return '-'
                } 
            })
            const morseSym = morseArr.join('');
            
            return MORSE_TABLE[morseSym];
        }).join('')
    }).join(' ');
    
    
    return wordsLetters;


}

module.exports = {
    decode
}