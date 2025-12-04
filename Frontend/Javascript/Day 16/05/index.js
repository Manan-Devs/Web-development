

setInterval(() => {
    const div = document.querySelector('div');
    const body = document.querySelector('body');
    let time = new Date();
    div.textContent = time.toLocaleTimeString(); 
    body.style.backgroundColor = `rgb(0 , 0 , ${time.getSeconds()})`;
},1000);



