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
   let  tempArr = expr.split('**********');
   let result = [];
   let final = [];
  
   for (let i = 0; i < tempArr.length; i++) {
       let subArr = [];
       let subArr1 = [];
       for (let j = 0; j < tempArr[i].length; j += 10) {
           subArr.push(tempArr[i].slice(j, j + 10))
       }
     
    for (let i = 0; i < subArr.length; i++) {
       let str1 = '';
       for (let j = 0; j < subArr[i].length; j += 2){
            if (subArr[i].slice(j, j + 2) === '00') {
               continue;
            }
            else if (subArr[i].slice(j, j + 2) === '10'){
               str1 += '.'
            }
            else if (subArr[i].slice(j, j + 2) === '11'){
               str1 += '-'
            }
        }
      subArr1[i] = str1;
     }
   result.push(subArr1);
   }
   for (let i = 0; i < result.length; i++){
   let str = '';
    for (let j = 0; j < result[i].length; j++){
      for (let key in MORSE_TABLE) {
        if (result[i][j] === key) {
          str += MORSE_TABLE[key];
        }
      }
    }
   final.push(str);
  }
 return(final.join(' ')); 
}

module.exports = {
    decode
}
