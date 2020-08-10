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

        tabs.forEach(el => {
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

    //timer
    // 1. створити функцію яка буде нам виводити різницю між дедлайном і теперішнім часом

    const deadline = '2020-08-18'

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),

            days = Math.floor((t / (1000 * 60 * 60 * 24))),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60) % 24));

        return {
            'total': t,
            'days': days,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        }

    }

    // 2. створити функцію яка устанавлює часи(таймер)

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return '0' + num
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000)

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearImmediate(timeInterval)
            }
        }
    }

    setClock('.timer', deadline)
})