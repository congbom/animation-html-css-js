(function(){
    "use strict";

    window.onload = function () {
        let options = { threshold: [ 0, 0.5, 1 ] };
        let observer = new IntersectionObserver( scrollInviewAnimation, options );

        let elements = document.querySelectorAll('[data-animation]');

        elements.forEach( function ( element ) {
            observer.observe( element );
        } );
    }

    function scrollInviewAnimation( entries, observer ) {
        entries.forEach( function ( entry ) {
            if ( entry.target.dataset.animation ) {
                if ( entry.isIntersecting ) {
                    if ( entry.intersectionRatio >= 0.5 ) {
                        entry.target.classList.add('animated');
                    }
                } else {
                    entry.target.classList.remove('animated');
                }
            }
        } );
    }
})();