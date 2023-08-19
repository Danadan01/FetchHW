const form = document.querySelector('#form');
const textInput = document.querySelector('#text');
const sizeInput = document.querySelector('#size');
const colorSelect = document.querySelector('#colors');
const catMemePic = document.querySelector('#catMemePic');
const catGetButton = document.querySelector('#catGetButton');
const textRegExp = /^[a-zA-Z!\s]{0,75}$/;
const sizeRegExp = /^(0|[1-9]\d{0,2})$/;

(async () => {
  try {
    const res = await fetch(`https://cataas.com/cat/says/Welcome!?size=50&color=red&json=true`);
    const welcomeCat = await res.json();
    catMemePic.src = `https://cataas.com${welcomeCat.url}`
  } catch (error) {
    console.error(error);
  }
})();

const fetchMeme = async () => {
  try {
    const res = await fetch(`https://cataas.com/cat/says/${textInput.value}?size=${sizeInput.value}&color=${colorSelect.value}&json=true`);
    const cat = await res.json();
    console.log(cat);
    catMemePic.src = `https://cataas.com${cat.url}`
  } catch (error) {
    console.error(error);
  }
}


catGetButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (textInput.value.trim() === '' || sizeInput.value.trim() === '') {
    alert('All fields are required!');
  } else if (!textInput.value.match(textRegExp)) {
    alert('Please enter proper text');
  } else if (!sizeInput.value.match(sizeRegExp)) {
    alert('Enter proper size please');
  } else {
    fetchMeme();
  }
})