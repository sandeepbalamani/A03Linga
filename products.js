function multiplyBy()  
{  
        num1 = document.getElementById("firstNumber").value;  
        num2 = document.getElementById("secondNumber").value;  
        document.getElementById("result").innerHTML =mul(num1,num2);  
} 
 function multiplication(a,b)
 {
    if(!isNaN(a) && !isNaN(b))
		return a*b;
	else
		throw Error("only numbers are allowed");
                
}
