function calculate(){
    let getheight=document.getElementById("height").value;
    let getweight=document.getElementById("weight").value;
    let BmiValue=getweight/(getheight*getheight);
    document.getElementById("Bmi").innerHTML="your BMI is "+ BmiValue;
    if(BmiValue<18.5){
        document.getElementById("means").innerHTML="You are Underweight";
        document.getElementById("means").style.color="yellow";
    }
    if(BmiValue>=18.5 && BmiValue<=24.9){
        document.getElementById("means").innerHTML="You are Healthy weight";
        document.getElementById("means").style.color="green";
    }
    if(BmiValue>24.9){
        document.getElementById("means").innerHTML="You are Overweight";
        document.getElementById("means").style.color="blue";
    }
    if(BmiValue>30){
        document.getElementById("means").innerHTML="You are Obese";
        document.getElementById("means").style.color="red";
    }


}