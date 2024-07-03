if (document.querySelector('.winn_popup') !== null) {

    window.setTimeout(function() {
        document.body.style.overflow = 'hidden';
        document.querySelector('.winn_popup-form').classList.add('active');
    }, 6000);

    document.querySelectorAll('.winn_popup .close_popup').forEach(function (button) {
        button.addEventListener('click', function (e) {
            document.body.style.overflow = 'visible';
            document.querySelector('.winn_popup-form').classList.remove('active');
            document.querySelector('.winn_popup-thanks').classList.remove('active');
        });
    })
};