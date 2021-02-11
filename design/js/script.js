var medal = document.getElementById('medal')
var main = document.getElementById('main-info')

document.getElementById('active-1').style.display = 'none'



medal.addEventListener('click' , function() {
    if(document.getElementById('active-1').style.display = 'none'){
        document.getElementById('active').style.display = 'none'
        document.getElementById('active-1').style.display = 'block'
    }
})




// Main info

main.addEventListener('click' , function() {
    if(document.getElementById('active').style.display = 'none'){
        document.getElementById('active-1').style.display = 'none'
        document.getElementById('active').style.display = 'block'
    }
})

