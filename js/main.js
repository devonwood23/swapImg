 function change() {
   var img1 = "img/1.jpg",
       img2 = "img/2.jpg";
   var imgElement = document.getElementById('photo');
   

   if(imgElement.src === 'file:///Volumes/UserData/wood052/Desktop/root/' + img2) {
   		imgElement.src = img1;
   } else {
   		imgElement.src = img2;
   }
}


var swapBtn = document.getElementById('swapBtn');

swapBtn.addEventListener('click', function(){
	change();
});