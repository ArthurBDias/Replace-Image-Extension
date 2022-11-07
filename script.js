const form = document.querySelector('form')
const input = document.querySelector('.input')

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3X7iiJcDpD-QP6ln5kJmUzRbJH3Tgn5zWhg&usqp=CAU

const replaceImages = (url) =>{
    const images = document.querySelectorAll('img')

    images.forEach((image) => image.src = url)
}

form.addEventListener('submit', async (e) =>{
    e.preventDefault()
    
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true})
    
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: replaceImages,
        args: [input.value]
    })
})
