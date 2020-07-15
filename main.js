$(function(){

    var $screen = $('#screen');
    // let numbers = '69+7-9+32/2*50+22/4';
    var regex = /(\d+)/g;
    var regex2 = /[+-/*]/g;
    

    function calc(val1, val2, operator){

        val1 = parseFloat(val1);
        val2 = parseFloat(val2);
    
        switch (operator) {
            case '/':
                return val1 / val2;
                break;
            case '+':
                return val1 + val2;
                break;
            case '-':
                return val1 - val2;
                break;
            case '*':
                return val1 * val2;
                break;
        
            default:
                console.log('Error: Validate Expression');
                break;
        }
    }

    function equate(result, result2){

        let val = 0;
    
        while(result.length != 1 && result2.length != 0){
            // check if there is a '/' or '*' operator in result2
            if(result2.includes('*') || result2.includes('/')){
                var index = 0;
                //  Get the index of the operator
                for(var i=0; i<result2.length; i++){
                    if(result2[i] == '/' || result2[i] == '*'){
                        index = result2.indexOf(result2[i]);
                        break;
                    }
                }
                // Get the numbers that uses the operator from result
                val = calc(result[i], result[i+1], result2[i]);
                result[i] = val;    // Replace the first number that uses the operator
                result.splice(i+1, 1);  // delete the second operator number from result
                result2.splice(i, 1);   // delete the operator from result2
            } else {
                // Run this code if the is no '/' or '*' operator result2
                val = calc(result[0], result[1], result2[0]);
                for(var i=0; i<2; i++){
                    result.shift();
                }
                result2.shift();
                result.unshift(val);
            }
            
        }
    
        return val;
    }

    function processExp(numbers){
        var result = numbers.match(regex);
        var result2 = numbers.match(regex2);

        var val = equate(result, result2);
        console.log(val);
        $screen.html(val);

    }

    // Monitor for a click event then run attached function
    $('span').on('click', function(e){
        
        // Get the value pressed
        var value = $(this).text();
        var $rawVal = $(this).text();
        var $id = $(this).attr('id');

        if(value == 'del'|| value == '='){
            value = '';
        }

        if($id == 'divide'){
            value = '/';
        } else if($id == 'multiply'){
            value = '*';
        }

        $screen.append(value)

        if(value == 'AC'){
            value = '';
            $screen.html(value);
        }

        if($id === 'multi'){
            value = $screen.text();
            value = Math.abs(parseInt(value));
            $screen.html(value);
        }
        if($rawVal == 'del'){
            value = $screen.html();
            $screen.html(value.substr(0, value.length-1));
        }

        if($rawVal == '='){
            var numbers = $screen.html();
            processExp(numbers);
        }
        
    });

});
