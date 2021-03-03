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

//Add Story

const addStory = document.querySelector('.actions-span')
document.querySelector('.story-form').style.display = 'none'

addStory.addEventListener('click', function () {
        document.querySelector('.empty-stories').style.display = 'none'
        document.querySelector('.story-form').style.display = 'block'
})
