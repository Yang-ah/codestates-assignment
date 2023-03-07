import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";
import { saveTokens } from "../../../utils/jwt";

const Social = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const result = qs.parse(location.search);

    //MEMO: 성공
    if (result.status === "200") {
      //TODO: 토큰 저장
      saveTokens(result);
      //TODO: 메인페이지로 이동
      navigate("/");
    }
    //MEMO: 실패
    else {
      navigate(`/auth/register?token=${result.kakaoAccessToken}`);
    }
  }, [location]);
  return <div></div>;
};

export default Social;
