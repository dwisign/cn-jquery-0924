$(document).ready(function(){

    // $('div').click(function(){
    //     $(this).hide()
    // })

    $('.hide').click(function(){
        $('.text').hide()
    })

    $('.show').click(function(){
        $('.text').show()
    })

    $('#toggle').click(function(){
        $('.text').toggle()

        if($(this).text() == 'Hide'){
            $(this).text('Show')
        }else{
            $(this).text('Hide')
        }
    })

    $('.alert').hide()
    $('.nama').blur(function(){
        $('.alert').show()
    })

    $('.alertTitle').hide()
    $('.title').change(function(){
        $('.alertTitle').show()
    })

    $('.moveRight').click(function(){
        $('.box').animate({
            marginLeft: '300px',
            width: '400px',
            height: '400px'
        })
    })

    $('.moveLeft').click(function(){
        $('.box').animate({
            marginLeft: '0px',
            width: '250px',
            height: '250px'
        })
    })




})

