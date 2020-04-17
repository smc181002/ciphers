let convertText='';

let encrypt = () => {
  let inpText = document.getElementById('input').value;
  let isKey = document.getElementById('key').value;
  let valAdd;
  let isVar = '';
  document.getElementById('output').innerHTML = '';
  if (isKey == '' || inpText == ''){
    document.getElementById('output').innerHTML = 'Enter the input correctly';
    return 0;
  }
  for (let i=0; i<inpText.length/isKey.length; i++){
    for (let j=0; j<isKey.length; j++){
      convertText = Number(inpText[j + i*isKey.length].charCodeAt(0)) + Number(isKey[j].charCodeAt(0)-96);
      if (convertText > 'z'.charCodeAt(0)){
        convertText -= 26;
      }
      document.getElementById('output').innerHTML += String.fromCharCode(convertText);
    }
  }
}

let decrypt = () => {
  let inpText = document.getElementById('input').value;
  let isKey = document.getElementById('key').value;
  let valAdd;
  let isVar = '';
  document.getElementById('output').innerHTML = '';
  if (isKey == '' || inpText == ''){
    document.getElementById('output').innerHTML = 'Enter the input correctly';
    return 0;
  }
  for (let i=0; i<inpText.length/isKey.length; i++){
    for (let j=0; j<isKey.length; j++){
      convertText = Number(inpText[j + i*isKey.length].charCodeAt(0)) - Number(isKey[j].charCodeAt(0)) + 96;
      // console.log(inpText[j + i*isKey.length].charCodeAt(0));
      // console.log(convertText);
      if (convertText < 'a'.charCodeAt(0)){
        convertText += 26;
      }
      // console.log('>' + convertText);
      document.getElementById('output').innerHTML += String.fromCharCode(convertText);
    }
  }
}
