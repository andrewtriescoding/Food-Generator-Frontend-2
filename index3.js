const recipes = document.getElementById('recipes')


const getRecipes = async () => {
    try {
        const response = await fetch('http://10.232.43.66:8000/recipe/' , {cache: 'no-cache'})
        if (response.ok) {
            const jsonResponse = await response.json()
            let array = [];
            array.push(jsonResponse.message);
            array.forEach((element) => {
                const li = document.createElement('li');
                ul.append(li);
                li.innerHTML = `${element}`;
            })
        }
    }
    catch (error) {
        console.log(error)
    }
}

const finalFunction = () => {
    for (let i = 0; i < 3; i++) {
        getRecipes()
    }
}

finalFunction()