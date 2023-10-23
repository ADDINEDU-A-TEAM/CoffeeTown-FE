import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import logoImg from '../assets/images/logo_gnb_img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const ToggleHeader = styled.div`
  @media screen and (max-width: 968px) {
    .menuList {
      display: ${(props) => (props.$isToggled ? 'flex' : 'none')};
    }
    .rMenuList {
      display: ${(props) => (props.$userToggled ? 'flex' : 'none')};
    }
  }
`;

const Header = ({ user, setUser }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  const navigate = useNavigate();

  const getToken = window.sessionStorage.getItem('token');

  const handleLogOut = () => {
    sessionStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  console.log('user', user);

  return (
    <Fragment>
      <div className='headerContainer d-flex justify-content-center'>
        <ToggleHeader
          className='header d-flex justify-content-between'
          $isToggled={isToggled}
          $userToggled={userToggled}
        >
          {/* 햄버거 버튼(bar) */}
          <div
            className={!isToggled ? 'toggle' : 'toggle clicked'}
            onClick={() => {
              setIsToggled(!isToggled);
            }}
          >
            <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
          </div>

          <Link to='/main'>
            <div className='logo'>
              <img src={logoImg} alt='LogoImage' />
            </div>
          </Link>

          {/* 반응형 유저리스트 */}
          <div
            className={!userToggled ? 'user' : 'user clicked'}
            onClick={() => {
              setUserToggled(!userToggled);
            }}
          >
            <FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />
          </div>

          <ul className='menuList'>
            <li>COFFEE</li>
            <li>DESSERT</li>
            <li>DRINK</li>
            <li>OTHERS</li>
          </ul>
          {getToken ? (
            <div className='LMenuList'>
              <div className='mainUser'>{user.nickname}님 방갑습니다</div>
              <ul>
                <li className='d-flex' onClick={handleLogOut}>
                  로그아웃
                </li>
                <Link to='/Cart'>
                  <li className='d-flex '>장바구니</li>
                </Link>
              </ul>
            </div>
          ) : (
            <ul className='rMenuList'>
              <Link to='/Signup'>
                {' '}
                <li className='greenTxt d-flex'>회원가입</li>
              </Link>
              <Link to='/'>
                <li className='d-flex'>로그인</li>
              </Link>
              <Link to='/Cart'>
                <li className='d-flex '>장바구니</li>
              </Link>
            </ul>
          )}
        </ToggleHeader>
      </div>
    </Fragment>
  );
};

export default Header;
