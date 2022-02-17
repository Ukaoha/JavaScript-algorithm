    'use strict'
    // JavaScript function to check if an input is a string
    const str = function(input) {
        if(Object.prototype.toString.call(input) === '[object String]') 
            return true  ;
            else 
            return false
        
    };
    console.log(str('boy'));
    console.log(str(12));

    //  using typeof
    const myStr = function(input) {
        if(typeof input === 'string')
        return true ;
        else 
        return false;
    }
    console.log(myStr('zoba'));
    console.log(myStr(16)); 

    // Write a javaScript function to check if a string is blank or not 
    const strLent = function(val) {
        if(val.length === 0) {
            console.log('the input is empty');
        } else {
            console.log('the input is full');
        }
    }

    console.log(strLent('boy'));
    console.log(strLent(''));

    // write a javaScript function to spilt a string into an array of words 
    const spiltStr = function(input) {
    return input.split()
    }
    console.log(spiltStr('booy  girl'));