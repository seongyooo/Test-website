let user;
let passWord="TheMaster";

user = prompt("User name", '');

if(!user)
  alert("취소되었습니다");
else if(user !== passWord)
  alert("인증에 실패하였습니다");
else
  alert("환영합니다!");
  
  