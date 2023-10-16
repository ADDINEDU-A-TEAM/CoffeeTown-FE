import React, { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="footerContainer">
                    <div className="footerLeftArea">
                        <div className='footerBox'>
                            <div className='footerItems'>
                                <h2>개인정보처리방침</h2>
                            </div>
                            <div className='footerItems'>
                                <h2>이용약관</h2>
                            </div>
                        </div>
                        <div className='footerBox'>
                            <div className='footerItems'>
                                <h2>커피타운 이용안내</h2>
                            </div>
                            <div className='footerItems'>
                                <h2>소개</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;