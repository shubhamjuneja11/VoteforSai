setInterval(loadme,900000);
function loadme(){
	location.reload();
}
window.onload=vote();
function vote(){
console.log('voting');
var but=document.querySelector('#vote_btn');
but.click();
}
