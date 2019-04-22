// open and set up the modal
let subjectClient = "";
$('#service_Modeling').on('click', function(event){
	$('#myModal').modal('show');
 	document.getElementById("contact-title").innerHTML = 'Contact Midas 3DStudio - Modeling';
 	subjectClient = 'Contact Midas 3DStudio - Modeling';
 	document.getElementById("contact-warning").classList.add("no-show");
});
$('#service_Modeling').on('touchstart', function(event){
	$('#myModal').modal('show');
 	document.getElementById("contact-title").innerHTML = 'Contact Midas 3DStudio - Modeling';
 	subjectClient = 'Contact Midas 3DStudio - Modeling';
 	document.getElementById("contact-warning").classList.add("no-show");
});


$('#service_Texturing').on('click', function(event){
 	$('#myModal').modal('show');
 	document.getElementById("contact-title").innerHTML = 'Contact Midas 3D Studio - Texturing';
 	subjectClient = 'Contact Midas 3D Studio - Texturing';
 	document.getElementById("contact-warning").classList.add("no-show");
});
$('#service_Texturing').on('touchstart', function(event){
 	$('#myModal').modal('show');
 	document.getElementById("contact-title").innerHTML = 'Contact Midas 3D Studio - Texturing';
 	subjectClient = 'Contact Midas 3D Studio - Texturing';
 	document.getElementById("contact-warning").classList.add("no-show");
});


$('#service_Render').on('click', function(event){
 	$('#myModal').modal('show');
 	document.getElementById("contact-title").innerHTML = 'Contact Midas 3D Studio - Render';
 	subjectClient = 'Contact Midas 3D Studio - Render';
 	document.getElementById("contact-warning").classList.add("no-show");
});
$('#service_Render').on('touchstart', function(event){
 	$('#myModal').modal('show');
 	document.getElementById("contact-title").innerHTML = 'Contact Midas 3D Studio - Render';
 	subjectClient = 'Contact Midas 3D Studio - Render';
 	document.getElementById("contact-warning").classList.add("no-show");
});




$('#service_Final_Art').on('click', function(event){
 	$('#myModal').modal('show');
 	document.getElementById("contact-title").innerHTML = 'Contact Midas 3D Studio - Final Art';
 	subjectClient = 'Contact Midas 3D Studio - Final Art';
 	document.getElementById("contact-warning").classList.add("no-show");
});
$('#service_Final_Art').on('touchstart', function(event){
 	$('#myModal').modal('show');
 	document.getElementById("contact-title").innerHTML = 'Contact Midas 3D Studio - Final Art';
 	subjectClient = 'Contact Midas 3D Studio - Final Art';
 	document.getElementById("contact-warning").classList.add("no-show");
});




$('#service_Photograph').on('click', function(event){
 	$('#myModal').modal('show');
 	document.getElementById("contact-title").innerHTML = 'Contact Midas 3D Studio - Photograph';
 	subjectClient = 'Contact Midas 3D Studio - Photograph';
 	document.getElementById("contact-warning").classList.add("no-show");
});
$('#service_Photograph').on('touchstart', function(event){
 	$('#myModal').modal('show');
 	document.getElementById("contact-title").innerHTML = 'Contact Midas 3D Studio - Photograph';
 	subjectClient = 'Contact Midas 3D Studio - Photograph';
 	document.getElementById("contact-warning").classList.add("no-show");
});





$('#contact-button').on('click', function(event){
	event.preventDefault();
	$('#myModal').modal('show');
	document.getElementById("contact-title").innerHTML = 'Contact Midas 3D Studio';
	subjectClient = 'Contact Midas 3D Studio';
	document.getElementById("contact-warning").classList.add("no-show");
});
$('#contact-button').on('touchstart', function(event){
	event.preventDefault();
	$('#myModal').modal('show');
	document.getElementById("contact-title").innerHTML = 'Contact Midas 3D Studio';
	subjectClient = 'Contact Midas 3D Studio';
	document.getElementById("contact-warning").classList.add("no-show");
});
// END of open and set up the modal


$('#submit-button').on('click', function(){
 
	sendMessage();

	return;
  
});
$('#submit-button').on('touchstart', function(){
 
	sendMessage();

	return;
  
});
function sendMessage(){

	let name = document.getElementById("contact-name").value;
  if (name === ""){
    document.getElementById("contact-warning").classList.add("show");
    document.getElementById("contact-warning").innerHTML = 'Name must be filled out';
    document.getElementById("contact-name").focus();
    return(false);
  }else{
    document.getElementById("contact-warning").classList.remove("show");
  }


  let emailClient = document.getElementById("contact-email").value;
  if (emailClient === ""){
    document.getElementById("contact-warning").classList.add("show");
    document.getElementById("contact-warning").innerHTML = 'Email must be filled out';
    document.getElementById("contact-email").focus();
    return(false);
  }else{
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if (!filter.test(emailClient)){
      document.getElementById("contact-warning").classList.add("show");
      document.getElementById("contact-warning").innerHTML = 'Email - Invalid format';
      document.getElementById("contact-email").focus();
      return(false);

    }else{
      document.getElementById("contact-warning").classList.remove("show");
    }
  }

  let text = document.getElementById("contact-text").value;
  if (text === ""){
    document.getElementById("contact-warning").classList.add("show");
    document.getElementById("contact-warning").innerHTML = 'Message must be filled out';
    document.getElementById("contact-text").focus();
    return(false);
  }else{
    document.getElementById("contact-warning").classList.remove("show");
  }
  
  let email = {
    to: 'contact@midas3dstudio.com',
    cc: 'contact@midas3dstudio.com',
    cco: 'contact@midas3dstudio.com',
    from: emailClient, 
    subject: subjectClient,
    text: "Name:"+"\n"+name+"\n\n"+"Message:"+"\n"+text
  };


  // console.log(email);
 sendOwnEmail(email);
 alert("Message Submitted. Thank for reaching out Midas 3DStudio.");
 document.getElementById('myModal').reset();

// falta mandar aviso de email enviado.
// resetar o formulario

 return;
}

function sendOwnEmail(content){

  fetch('https://agile-waters-60666.herokuapp.com/mail', {
    method: "POST",
    body: JSON.stringify(content),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {
          // console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}




