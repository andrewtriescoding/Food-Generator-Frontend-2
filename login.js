const submitBtn = document.getElementById('submitBtn')

const userLogin = async () => {
    try {
        const response = await fetch('localhost:8000/login', {
            method: 'POST',
            body: JSON.stringify({
                username: this.username,
                password: this.password
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse
        } 
    } catch (error) {
        console.log(error)
    }
}

submitBtn.addEventListener('click', userLogin)