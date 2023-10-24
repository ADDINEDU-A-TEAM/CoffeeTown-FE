import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main';
import Cart from './pages/Cart';

import { Reset } from 'styled-reset';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const App = ({ field }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [user, setUser] = useState(location.state ? location.state?.user : '');
  const [query, setQuery] = useSearchParams();
  const [search, setSearch] = useState(query.get(field) || '');
  const [searchQuery, setSearchQuery] = useState({
    item: query.get('item') || '',
  });

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    //검색어나 패이지가 바뀌면 url 바꿔주기
    if (searchQuery.item == '') {
      delete searchQuery.item;
    }

    const params = new URLSearchParams(searchQuery);
    const query = params.toString();

    navigate(`?${query}`);
  }, [searchQuery]);

  //get Data
  useEffect(() => {
    fetchData();
  }, [query]);

  const onCheckEnter = (e) => {
    if (e.key === 'Enter') {
      setSearchQuery({ ...searchQuery, [field]: search });
    }
  };

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.product_id === product.product_id
    );

    if (existingProductIndex !== -1) {
      // 이미 장바구니에 있는 상품의 수량 증가
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex] = {
        ...updatedCartItems[existingProductIndex],
        quantity: updatedCartItems[existingProductIndex].quantity + 1,
      };
      setCartItems(updatedCartItems);
    } else {
      // 장바구니에 없는 상품인 경우 수량 1로 추가
      product.quantity = 1;
      setCartItems([...cartItems, product]);
    }
  };

  const fetchData = async () => {
    await axios
      .get('http://localhost:8000/main/list', {
        params: { ...searchQuery },
      })
      .then((result) => setData(result.data));
  };

  return (
    <Fragment>
      <div id='wrap' className='d-flex'>
        <Reset />
        <Header
          user={user}
          setUser={setUser}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
        <Routes>
          <Route
            path={'/'}
            element={<Login user={user} setUser={setUser} />}
          ></Route>
          <Route path={'/Signup'} element={<Signup />}></Route>
          <Route
            path={'/Main'}
            element={
              <Main
                setData={setData}
                data={data}
                addToCart={addToCart}
                onCheckEnter={onCheckEnter}
                setSearch={setSearch}
              />
            }
          ></Route>
          <Route
            path={'/Cart'}
            element={
              <Cart
                setData={setData}
                data={data}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
