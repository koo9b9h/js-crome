const login = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-text");
const loginsubmit = document.querySelector("#login-submit");
const greeting = document.querySelector("#greeting");



function logid(event){
    event.preventDefault();
    loginsubmit.classList.add("hidden"); 
    loginInput.classList.add("hidden");
    const userid = loginInput.value;
    localStorage.setItem("username" , userid);
    seegreeting(userid);
}

function seegreeting(userid) {
    greeting.innerText = `안녕 ${userid} 반가워요`;
    greeting.classList.remove("hidden");
}

const saveId = localStorage.getItem("username");

if (saveId === null) {
    loginsubmit.classList.remove("hidden"); 
    loginInput.classList.remove("hidden");
    login.addEventListener("submit", logid);
  } else {
    loginsubmit.classList.add("hidden"); 
    loginInput.classList.add("hidden");
    seegreeting(saveId);
  }

