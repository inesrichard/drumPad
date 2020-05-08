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
    box.classList.add('anime') // ADD THE ANIMATION WHEN THE AUDIO IS PLAYED
})

function removeTransition(e) 
{
    if (e.propertyName !== 'transform') return
    this.classList.remove('anime')
    console.log(e.propertyName)
}

const keys = document.querySelectorAll('.box')
keys.forEach(box => box.addEventListener('transitionend', removeTransition)) // REMOVE THE ANIMATION WHEN THE AUDIO IS OVER

  
// PLAY THE AUDIO ON CLICK

