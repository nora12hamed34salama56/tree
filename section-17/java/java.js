var image=true;
var img = document.getElementById("img-id")
function handleImgChange(){

   if(image==true){
     img.src="NewFolder/image1.avif"
      console.log(img)
      image=false
   }
   else  {
 img.src="NewFolder/imaeg2.jpg"
 console.log(img)
image=true
   }

}
    var users = [];
    var form = document.getElementById("userForm");
    var result = document.getElementById("result");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
     var userObj = {
        name: name,
        email: email
      };
      users.push(userObj);
console.log(users);
      form.reset();
    });
    