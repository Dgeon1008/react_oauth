import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {

  const navigate = useNavigate()



  // 토큰이 있을 때에만 접근할 수 있는 페이지
  const {currentUser, isLogin } = useSelector((state) => state.user)
  // 헤더에 이름띄우는 방법!! 비구조할당하고 화면에서 가져오기
  const {
    memberEmail,
    memberPicture,
    memberName,
    memberNickName
  } = currentUser;
  console.log("mypage currentUser", currentUser)
  console.log("mypage isLogin", isLogin)

  // useEffect(() => {
  //   if(!isLogin) {
  //     navigate("/sign-in")
  //   }
  // },[])

  return (
    <div>
      <p>이메일 : {memberEmail}</p>
      <p>이름 : {memberName}</p>
      <p>닉네임 : {memberNickName}</p>
    </div>
  );
};

export default Mypage;