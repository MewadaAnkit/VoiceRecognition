const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = [
    'hello  Mister Alex , Tum Kaise Ho?',
];
const reply = [
    'Mein bhi theek hu , puchne ke liye shukriya Alex'
]
const bye = "Alvida Alex Fir Milenge";
const weather = ["Weather is Fine Today","You need a Tan"];
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
        console.log("Voice is Activated .............. , You can Speeak to microphone Now");
}

recognition.onresult = function(event){
         const current = event.resultIndex;
         const transcript = event.results[current][0].transcript;
         content.textContent = transcript; 
         readOutLoud(transcript);
}

btn.addEventListener('click',()=>{
    recognition.start();
})

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    if(message.includes("hi Alexa")){
        const final = greetings[Math.floor(Math.random()*greetings.length)];
        speech.text = final;
    }
   else if(message.includes('I am fine what about you') ){
    
        const reeply = reply[0];
        speech.text = reeply;

    }
    else if(message.includes("ok bye")){
        const bye1 = bye;
        speech.text = bye1;
    }
    else{
        speech.text =" Sorry ! I don't Understand your Message ";
    }
    speech.lang = 'hi-Hindi'
    speech.volume = 2;
    speech.rate = 0.8;
    speech.pitch = 1 ;

    window.speechSynthesis.speak(speech);
}