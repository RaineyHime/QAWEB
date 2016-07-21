
function validate() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        if (name == null || name == "") {
            alert("Please enter the your name.");
            return false;
        }
        if (name == null || email == "") {
            alert("Please enter your email.");
            return false;
        }
        alert('Login successful');

    } 

  <input type="text" name="name" id="name" />
  <input type="password" name="email" id="email" />
  <input type="button" value="Login" id="submit" onclick="validate();" />