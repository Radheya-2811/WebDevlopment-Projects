function loginhandle(event){
        event.preventDefault();
        const email=document.querySelector('#email').value
        const password=document.querySelector('#password').value

        const user={
            email:email,
            password:password
        }
        fetch('http://localhost:8080/api/v1/users/login',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
            .then((response)=>{
                if(!response.ok){
                    alert("Incorrect user details")
                }
                return response.json();
            }).then((response)=>{
                localStorage.setItem('connectedUser',JSON.stringify(response))
                //to redirect to index html after successfull login
                window.location.href='index.html'
        }).catch((error)=>{
            console.error(error)
        });

}



const loginForm=document.querySelector('#loginForm')
loginForm.addEventListener("submit",loginhandle)