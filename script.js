function firstfocus() {
	//this function is setting the focus on the userId field. Cursor will be where you need it to be.
	
	//This is your variable to select the html element
	var userName = document.getElementsByName("userid")[0];
	
	//The variable has the focus method added
	userName.focus();

	//console will display the string = "userName is working" and the variable
	console.log("userName is working" + userName);
}


function userid_validation(int, int2){
	//
	document.getElementsByName("passid")[0].focus();
	//var inputValue = Number(document.getElementById('myId').value);
}


function passid() {

	//refer to the steps in firstfocus()


	var userPassId = document.getElementsByName("passid")[0];


	userPassid.focus();


	console.log("userPassid is working" + userPassId);

} 


function passid_validation() {


}


function email() {
 var useremail = document.getElementsByName('email')[0].value;

}


  function ValidateEmail() {
 
}








