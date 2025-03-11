const time = document.getElementById('clock');
const date = document.getElementById('date');

function timeanddate() {
    const nowdate = new Date();

    const hour = nowdate.getHours() % 12 || 12;  
    const minute = nowdate.getMinutes().toString().padStart(2, '0'); 
    const sec = nowdate.getSeconds().toString().padStart(2, '0');  
    const ampm = nowdate.getHours() >= 12 ? "PM" : "AM";  
    time.textContent = `${hour}:${minute}:${sec} ${ampm}`;
    date.textContent = nowdate.toDateString(); // read mdn forundefined attribute
}
setInterval(timeanddate, 1000); 
timeanddate()

