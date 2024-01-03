var user =
[
{
    username:"",password:"",age:"",gender:"",phone_number:""
}
];
function signup() {
var username = document.getElementById("signuser").value;
var password = document.getElementById("signpass").value;
var age = document.getElementById("signage").value;
var gender = document.getElementById("signgender").value;
var phone_number = document.getElementById("signphone").value;
function strongpass(password)
{
var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,8}$/;
return regex.test(password)
}
if (age >= 18 && age <= 60 && strongpass(password) && phone_number.length===11) 
{
user.push({ username: username, password: password, age:age, gender:gender, phone_number:phone_number}); 
alert("welcome to <"+ username+">");
window.location.href=("#login");
return true; 
} else {
alert("invalid!");
return false;
}
}

function login() {
var username = document.getElementById("loguser");
var password = document.getElementById("logpass");
for (var i = 0; i < user.length; i++)
{
if (user[i].username === user.username && user[i].password === user.password)
{
window.alert("hello"+ username);
window.location.href=("review.html");
return true;
}
}
window.alert("try again!");
return false;
}

function update()
{
var username= document.getElementById("username");
var password=document.getElementById("new password");
for(var i=0;i<user.length;i++)
{
if(user[i].username===user.username)
{
user[i].password=password;
alert("Successfully")
return true;
}
else
{
    alert("invalid!")
    return false;
}
}
}