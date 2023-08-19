const factElement = document.querySelector('#fact');
const factButtn = document.querySelector('#factButtn');

let counter = 0;

const fetchFact = async () => {
  try {
      const fact = await (await fetch('https://catfact.ninja/fact')).json();
      factElement.innerHTML = '';
      factElement.innerHTML = fact.fact;
  } catch (e) {
    console.error(e);
  }
}

factButtn.addEventListener('click', fetchFact);