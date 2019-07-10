
function SubmitContactForm() {

    $(".contactus .inputfield").removeClass("contains_error");
    $(".contactus .messages").removeClass('errorcontact').removeClass('visible');
    var validForm = true;
    if ($('#fname').val() == '')
    { validForm = false; $('#fname').addClass('contains_error'); }
    if ($('#lname').val() == '')
    { validForm = false; $('#lname').addClass('contains_error'); }
    if ($('#contactEmail').val() == '')
    { validForm = false; $('#contactEmail').addClass('contains_error'); }
    if ($('#contactMessage').val() == '')
    { validForm = false; $('#contactMessage').addClass('contains_error'); }


    if (!validForm)
        return;

    var form = $('#contactForm');
    // Get the messages div.
    var formMessages = $('#message_sent');
   // var val = $(this).val();
    // $(obj).val("Loading...");



    // Serialize the form data.
    var formData = $(form).serialize();
 
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    })
		.done(function (response) {
		    //console.log(response);
		    // Make sure that the formMessages div has the 'success' class.
		    $(formMessages).removeClass('error');
		    $(formMessages).addClass('success');
		    $(".contactus .messages").html(response).addClass("visible");
		    // Set the message text.
		    $(formMessages).find('span').text(response);
		    $(".contactus .inputfield").removeClass("contains_error");

		   // $(this).val(val);
		    // Clear the form.
		    $('#fname').val('');
		    $('#lname').val('');
		    $('#contactEmail').val('');
		    $('#contactMessage').val('');
		}).fail(function (data) {
		   // console.log(data);
		    // Make sure that the formMessages div has the 'error' class.
		    $(formMessages).removeClass('success');
		    $(formMessages).addClass('error');

		    $(".contactus .inputfield").removeClass("contains_error");


		    // Set the message text.
		    if (data.responseText !== '') {

		        if (data.responseText.indexOf('Oops') > -1)
		            $(".contactus .messages").html(data.responseText).addClass("errorcontact");
                else
                   $(".contactus .messages").html(data.responseText).addClass("visible");


		    } else {
		        $(".contactus .messages").html('Oops! An error occured and your message could not be sent.').addClass("errorcontact");
		    }
		});

		

		
    return false;
}
/*
(function ($, window, document, undefined) {

    var form = $('#contactForm');
    console.log(form);
    //contact form
    $(form).submit(function (event) {
        alert('asdasd');
        // Stop the browser from submitting the form.
        event.preventDefault();


        console.log('Form Is submitting');
        return;
        // Get the messages div.
        var formMessages = $('#message_sent');


        var val = $(this).val();
        $(this).val("Loading...");
        // Serialize the form data.
        var formData = $(form).serialize();

        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
		.done(function (response) {
		    // Make sure that the formMessages div has the 'success' class.
		    $(formMessages).removeClass('error');
		    $(formMessages).addClass('success');
		    $(".contact_form .messages").html(response).addClass("visible");
		    // Set the message text.
		    $(formMessages).find('span').text(response);
		    $(".contact_form .inputfield").removeClass("contains_error");

		    $(this).val(val);
		    // Clear the form.
		    $('#contactName').val('');
		    $('#contactEmail').val('');
		    $('#contactMessage').val('');
		}).fail(function (data) {
		    // Make sure that the formMessages div has the 'error' class.
		    $(formMessages).removeClass('success');
		    $(formMessages).addClass('error');

		    $(".contact_form .inputfield").removeClass("contains_error");


		    // Set the message text.
		    if (data.responseText !== '') {
		        $(".contact_form .messages").html(data.responseText).addClass("visible");
		    } else {
		        $(".contact_form .messages").html('Oops! An error occured and your message could not be sent.').addClass("visible");
		    }
		});
        return false;

    });
})(jQuery, window, document); */



$(document).ready(function () {

    $('.bxslider').bxSlider({
        mode: 'fade',
        adaptiveHeight: true

    });

    RegisterToggleTab();


    $('.MenuSmart').click(function () {

        $('.smartnavigation').toggleClass('active');

    });

    $('li.scrollAction').find('a[data="1"]').click(function () {
        window.scrollTo(0, 501);
    });
    $('li.scrollAction').find('a[data="2"]').click(function () {
        window.scrollTo(0, 1051);
    });
    $('li.scrollAction').find('a[data="3"]').click(function () {
        window.scrollTo(0, 1621);
    });
    $('li.scrollAction').find('a[data="4"]').click(function () {
        window.scrollTo(0, 1921);
    });

    


});

function RegisterToggleTab()
{
    $('.servicetabs').find('li').each(function (k) {

        $(this).click(function () {
            $('.servicetabs li').removeClass('active');
            $(this).addClass('active');
            $('.servicetabs .tabcontent').hide();
            $('.servicetabs .tabcontent').removeClass('active');
            var targetTab = $(this).find('a').attr('data');          
            $(targetTab).show().addClass('active');

        });

    });

}


$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 500) {
        $('li.scrollAction').removeClass("activeScroll");     
    }
    else if (scroll >= 500 && scroll < 1000) {
        $('li.scrollAction').removeClass("activeScroll");
        $('li.scrollAction').find('a[data="1"]').parent().addClass("activeScroll");
    }
    else if (scroll >= 1000 && scroll < 1600) {
        $('li.scrollAction').removeClass("activeScroll");
        $('li.scrollAction').find('a[data="2"]').parent().addClass("activeScroll");
    }
    else if (scroll >= 1600 && scroll < 1900) {
        $('li.scrollAction').removeClass("activeScroll");
        $('li.scrollAction').find('a[data="3"]').parent().addClass("activeScroll");
    }
    else if (scroll >= 1900) {
        $('li.scrollAction').removeClass("activeScroll");
        $('li.scrollAction').find('a[data="4"]').parent().addClass("activeScroll");
    }
   // console.log(scroll);

});