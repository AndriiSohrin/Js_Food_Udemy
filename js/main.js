window.addEventListener('DOMContentLoaded', () => {

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');


    // function hideTabContent() {
    //     tabsContent.forEach(tab => {
    //         tab.style.display = 'none'
    //     })
    //     tabs.forEach(el => {
    //         el.classList.remove('tabheader__item_active')
    //     })
    // }

    // function showTabContent(i = 0) {

    //     tabsContent[i].style.display = 'block';
    //     tabsContent[i].classList.add('show', 'fade');


    //     tabs[i].classList.add('tabheader__item_active')

    // }

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide'),
            item.classList.remove('show', 'fade');
        })

        tabs.forEach(el=>{
            el.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent()
    showTabContent();
    tabsParent.addEventListener('click', event => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent()
                    showTabContent(i);
                }
            })
        }
    })



})