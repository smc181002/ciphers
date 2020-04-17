let convertText;

let encrypt = () => {
  let inpText = document.getElementById('input').value;
  let isKey = document.getElementById('key').value;
  document.getElementById('output').innerHTML = '';
  if (isKey == '' || inpText == ''){
    document.getElementById('output').innerHTML = 'Enter the input correctly';
    return 0;
  }
  inpText.split('').forEach((item, i) => {

    if (item == ' '){
      document.getElementById('output').innerHTML += ' ';
    }
    else{
      if (item.charCodeAt(0)>=97) {
        convertText = (item.charCodeAt(0) + Number(isKey));
        if (convertText > 'z'.charCodeAt(0)){
          convertText -= 26;
        }
        document.getElementById('output').innerHTML += String.fromCharCode(convertText);
      }
      else {
        convertText = (item.charCodeAt(0) + Number(isKey));
        if (convertText > 'Z'.charCodeAt(0)){
          convertText -= 26;
        }
        document.getElementById('output').innerHTML += String.fromCharCode(convertText);
      }
    }
  });
}

let decrypt = () => {
  let inpText = document.getElementById('input').value;
  let isKey = document.getElementById('key').value;
  document.getElementById('output').innerHTML = '';
  if (isKey == '' || inpText == ''){
    document.getElementById('output').innerHTML = 'Enter the input correctly';
    return 0;
  }
  inpText.split('').forEach((item, i) => {
    if (item == ' '){
      document.getElementById('output').innerHTML += ' ';
    }
    else{
      if (item.charCodeAt(0)<=97) {
        convertText = (item.charCodeAt(0) - Number(isKey));
        if (convertText < 'A'.charCodeAt(0)){
          convertText += 26;
        }
        document.getElementById('output').innerHTML += `${String.fromCharCode(convertText)}`;
      }
      else {
        convertText = (item.charCodeAt(0) - Number(isKey));
        if (convertText < 'a'.charCodeAt(0)){
          convertText += 26;
        }
        document.getElementById('output').innerHTML += `${String.fromCharCode(convertText)}`;
      }

    }
  });
}
