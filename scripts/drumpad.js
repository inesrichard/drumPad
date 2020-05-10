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


// PLAY THE AUDIO ON KEYDOWN

window.addEventListener('keydown', function(e)
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const box = document.querySelector(`.box[data-key="${e.keyCode}"]`)
    if(!audio) return
    audio.play()
    audio.currentTime = 0
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


// PLAY THE AUDIO ON CLICK

let box 

keys.forEach((box) => {
    box.addEventListener('click', (e) => { 
        console.log(box.getAttribute('data-key'))
        const audio = document.querySelector(`audio[data-key="${box.getAttribute('data-key')}"]`)
        console.log(audio) 
        if(!audio) return
        audio.play()
        audio.currentTime = 0
        box.classList.add('animation') // ADD THE ANIMATION WHEN THE AUDIO IS PLAYED   
        })
})




/*let feat3 = document.querySelector('.feat3')

keys.forEach((feat3) => {
    feat3.addEventListener('keydown', (e) => { 
        console.log(feat3.getAttribute('data-key'))
        const audio = document.querySelector(`audio[data-key="${feat3.getAttribute('data-key')}"]`)
        console.log(audio) 
        if(!audio) return
        audio.play()
        audio.currentTime = 0
        })
})*/

let bar = document.querySelector('.bar')
let hall = document.querySelector('.hall')
let garden = document.querySelector('.garden')
let sea = document.querySelector('.sea')

function feat (){
    feat.addEventListener('click', (e) => { 
        if(bar = true)
        {
            console.log(feat.getAttribute('data-key'))
            const audio = document.querySelector(`audio[data-key="${feat.getAttribute('data-key')}"]`)
            console.log(audio) 
            if(!audio) return
            audio.play()
            audio.currentTime = 0
        }
    })
}








// VOLUME BAR

const volumeContainer = document.querySelector('.volume_container')
const slider = volumeContainer.querySelector('.volume')
let output = volumeContainer.querySelector('.value')
let audioVolume = document.querySelectorAll('audio')

output.innerHTML = slider.nodeValue

slider.oninput = function(e) {
    output.innerHTML = this.value*100
    const volume = e.target.value
    audioVolume.forEach(element => {
        element.volume = volume
    })
    console.log(audioVolume)
}