function loadAndDisplayUsers(){

    const connectedUser=localStorage.getItem('connectedUser')
    if(!connectedUser){
        window.location='login.html'
        return;
    }

    const userListElement=document.querySelector('#userList');
    userListElement.innerHTML="Loading...";

    fetch('http://localhost:8080/api/v1/users/getuser')
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{

            userListElement.innerHTML="";
            response.forEach(user=>{
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                <div>
                    <i class="fa fa-user-circle"></i>
                    ${user.username} <i class="user-email">(${user.email})</i>
                </div>
                <i class="fa fa-lightbulb-o ${user.status === "online" ? "online" : "offline"}"></i>
            `;

                userListElement.appendChild(listItem);
            });
        });
}



function handleLogOut(){
    fetch('http://localhost:8080/api/v1/users/logout',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: localStorage.getItem('connectedUser')
    })
        .then((response)=>{
            return response;
        })
        .then((response)=>{
            localStorage.removeItem('connectedUser')
            window.location.href='login.html'
        })
}


function handleNewMeetingRequest(){
    const connectedUrl=JSON.parse(localStorage.getItem('connectedUser'));
    window.open(`videocallFile.html?username=${connectedUrl.username}`,"_blank");


}

function handleJoinMeeting(){
    const roomId=document.querySelector('#meetingName').value;
    const connectedUser=JSON.parse(localStorage.getItem('connectedUser'))

    const url=`videocallFile.html?roomId=${roomId}&username=${connectedUser.username}`;

    window.open(url,"_blank");
}


//call the function to load names when the page loads
window.addEventListener("load",loadAndDisplayUsers)

////LOGOUT

const logOutBtn=document.querySelector('#logoutBtn')
logOutBtn.addEventListener("click",handleLogOut)


const newMeetingBtn=document.querySelector('#newMeetingBtn')
newMeetingBtn.addEventListener("click",handleNewMeetingRequest)

const joinMeetingBtn=document.querySelector('#joinMeetingBtn');
joinMeetingBtn.addEventListener('click',handleJoinMeeting);