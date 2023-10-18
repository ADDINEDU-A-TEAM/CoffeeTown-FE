import React, { Fragment } from 'react';
import styled from "styled-components";
import { useState } from 'react';
import logoImg from '../assets/images/logo_gnb_img.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";

const ToggleHeader = styled.div`
@media screen and (max-width: 968px) {
    .menuList {
        display: ${(props) => (props.$isToggled ? "flex" : "none")};
    }
    .rMenuList {
        display: ${(props) => (props.$userToggled ? "flex" : "none")};
    }
}
`

const Header = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [userToggled, setUserToggled] = useState(false);

    return (
        <Fragment>
            <div className="headerContainer d-flex justify-content-center">
                <ToggleHeader className="header d-flex justify-content-between" $isToggled={isToggled} $userToggled={userToggled}>
                    {/* 햄버거 버튼(bar) */}
                    <div className={!isToggled ? 'toggle' : 'toggle clicked'} onClick={() => { setIsToggled(!isToggled); }}>
                        <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
                    </div>

                    <div className="logo">
                        <img src={logoImg} alt="LogoImage" />
                    </div>

                    {/* 반응형 유저리스트 */}
                    <div className={!userToggled ? 'user' : 'user clicked'} onClick={() => { setUserToggled(!userToggled); }}>
                        <FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />
                    </div>

                    <ul className="menuList">
                        <li>COFFEE</li>
                        <li>DESSERT</li>
                        <li>DRINK</li>
                        <li>OTHERS</li>
                    </ul>
                    <ul className="rMenuList">
                        <li className="greenTxt d-flex">회원가입</li>
                        <li className="d-flex">로그인</li>
                        <li className="d-flex">장바구니</li>
                    </ul>
                </ToggleHeader>
            </div>
        </Fragment>
    )
}

export default Header;