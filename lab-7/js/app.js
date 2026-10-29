document.addEventListener('DOMContentLoaded', function() {
    const switcherButtons = document.querySelectorAll('.switcher-btn');
    const body = document.body;

    function switchView(viewType) {
        switcherButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.view === viewType) {
                btn.classList.add('active');
            }
        });

        if (viewType === 'mobile') {
            body.classList.add('is-mobile');
        } else {
            body.classList.remove('is-mobile');
        }

        console.log('Переключено на:', viewType); // для отладки
    }

    switcherButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            switchView(this.dataset.view);
            body.classList.add('manual-switch');
        });
    });

    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const isMobileWidth = window.innerWidth <= 768;

            if (!body.classList.contains('manual-switch')) {
                if (isMobileWidth) {
                    switchView('mobile');
                } else {
                    switchView('desktop');
                }
            }
        }, 250);
    });
});