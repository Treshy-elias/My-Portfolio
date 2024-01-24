
let startValue = 0
let endValue1 = 88
let endValue2 = 70
let endValue3 = 80
let endValue4 = 60



setTimeout(() => {
    setInterval(() => {
        startValue++
        if (startValue < endValue1) {
            value1.innerHTML = startValue + '%'
            circle1.style.background = ` conic-gradient(cyan ${startValue * 3.6}deg, black 0deg)`
        }
        if (startValue < endValue2) {
            value2.innerHTML = startValue + '%'
            circle2.style.background = ` conic-gradient(cyan ${startValue * 3.6}deg, black 0deg)`
        }
        if (startValue < endValue3) {
            value3.innerHTML = startValue + '%'
            circle3.style.background = ` conic-gradient(cyan ${startValue * 3.6}deg, black 0deg)`
        }
        if (startValue < endValue4) {
            value4.innerHTML = startValue + '%'
            circle4.style.background = ` conic-gradient(cyan ${startValue * 3.6}deg, black 0deg)`
        }

       

       

     
        console.log(startValue)
    }, 50);
}, 1000);


