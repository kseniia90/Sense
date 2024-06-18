if (document.querySelector('.thanks_popup') !== null) {

    document.querySelectorAll('.open_thanks_popup').forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            document.body.style.overflow = 'hidden';
            document.querySelector('.thanks_popup').classList.add('active');
        });
    })
    document.querySelector('.thanks_popup-content').addEventListener('click', function (e) {
        e.stopPropagation();
    });

    document.querySelector('.thanks_popup .close_popup').addEventListener('click', function (e) {
        document.body.style.overflow = 'visible';
        document.querySelector('.thanks_popup').classList.remove('active');
    });
} 