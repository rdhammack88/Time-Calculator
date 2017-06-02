
$(document).ready(function() {
//
    var hours = [], minutes = [], seconds = [];
    var x = 0;

    // CHANGING THE SELECTED <INPUT> DEPENDING ON THE FOCUS OF THE ELEMENT
    $('#hours').focusin(function() {
        $(this).prop('placeholder', '');
    });
    $('#hours').focusout(function() {
        $(this).prop('placeholder', 'hours');
    });
    $('#minutes').focusin(function() {
        $(this).prop('placeholder', '');
    });
    $('#minutes').focusout(function() {
        $(this).prop('placeholder', 'minutes');
    });
    $('#seconds').focusin(function() {
        $(this).prop('placeholder', '');
    });
    $('#seconds').focusout(function() {
        $(this).prop('placeholder', 'seconds');
    });
    $('#remove_index').focusin(function() {
        $(this).prop('placeholder', '');
    });
    $('#remove_index').focusout(function() {
        $(this).prop('placeholder', '# 1-60');
    });

    // ADDING THE CONTENTS OF THE HOURS, MINUTES, SECONDS INPUT FIELDS
    // TO THE RESPECTIVE NAMED ARRAY TO BE CALCULATED LATER
    $('#add').click(function() {

        var hr = $('#hours').val();
        var min = $('#minutes').val();
        var sec = $('#seconds').val();
        var timesList = document.getElementsByTagName('li');

        if(hr.length === 1) {
            hr = 0 + hr;
        };
        if(min.length === 1) {
            min = 0 + min;
        };
        if(sec.length === 1) {
            sec = 0 + sec;
        };

        $(timesList[x]).text(hr + 'h:' + min + 'm:' + sec + 's');
        x++;

        hours.push(hr);
        minutes.push(min);
        seconds.push(sec);

        alert(hours + '\n' + minutes + '\n' + seconds);

//        return hours, minutes, seconds;

    });

    // CALCULATE THE TIMES THAT HAVE BEEN INPUT
    $('#calculate').click(function() {

    });

    // CLEAR THE ENTIRE LIST OF INPUT TIMES
    $('#clear_time').click(function() {

    });

    // CLEAR JUST THE CHOSEN LIST ITEM OF INPUT TIME
    $('#remove').click(function() {

    });

});
