let users = [];
    let  form = document.getElementById("userForm");
    let cards = document.getElementById('cards-container')
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        let name = document.getElementById("name").value;
         let  email = document.getElementById("email").value;
         let  balance =document.getElementById("balance").value;
        var userObj = {
            name: name,
            email: email,
            balance:balance,
        };
        users.push(userObj);
        
        users.forEach((item , i )=>{
          let div =document.createElement("div");
          let h2 =document.createElement("h2")
          let h3 =document .createElement("h2")
          let h =document .createElement("h2")
          div.classList.add("card")
h2.innerText=item.name
h3.innerText=item.email
h.innerText=item.balance
         cards.append(h2)
         cards.append(h3)
         cards.append(h)
          console.log(div);

      })
       form.reset();
    });
