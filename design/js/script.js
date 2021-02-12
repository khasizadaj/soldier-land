var medal = document.getElementById('medal')
var main = document.getElementById('main-info')

document.getElementById('active-1').style.display = 'none'



medal.addEventListener('click' , function() {
    if(document.getElementById('active-1').style.display = 'none'){
        document.getElementById('active').style.display = 'none'
        document.getElementById('active-1').style.display = 'block'

        main.style.color = '#828282'
        main.style.backgroundColor = '#fff'
        main.style.borderRadius = 'none'
        main.style.fontWeight = '700'

        medal.style.backgroundColor = '#02d464'
        medal.style.color = '#fff'
        medal.style.borderRadius = '30px'
        medal.style.fontWeight = '100'
        medal.style.padding = '5px 15px'
        medal.style.width = '60%'
        medal.style.marginLeft = '5px'

        

        

       
    }
})




// Main info

main.addEventListener('click' , function() {
    if(document.getElementById('active').style.display = 'none'){
        document.getElementById('active-1').style.display = 'none'
        document.getElementById('active').style.display = 'block'


        medal.style.color = '#828282'
        medal.style.backgroundColor = '#fff'
        medal.style.borderRadius = 'none'
        medal.style.fontWeight = '700'

        main.style.backgroundColor = '#02d464'
        main.style.color = '#fff'
        main.style.borderRadius = '30px'
        main.style.fontWeight = '100'
        main.style.padding = '5px 15px'

       
        
    }
})

