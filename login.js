const submitBtn = document.getElementById('submitBtn')
const username = document.getElementById('username').value
const password = document.getElementById('password').value

const userLogin = async () => {
    try {
        const response = await fetch('http://10.232.43.66:8000/login/', {
            method: 'POST',
            body: JSON.stringify({
                'username': username,
                'password': password
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log('jsonResponse')
            localStorage.setItem("Username" , username)
            return jsonResponse
        } 
    } 
    catch (error) {
        console.log(error)
    }
}

const sendUsername = async () => {
    try {
      const response = await fetch('http://10.232.43.66:8000/recipe/', {
        method: 'POST',
        body: JSON.stringify({
          'username': username
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

const check = () => {
    if (localStorage.getItem('Username') != null) {
        window.location.href = ("index2.html")
}

sendUsername()
check()
submitBtn.addEventListener('click', userLogin)