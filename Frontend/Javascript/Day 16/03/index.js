const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    const Boy = document.getElementById("Boy");
    const Girl = document.getElementById("Girl");

    const l1 = Boy.value.length;
    const l2 = Boy.value.length;

    const result = Math.pow(l1+l2, 3) % 101;

    document.querySelector('h2').textContent = `Love Percentage is ${result}%`;

    document.body.style.backgroundColor = `rgb(${result*2.55}, ${255 - result*2.55}, 100)`;
    form.reset();
    e.preventDefault();
});
