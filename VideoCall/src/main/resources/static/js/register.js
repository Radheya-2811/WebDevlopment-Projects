function registrationHandler(event){
    event.preventDefault();
    const username=document.querySelector('#username').value;
    const email=document.querySelector('#email').value;
    const password=document.querySelector('#password').value;

    const user={
        username:username,
        email:email,
        password:password
    }

    fetch('http://localhost:8080/api/v1/users/register',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((response)=>{
            console.log("then method")
            if(!response.ok){
                throw new Error("Network failed to respond")
            }
            return response;
        })
        .then(()=>{
            localStorage.setItem("connectedUser",JSON.stringify(user));
            window.location.href="index.html";
    })
        .catch((error)=>{
            console.error(error)
    })

}


const registerBtn=document.querySelector('#registrationForm')
registerBtn.addEventListener('submit',registrationHandler)