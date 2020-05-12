// --- DECLARATION OF ALL THE VARIABLES --- //
const drumPad = document.querySelector('.drum_pad')
const containerBox = drumPad.querySelector('.container_box')
const containerFeatures = drumPad.querySelector('.container_features')
const containerAudio = document.querySelector('.container_audio')
const keys = containerBox.querySelectorAll('.box')
const themeDisplay = containerFeatures.querySelector('.feat1')
const demo1 = containerAudio.querySelector('audio[data-key="8"]')
const demo2 = containerAudio.querySelector('audio[data-key="13"]')
const bar = containerAudio.querySelector('audio[data-key="37"]')
const hall = containerAudio.querySelector('audio[data-key="38"]')
const garden = containerAudio.querySelector('audio[data-key="39"]')
const sea = containerAudio.querySelector('audio[data-key="40"]')
const feat2 = containerFeatures.querySelector('.feat2')
const feat3 = containerFeatures.querySelector('.feat3')
let bg = document.querySelector('.bg_feat')
let selected1
let selected2
let box 
const volumeContainer = containerFeatures.querySelector('.volume_container')
const slider = volumeContainer.querySelector('.volume')
let output = volumeContainer.querySelector('.value')
let audioVolume = containerAudio.querySelectorAll('audio')


// --- SAMPLES --- //

// PLAY THE SAMPLE AUDIO ON KEYDOWN

window.addEventListener('keydown', function(e)
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const box = document.querySelector(`.box[data-key="${e.keyCode}"]`)
    if(!audio) return
    audio.currentTime = 0
    audio.play()
    box.classList.add('animation') // ADD THE ANIMATION WHEN THE AUDIO IS PLAYED
})

function removeTransition(e) 
{
    if (e.propertyName !== 'transform') return
    this.classList.remove('animation')
    console.log(e.propertyName)
}

keys.forEach(box => box.addEventListener('transitionend', removeTransition)) // REMOVE THE ANIMATION WHEN THE AUDIO IS OVER


// PLAY THE SAMPLE AUDIO ON CLICK

keys.forEach((box) => {
    box.addEventListener('click', (e) => { 
        console.log(box.getAttribute('data-key'))
        const audio = document.querySelector(`audio[data-key="${box.getAttribute('data-key')}"]`)
        console.log(audio) 
        if(!audio) return
        audio.currentTime = 0
        audio.play()
        box.classList.add('animation') // ADD THE ANIMATION WHEN THE AUDIO IS PLAYED   
        })
})


// --- FEATURES --- //

// SET THE DARK MODE

function themeDisplayChange()
{
    let themeContent = themeDisplay.textContent
    if(themeContent == 'Dark')
    {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeDisplay.textContent = 'Light'
    
    }
    else if(themeContent == 'Light')
    {
        document.documentElement.setAttribute('data-theme', 'default')
        themeDisplay.textContent = 'Dark'

    }
}

themeDisplay.addEventListener('click', themeDisplayChange)


// PLAY THE DEMO AUDIO ON CLICK WHEN IT IS SELECTED

feat2.addEventListener('input', (e) => { 
    demo1.pause() //STOP THE AUDIO "Demo 1" CURRENTLY PLAYED IF ANOTHER IS SELECTED
    demo2.pause() //STOP THE AUDIO "Demo 2" CURRENTLY PLAYED IF ANOTHER IS SELECTED
    selected1 = feat2.options[feat2.selectedIndex]
        const audio = document.querySelector(`audio[data-key="${feat2.options[feat2.selectedIndex].getAttribute('data-key')}"]`)
        console.log(audio) 
        if(!audio) return
        audio.currentTime = 0
        audio.play()
})


// PLAY THE MOOD AUDIO ON CLICK WHEN IT IS SELECTED

feat3.addEventListener('input', (e) => { 
    bar.pause() //STOP THE AUDIO "Bar" CURRENTLY PLAYED IF ANOTHER IS SELECTED
    hall.pause() //STOP THE AUDIO "Hall" CURRENTLY PLAYED IF ANOTHER IS SELECTED
    garden.pause() //STOP THE AUDIO "Garden" CURRENTLY PLAYED IF ANOTHER IS SELECTED
    sea.pause() //STOP THE AUDIO "Sea" CURRENTLY PLAYED IF ANOTHER IS SELECTED   
    selected2 = feat3.options[feat3.selectedIndex]
        const audio = document.querySelector(`audio[data-key="${feat3.options[feat3.selectedIndex].getAttribute('data-key')}"]`)
        if(!audio) return
        audio.currentTime = 0
        audio.play()
        /*if(selected2 == bar)
        {
           
            bg.classList.add('bg_bar')
            bg.classList.remove('bg_hall')
            bg.classList.remove('bg_garden')
            bg.classList.remove('bg_sea')
            
        }*/ // This part doesnt' work. I wanted to add an image that represents the mood in background, so in the fill "images" you will find 4 images, of a bar, a hall, a garden, and the sea. I should have 4 "if" and one "else" to cover all the options but since it didn't even work for the bar, I didn't code them.
})


// VOLUME BAR - LINK THE VOLUME TO THE RANGE SLIDER AND DISPLAY THE VALUE

output.textContent = 50 

slider.oninput = function(e) {
    output.innerHTML = Math.floor(this.value*100)
    const volume = e.target.value
    audioVolume.forEach(element => {
        element.volume = volume
    })
    console.log(audioVolume)
}