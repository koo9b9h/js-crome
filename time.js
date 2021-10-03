const timeh = document.querySelector(".time h1");
const timey = document.querySelector(".time h2");
function hourview(){
        const hour = new Date();
        const hours = String(hour.getHours()).padStart(2, "0");
        const minutes = String(hour.getMinutes()).padStart(2, "0");
        const seconds = String(hour.getSeconds()).padStart(2, "0");
        timeh.innerText = `${hours}:${minutes}:${seconds}`;
    }

    function yearview(){
        const hour = new Date();
        const year = String(hour.getFullYear()).padStart(2, "0");
        const month = String(hour.getMonth()+1).padStart(2, "0");
        const day = String(hour.getDate()).padStart(2, "0");
        timey.innerText = `${year}년 ${month}월 ${day}일`;
    }
    
    
    hourview();
    setInterval(hourview, 1000);
    yearview();
    setInterval(yearview, 1000);