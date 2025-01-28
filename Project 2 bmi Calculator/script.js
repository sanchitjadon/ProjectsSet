const form = document.querySelector("form")
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)  
  const results = document.querySelector('#results')  

  if(height < 0 || isNaN(height) || height === '') {
    results.innerHTML = `Invalid Height ${height}`;
  }
  else if(weight < 0 || isNaN(weight) || weight === '') {
    results.innerHTML = `Invalid Weight ${weight}`;
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi < 18.6) {
        results.innerHTML = `Under Weight : bmi ${bmi} is less than 18.6`
    }
    else if(bmi > 24.9) {
        results.innerHTML = `Over Weight : bmi ${bmi} is more than 29.7`
    }
    else {
        results.innerHTML = `<span>${bmi}</span>`;
    }
  }
})