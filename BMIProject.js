function BMI(){
    let in1=document.getElementById("in1").value;
    let in2=document.getElementById("in2").value;
    let bmi=parseFloat(in2)/((parseFloat(in1)/100)**2);
    // console.log(bmi.toFixed(2));
    document.getElementById("outputvalue").style.cssText=`
    letter-spacing:0.5px;
    color:green;`
    document.getElementById("outputvalue").innerHTML=bmi.toFixed(2);

    
    if(bmi<18.5){
        // console.log("below")
        document.getElementById("indicator").style=`
        transform: translatex(55px);
        transition-duration: 3s;
        transition-delay: 0.6s;`
        document.getElementById("stage").innerHTML="Time to grab a bite!"
        document.getElementById("stage").style=`
        color: rgb(155, 103, 103);`
        document.getElementById("description").innerHTML="By maintaining a healthy weight, you lower your risk of developing serious health problems."

    }
    else if(bmi>=18.5 && bmi<=24.9){
        document.getElementById("indicator").style=`
        transform: translatex(177px);
        transition-duration: 3s;
        transition-delay: 0.6s;`
        document.getElementById("stage").innerHTML="Great shape"
        document.getElementById("stage").style=`
        color: rgba(51, 143, 51, 1);`
        document.getElementById("description").innerHTML="By maintaining a healthy weight, you lower your risk of developing serious health problems."


    }
    else if(bmi>=25.0 && bmi<=29.9){
        document.getElementById("indicator").style=`
        transform: translatex(295px);
         transition-duration: 3s;
        transition-delay: 0.6s;`
         document.getElementById("stage").innerHTML="Time to run!"
         document.getElementById("stage").style=`
        color: rgba(247, 36, 36, 1);`
        document.getElementById("description").innerHTML="By maintaining a healthy weight, you lower your risk of developing serious health problems."


    }
    else if(bmi>=30.0){
        document.getElementById("indicator").style=`
        transform: translatex(415px);
        transition-duration: 3s;
        transition-delay: 0.6s;`
         document.getElementById("stage").innerHTML="Time to run!"
         ocument.getElementById("stage").style=`
        color: rgba(247, 36, 36, 1);`
        document.getElementById("description").innerHTML="By maintaining a healthy weight, you lower your risk of developing serious health problems."

    }
}