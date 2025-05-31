const main = document.querySelector('main')
const voiceSelect = document.getElementById('voices')
const textarea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')

const data = [{
        image: '../drink.jpg',
        text: "Im Thirsty"
    },
    {
        image: '../food.jpg',
        text: "I'm Hungry"
    },
    {
        image: '../tired.jpg',
        text: "I'm Tired"
    },
    {
        image: '../hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: '../happy.jpg',
        text: "I'm Happy"
    },
    {
        image: '../angry.jpg',
        text: "I'm Angry"
    },
    {
        image: '../sad.jpg',
        text: "I'm Sad"
    },
    {
        image: '../scared.jpg',
        text: "I'm Scared"
    },
    {
        image: '../outside.jpg',
        text: "I want to go outside"
    },
    {
        image: '../home.jpg',
        text: "I want to go home"
    },
    {
        image:'../school.jpg',
        text: "I want to go to school",
    },
    {
        Image: '../grandma.jpg',
        text: "I want to go to grandma's",
    },

]


data.forEach(createBox)

function createBox(item) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = `
        <img src ="${item.image}" alt ="${item.text}"/>
        <p class ="info"> ${item.text} </p>
    `

box.addEventListener('click',()=>{
    setTextMessage(item.text)
    speakText()

    //add active effect
    box.classList.add('active')
    setTimeout( ()=> box.classList.remove('active') ,800)
})

    main.appendChild(box)
}

//initialize Speech synthesis
const message = new speechSynthesisUtterance()

//set text
function setTextMessage(text){
    message.text=text
}

//Speak Text
Function speakText(){
    speechSynthesis.speak(message)
}


//toggle Text box
toggleBtn.addEventListerner('click',()=>{
    document.getElementById('text-box').classList.toggle('show')
})

//close Box
closeBtn.addEventListener('click',()={
    document.getElementById('text-box').classList.remove ('show')
})

let voices = []

function getVoice(){
    voices = speachSynthesis.getVoices()

    voices.foreach(voiice=>{
        const option = document.createElement('option')

        option.value=voice.name
        option.innterText = '${voice.name}${voice.name}'

        voicesSelect.appendChild(option)
    })
}

//voices changed
speachS=tynthesis.addEventListener('voiceschanged',getVoices)


//change voice
voicesSelect.addEventListener('change',setVoice)

//set voice
function setVoice(e){
    message.voice = voices.find(voice => voice.name === e.target.value)
}

getVoices()

//readtext button
readBtn.addEventListener('click',()=>{
    setTextMessage(textarea.value)
    speakText()
})
