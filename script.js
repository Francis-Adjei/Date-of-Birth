function ageCalculator() {
	var data = document.getElementById("birthdate").value;
	var date_of_birth = new Date(data);


	if(data == null || data == "") {
		document.getElementById("error").innerHTML = "<p style='padding-top:0.4em;'>Please enter your date of birth!</p>";
		return false;
	} else {
		var month_diff = Date.now() - date_of_birth.getTime();
		 
		var age_dt = new Date(month_diff);
		  
		var year = age_dt.getUTCFullYear();
		  
		var age = Math.abs(year - 1970);
		  
		return document.getElementById("age").innerHTML = "You are: " + age + " years. ";  
	}
}