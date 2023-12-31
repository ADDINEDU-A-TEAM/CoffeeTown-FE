import React, { useState } from 'react';
import './AgreeUse.scss';

const dataList = [
    { id: 1, name: 'chk1', text: '연령(만 14세 이상) 확인(필수)', isChk: false },
    { id: 2, name: 'chk2', text: '커피타운 이용약관(필수)', isChk: false },
    { id: 3, name: 'chk3', text: '개인정보 수집에 동의(필수)', isChk: false },
    { id: 4, name: 'chk4', text: '개인정보 이용에 동의(필수)', isChk: false },
]

const AgreeUse = () => {
    const [data, setData] = useState(dataList)
    const changeInput = (e) => {
        const { name, checked } = e.target
        if (name === 'all') {
            setData(data.map(item => {
                return {
                    ...item,
                    isChk: checked
                }
            }))
        } else {
            setData(data.map(item => item.name === name ? { ...item, isChk: checked } : item))
        }
    }

    return (
        <div className="agreeWrap mb-4">
            <p>
                <input type="checkbox" name="all" onChange={changeInput}
                    checked={
                        data.filter(item => item.isChk !== true).length < 1
                    } />
                <label>약관 모두 동의</label>
            </p>
            <hr />
            {
                data.map(item =>
                    <p key={item.id} className="mt-2">
                        <input type="checkbox" name={item.name} checked={item.isChk} onChange={changeInput} className="agreeCheck" />
                        <label>{item.text}</label>
                    </p>)
            }
        </div>
    );
};

export default AgreeUse;