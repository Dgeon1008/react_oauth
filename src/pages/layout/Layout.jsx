import React, { useEffect } from 'react';
import { Outlet, replace, useNavigate, useSearchParams } from 'react-router-dom';

const Layout = () => {
  // 리덕스에 유저를 추가하는 코드
  // 토큰 정보를 확인하는 코드

  // 1) 그냥 메인으로 바로 접속한 멤버
  // 2) 로그인 이후 토큰을 들고온 멤버
  // 3) 토큰을 로컬스토리지에 이미 가지고 있는 멤버

  // 쿼리스트링에서 토큰 분리
  const [searchParams] = useSearchParams()
  const jwtToken = searchParams.get("jwtToken")
  const localJwtToken = localStorage.getItem("jwtToken")

  const navigate = useNavigate();

  useEffect(() => {
    // 만약 쿼리스트링에 토큰이 있다면, 로컬스토리지에 저장
    if(jwtToken) {
      localStorage.setItem("jwtToken", jwtToken)
      // replace : true = uri에안보이게함 
      navigate("/", {replace : true})
    }

    // 토큰이 있다면 해당 토큰으로 사용자의 정보를 요청
    if(localJwtToken){
      const getUserDatas = async () => {
        const response = await fetch("http://localhost:10000/member/profile", {
          method : "POST",
          headers : {
            // Bearer 이게 붙어있으면 
            "Authorization" : `Bearer ${localJwtToken}`
          }
        })

        // 토큰으로 데이터를 못가져오면
        if(!response.ok) {
          
        }

        // 정상 응답
        // const datas = await response.json()
        // console.log(datas);

      }

      getUserDatas()
    }



  }, [localJwtToken])

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;