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
    let myArrey = expr.match(/.{1,10}/g);
//console.log(myArrey);
let word = '';
myArrey.forEach(function(codingLetter) {
    if (codingLetter === '**********') {word+=' '; return;} 
    let digitArray = codingLetter.match(/.{1,2}/g);
    //console.log(symbol);
    let symbolMorze = '';
    digitArray.forEach(function(code) {
      let symbol = '';
      //console.log(code);
    if (code === '11') {symbol = '-';} 
    if (code === '10') {symbol = '.';}
    //console.log(symbol); 
    symbolMorze+=symbol;
  });
  //console.log(symbolMorze);
  let letter = MORSE_TABLE[symbolMorze];
  //console.log(letter);
  word+=letter;
  });
  //console.log(word);
 return word;
}

 module.exports = {
     decode
 }
