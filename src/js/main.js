document.addEventListener("DOMContentLoaded", function() {

    var burger = document.getElementsByClassName('nav__burger')[0],
        nav = document.getElementsByClassName('nav')[0];

    burger.addEventListener('click', function(event){

        if (!nav.classList.contains('show')){
            nav.classList.add('show');
        } else {
            nav.classList.remove('show');
        }

    });


});