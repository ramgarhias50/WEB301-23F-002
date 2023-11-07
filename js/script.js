$(document).ready(function () {
    $("#creditCardInformation").validate({
        rules: {
            creditCard: {
                required: true,
                pattern: /^(34|37|4|5[1-5]).*$/
            },
            expireDate: {
                required: true,
                pattern: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[1,2])\/(19|20)\d{2}.$/
            },
            cvv: {
                required: true,
                pattern: /\d{3}.$/
            }
        },
        messages: {
            creditCard: {
                required: "Please enter your credit card",
                pattern: "Please Enter Vaild Pattern"
            },
            expireDate: {
                required: "Please enter a Expire Date",

            },
            cvv: {
                required: "Please enter your 3 digit CVV number",
                pattern: "Please enter a valid CVV code"
            }
        }
    });

});
const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
