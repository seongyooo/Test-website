let user;
let passWord="TheMaster";
let check=0;

user = prompt("User name", '');


if(user === "Admin"){
  check = prompt("비밀번호 입력", '');
  
  if(check === passWord)
    alert("환영합니다!");
  else if(check !== passWord)
    alert("인증에 실패하였습니다");
}
else
  alert("취소되었습니다");


  
  