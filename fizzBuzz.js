/*
    Engineering method :

    Explore :   ask questions      /  can there be negatives?  / Will there be other types?
                test case           / 0    /    null=> what do I return?


    Vrainstorm : multiple solutions
                 pick the best option

                
    Plan :      plan around  the best solution
                step by step

                iterate from 0 to a number (50, 100, 1000)
                    check if a  number us divisible by 5
                        if it is log 'fizz'
                    check if a  number us divisible by 3
                        if it is log 'buzz'
                    check if a  number us divisible by 5 & 3
                        if it is log 'fizz buzz'


    Execute :   writing code

*/


for ( let a = 1; a <= 100; a++ ){
    if (a %3 === 0 && a %5 === 0 ) {
        console.log("Fizz Buzz")
    } else if ( a %5 === 0 ){
        console.log("Buzz")
    } else if ( a %3 === 0 ) {
        console.log("Fizz")
    } else {
        console.log(a)
    }
}

