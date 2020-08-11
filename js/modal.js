window.addEventListener('DOMContentLoaded', () => {
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modaLClosedBtn = document.querySelector('[data-closed]');

    function closedModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');

        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');

        document.body.style.overflow = 'hidden';
        clearInterval(intervalModal);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal)
    })

    modaLClosedBtn.addEventListener('click', closedModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closedModal();
        }
    })

    document / addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closedModal();
        }
    })

    const intervalModal = setTimeout(openModal, 3000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal()
            document.removeEventListener('scroll', showModalByScroll);
        }
    }

    document.addEventListener('scroll', showModalByScroll)

})