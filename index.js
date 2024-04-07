const submitBtn = document.getElementById('submitBtn');
const generateBtn = document.getElementById('generateBtn');
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

submitBtn.addEventListener('click', submitFood);