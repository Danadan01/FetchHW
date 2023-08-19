const airlineButtn = document.querySelector('#airlineButtn');
const form = document.querySelector('#form');
const airlineName = document.querySelector('#airlineName');
const airlineEmail = document.querySelector('#airlineEmail');
const planesNum = document.querySelector('#airlinePlanes');
const Country = document.querySelector('#airlineCountry');
const FlightsPerYear = document.querySelector('#airlineFlights');
const CrashesPerYear = document.querySelector('#airlineCrashes');

const messageDiv = document.createElement('div');
form.insertAdjacentElement('afterend', messageDiv);

const errorUrl = 'https://api.instantwebtools.net/v1/airlines';
const url = 'https://httpbin.org/post';

const postAirline = async () => {
  try {
    const airlineObj = {
      airlineName: airlineName.value,
      airlineEmail: airlineEmail.value,
      planesNum: planesNum.value,
      Country: Country.value,
      FlightsPerYear: FlightsPerYear.value,
      CrashesPerYear: CrashesPerYear.value
    };

    const airline = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(airlineObj),
      headers: {
        'Content-Type': 'application/json'
      } 
    });

    if(airline.ok) {
      const res = await airline.json();
      console.log(res);
  
      messageDiv.innerHTML = '';
      messageDiv.style.color = 'green';
      messageDiv.innerHTML = 'Company is successfully added!';
    } else {
      throw new Error
    }
  } catch (error) {
    console.error(error);
   
    messageDiv.innerHTML = '';
    messageDiv.style.color = 'red';
    messageDiv.innerHTML = 'Something went worng. Try again';
  }

}

airlineButtn.addEventListener('click', (e) => {
  e.preventDefault();
  postAirline();
})