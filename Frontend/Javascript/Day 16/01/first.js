const quotes = [
  "Believe you can and you’re halfway there.",
  "Dream big, work hard, stay humble.",
  "Push yourself, because no one else will.",
  "The harder you work, the luckier you get.",
  "Don’t stop until you’re proud.",
  "Your only limit is your mind.",
  "Success is the sum of small efforts repeated daily.",
  "Great things never come from comfort zones.",
  "Start where you are. Use what you have. Do what you can.",
  "Do something today that your future self will thank you for.",
  "If it doesn’t challenge you, it won’t change you.",
  "Be stronger than your excuses.",
  "Don’t wait for opportunity. Create it.",
  "Discipline is the bridge between goals and accomplishment.",
  "You don’t find willpower, you create it.",
  "Make each day your masterpiece.",
  "Stop doubting yourself, work hard, and make it happen.",
  "Doubt kills more dreams than failure ever will.",
  "Action is the foundational key to all success.",
  "Wake up with determination, go to bed with satisfaction."
];


const bgimages = [
   "url('./assets/inspiration.jpg')",
   "url('./assets/inspiration2.jpg')",
   "url('./assets/inspiration3.jpg')"
]

   const button = document.querySelector('button');
   const quote = document.querySelector('h1');
   button.addEventListener('click', () => {
   
   const index2 = Math.floor(Math.random() * bgimages.length);
   console.log(index2);

    document.querySelector('body').style.backgroundImage = bgimages[index2];
    quote.style.color = "black";
    document.body.style.backgroundSize = "cover, contain, cover";
    document.body.style.backgroundPosition = "center, top right, bottom left";
    document.body.style.backgroundRepeat = "no-repeat, no-repeat, no-repeat";
       
    const index = Math.floor(Math.random() * 20 );
    console.log(index);
    
    
   

    quote.textContent = quotes[index];
});



