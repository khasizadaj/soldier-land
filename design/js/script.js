
// version 1 - a bit advanced - not the best probably

const tabs = document.querySelectorAll('.wrapper-tab')
const data = document.querySelectorAll('.about-section-data')

tabs.forEach((tab, index) => {
        let classes = tab.classList;
        tab.addEventListener('click', () => {
        
        tabs.forEach((tab) => {
                tab.classList.remove('active')
        })
        data.forEach((tab) => {
                tab.classList.remove('active')
        })

        if (classes.contains('active')) {
                tab.classList.remove('active')
            data[index].classList.remove('active')
        } else {
                tab.classList.add('active')
                data[index].classList.add('active')
            }
        })
    })
    
    // version 2 - based on your idea - not bad probably not the best too
    // both works fine 
    
// const medalBtn = document.getElementById('medal-button')
// const mainBtn = document.getElementById('main-button')
// const medalData = document.getElementById('medal-data')
// const mainData = document.getElementById('main-data')

// medalBtn.addEventListener('click', function (e) {
//     let classes = e.target.classList;

//     if (!classes.contains('active')) {
//         medalBtn.classList.add('active');
//         medalData.classList.add('active');

//         mainBtn.classList.remove('active');
//         mainData.classList.remove('active');
//     }
// });

// mainBtn.addEventListener('click', function (e) {
//     let classes = e.target.classList;

//     if (!classes.contains('active')) {
//         mainBtn.classList.add('active');
//         mainData.classList.add('active');

//         medalBtn.classList.remove('active');
//         medalData.classList.remove('active');
//     }
// });


// medalBtn.addEventListener('click', function () {

//     if (document.getElementById('medal-data').style.display == 'none') {
//         document.getElementById('active').style.display = 'none'
//         document.getElementById('medal-data').style.display = 'block'

//         medal.classList.remove('medal-js-1')
//         main.classList.remove('main-js-1')

//         medal.classList.add('medal-js')
//         main.classList.add('main-js')

//         // main.style.color = '#828282'
//         // main.style.backgroundColor = '#fff'
//         // main.style.borderRadius = 'none'
//         // main.style.fontWeight = '700'

//         // medal.style.backgroundColor = '#02d464'
//         // medal.style.color = '#fff'
//         // medal.style.borderRadius = '30px'
//         // medal.style.fontWeight = '100'
//         // medal.style.padding = '5px 15px'
//         // medal.style.width = '60%'
//         // medal.style.marginLeft = '5px'
//     }
// })

// // Main info

// mainBtn.addEventListener('click', function () {
//     if (document.getElementById('active').style.display == 'none') {
//         document.getElementById('medal-data').style.display = 'none'
//         document.getElementById('active').style.display = 'block'

//         medal.classList.remove('medal-js')
//         main.classList.remove('main-js')

//         medal.classList.add('medal-js-1')
//         main.classList.add('main-js-1')


//         // medal.style.color = '#828282'
//         // medal.style.backgroundColor = '#fff'
//         // medal.style.borderRadius = 'none'
//         // medal.style.fontWeight = '700'

//         // main.style.backgroundColor = '#02d464'
//         // main.style.color = '#fff'
//         // main.style.borderRadius = '30px'
//         // main.style.fontWeight = '100'
//         // main.style.padding = '5px 15px'
//     }
// })

