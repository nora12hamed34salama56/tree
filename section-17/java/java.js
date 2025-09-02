var image=true;
var img = document.getElementById("img-id")
function handleImgChange(){

   if(image==true){
     img.src="NewFolder/imaeg2.jpg"
      console.log(img)
      image=false
   }
   else  {
 img.src="NewFolder/image1.avif"
 console.log(img)
image=true
   }

}
    let users = [];
    const form = document.getElementById("userForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const userObj = {
        name: name,
        email: email
      };
      users.push(userObj);
console.log(users);
      form.reset();
    });
    