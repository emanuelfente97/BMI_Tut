function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value
// var gendr = document.bmiForm.Male.value
// var gendr = document.bmiForm.Female.value
if(weight > 0 && height > 0){	
var finalBmi = weight/(height/100*height/100)
document.bmiForm.bmi.value = finalBmi
if(finalBmi < 18){
document.bmiForm.meaning.value = "That you are underweight."
}
if(finalBmi >18 && finalBmi<=25){
	document.bmiForm.meaning.value = "That you are normal"
	}
if(finalBmi >25 && finalBmi <= 30){
document.bmiForm.meaning.value = "That you are overweight."
}
if(finalBmi >= 30){
document.bmiForm.meaning.value = "That you are obese."
}
}
else{
alert("Please Fill in everything correctly")
}
}

// if(weight > 0 && height > 0 && gendr=="Male" ){	
// 	var finalBmi = 0.5*(weight/(height/100*height/100 +11.5))
// 	document.bmiForm.bmi.value = finalBmi
// 	if(finalBmi < 18){
// 	document.bmiForm.meaning.value = "That you are underweight."
// 	}
// 	if(finalBmi >18 && finalBmi<=25){
// 		document.bmiForm.meaning.value = "That you are normal"
// 		}
// 	if(finalBmi >25 && finalBmi <= 30){
// 	document.bmiForm.meaning.value = "That you are overweight."
// 	}
// 	if(finalBmi >= 30){
// 	document.bmiForm.meaning.value = "That you are obese."
// 	}
// 	}
// 	else{
// 	alert("Please Fill in everything correctly")
// 	}
// 	}
