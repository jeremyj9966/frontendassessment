console.log("hello world");

const catpic = document.querySelector('img')


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('you have successfully submitted this form');
}
function cat(){
	alert('you are nice');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
catpic.addEventListener('mouseover', cat);