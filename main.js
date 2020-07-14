$(function(){

    var $screen = $('#screen');

    function calculate(value){
        
    }

    $('span').on('click', function(e){
        
        var value = $(this).text();
        if(value == 'del'|| value == '='){
            value = '';
        }
        
        $screen.append(value);

        if(value == 'AC'){
            value = '';
            $screen.html(value);
        }

        if(($(this).attr('id')) === 'multi'){
            value = $screen.text();
            value = Math.abs(parseInt(value));
            $screen.html(value);
        }

        if($(this).text() == 'del'){
            value = $screen.html();
            $screen.html(value.substr(0, value.length-1));
        }

        if($(this).text() == '='){
            let $numArr = Array.from($screen.html())
            console.log(typeof($screen.html()));
            console.log($numArr);
            var dat = parseInt('102/3');
            console.log(dat);
            
            
        }
        
    });

});
