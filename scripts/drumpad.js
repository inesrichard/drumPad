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

const keys = document.querySelectorAll('.box')
keys.forEach(box => box.addEventListener('transitionend', removeTransition)) // REMOVE THE ANIMATION WHEN THE AUDIO IS OVER



// PLAY THE SAMPLE AUDIO ON CLICK

let box 

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

const themeDisplay = document.querySelector('.feat1')

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

let demo1 = document.querySelector('audio[data-key="8"]')
let demo2 = document.querySelector('audio[data-key="13"]')
const feat2 = document.querySelector('.feat2')
let selected1

feat2.addEventListener('input', (e) => { 
    demo1.pause() //STOP THE AUDIO "Demo 1" CURRENTLY PLAYED IF ANOTHER IS SELECTED
    demo2.pause() //STOP THE AUDIO "Demo 2" CURRENTLY PLAYED IF ANOTHER IS SELECTED
    selected1 = feat2.options[feat2.selectedIndex].textContent
    {
        const audio = document.querySelector(`audio[data-key="${feat2.options[feat2.selectedIndex].getAttribute('data-key')}"]`)
        console.log(audio) 
        if(!audio) return
        audio.currentTime = 0
        audio.play()
        audio.loop()
    }
})


// PLAY THE MOOD AUDIO ON CLICK WHEN IT IS SELECTED

let bar = document.querySelector('audio[data-key="37"]')
let hall = document.querySelector('audio[data-key="38"]')
let garden = document.querySelector('audio[data-key="39"]')
let sea = document.querySelector('audio[data-key="40"]')
const feat3 = document.querySelector('.feat3')
const bg = document.querySelector('.bg_feat')
let selected2

feat3.addEventListener('input', (e) => { 
    bar.pause() //STOP THE AUDIO "Bar" CURRENTLY PLAYED IF ANOTHER IS SELECTED
    hall.pause() //STOP THE AUDIO "Hall" CURRENTLY PLAYED IF ANOTHER IS SELECTED
    garden.pause() //STOP THE AUDIO "Garden" CURRENTLY PLAYED IF ANOTHER IS SELECTED
    sea.pause() //STOP THE AUDIO "Sea" CURRENTLY PLAYED IF ANOTHER IS SELECTED
    selected2 = feat3.options[feat3.selectedIndex].textContent
    {
        const audio = document.querySelector(`audio[data-key="${feat3.options[feat3.selectedIndex].getAttribute('data-key')}"]`)
        if(!audio) return
        audio.currentTime = 0
        audio.play()
    }
        if(selected2 == bar)
        {
            bg.classList.add('bg_bar')
        }
})


// VOLUME BAR - LINK THE VOLUME TO THE RANGE SLIDER AND DISPLAY THE VALUE

const volumeContainer = document.querySelector('.volume_container')
const slider = volumeContainer.querySelector('.volume')
let output = volumeContainer.querySelector('.value')
let audioVolume = document.querySelectorAll('audio')

output.textContent = 50   

slider.oninput = function(e) {

    audioVolume = 0.5

    output.innerHTML = Math.floor(this.value*100)
    const volume = e.target.value
    audioVolume.forEach(element => {
        element.volume = volume
    })
    console.log(audioVolume)
}