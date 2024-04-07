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
  console.log("test");
};

const getMeals = async () => {
  try {
    const response = await fetch('localhost:8000/recipe', {
      method: 'POST',
      body: JSON.stringify({
        ingredient: this.ingredient
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse
    } 
  } 
  catch (error) {
    console.log(error)
  }
}

generateBtn.addEventListener('click', getMeals)
submit.addEventListener('click', submitFood);