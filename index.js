const submit = document.getElementById('submitButton');
const generateBtn = document.getElementById('generateButton');
const ul = document.getElementById('foodItems');
const inputFood = document.getElementById('foodHere');

const submitFood = () => {
  const li = document.createElement('li');
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'X';
  li.innerHTML = `${inputFood.value}`;
  li.append(deleteBtn);
  const dlt = (event) => {
    event.target.parentNode.remove();
  };
  deleteBtn.addEventListener('click', dlt);
  ul.append(li);
};

const getMeals = async () => {
  try {
    const lis = ul.querySelectorAll('li');
    const ingredients = Array.from(lis).map(li => li.textContent.trim());
    const response = await fetch('http://10.232.43.66:8000/recipe/', {
      method: 'POST',
      body: JSON.stringify({
        'ingredients': ingredients
      }),
      headers: {
        'content-type': 'application/json'
      }
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } 
  } 
  catch (error) {
    console.log(error);
  }
};

submit.addEventListener('click', submitFood);
generateBtn.addEventListener('click', getMeals)