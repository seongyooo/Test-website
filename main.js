let user;
let passWord="TheMaster";
let check=0;

user = prompt("User name", '');


if(user === Admin){
  check = passWord === prompt("비밀번호 입력", '');
  
  if(check)
    alert("환영합니다!");
  else if(!check)
    alert("인증에 실려하다습니다");
}
else
  alert("취소되었습니다");


  
  