// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {


    let header = document.getElementById('header'),
        scrollPrev = 0,
        fixedButton = document.getElementById('bottom-elem');
    window.addEventListener('scroll', function() {

        let scrolled = window.pageYOffset;
        if(scrolled > 62){
            header.classList.add('h-fixed');
            if ( scrolled > 62 && scrolled > scrollPrev ) {
                header.classList.add('out');
            } else {
                header.classList.remove('out');
            }
            scrollPrev = scrolled;
        }else if(scrolled == 0){
            header.classList.remove('h-fixed');
        }
        if(scrolled < 62){
          header.classList.remove('out');
          header.classList.remove('h-fixed');
        }

        if(scrolled > 620){
            fixedButton.classList.add('show');
        }else{
            fixedButton.classList.remove('show');
        }
    });

})
