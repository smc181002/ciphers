encrypt = () => {
  let inpText = document.getElementById('input').value;
  let isKey = document.getElementById('key').value;
  let valAdd;
  let isVar = '';
  document.getElementById('output').innerHTML = '';
  if (isKey == '' || inpText == ''){
    document.getElementById('output').innerHTML = 'Enter the input correctly';
    return 0;
  }
  if (inpText.length%isKey.length !=0){
    valAdd = isKey.length -  inpText.length%isKey.length;
    for (let i = 0; i < valAdd; i++) {
      inpText += ' ';
    }
  }
  for (let i=0; i<inpText.length/isKey.length; i++){
    for (let j=0; j<isKey.length; j++){
      isVar += inpText[(Number(isKey[j]-1)+(isKey.length*i))];
    }
  }
  document.getElementById('output').innerHTML = isVar;
  console.log(isVar);
}

decrypt = () => {
  let inpText = document.getElementById('input').value;
  let isKey = document.getElementById('key').value;
  let valAdd;
  let isVar = [''];
  let aVar = '';
  document.getElementById('output').innerHTML = '';
  if (isKey == '' || inpText == ''){
    document.getElementById('output').innerHTML = 'Enter the input correctly';
    return 0;
  }
  if (inpText.length%isKey.length !=0){
    valAdd = isKey.length -  inpText.length%isKey.length;
    for (let i = 0; i < valAdd; i++) {
      inpText += ' ';
    }
  }
  for (let i=0; i<inpText.length/isKey.length; i++){
    for (let j=0; j<isKey.length; j++){
      isVar[(Number(isKey[j]-1)+(isKey.length*i))] = inpText[j+(isKey.length*i)];
    }
  }
  aVar = isVar.toString();
  console.log(isVar);
  document.getElementById('output').innerHTML = aVar.replace(/\,/g,'');
}
