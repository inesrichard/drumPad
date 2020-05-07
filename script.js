const themeDisplay = document.querySelector('.theme_display')

function themeDisplayChange()
{
    let themeContent = themeDisplay.textContent
    if(themeContent == 'Light')
    {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeDisplay.textContent = 'Dark'
    
    }
    else if(themeContent == 'Dark')
    {
        document.documentElement.setAttribute('data-theme', 'default')
        themeDisplay.textContent = 'Light'
    }
}

themeDisplay.addEventListener('click', themeDisplayChange)