window.addEventListener('load', function () {
    setTimeout(function () {
        const loaderContainer = document.querySelector('.loader-container');

        loaderContainer.style.opacity = '0';

        setTimeout(function () {
            loaderContainer.style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 500);
    }, 2000);
});
