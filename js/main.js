jQuery(document).ready(function() {
    jQuery('section').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });
});