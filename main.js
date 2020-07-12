$(function(){


    var $screen = $('#screen');
    $('span').on('click', function(e){
        
        var value = $(this).text();
        $screen.append(value);

        if( $(this).attr('class') == 'default'){
            if(value == 'AC'){
                value = '';
            }

            if(($(this).attr('id')) === 'multi'){
                value = $screen.text();
                value = Math.abs(parseInt(value));
            }

            $screen.html(value);
        }

        console.log(eval(-.5-+9*8**5-9));
        
    });

});