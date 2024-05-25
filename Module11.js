import React from 'react';
import { Fragment } from 'react';

function Module11() {
    return (
        <>
        
       
        <div className="header">
            <div className="upper">
                <div className="logo">
                    <h2>LOGO</h2>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Shop</a>
                </div>
                {/* <!-- logo div ends here --> */}
                <div className="details">
                    <img src="buy.svg" alt="" />
                    <span>
                        <i className="fa-solid fa-envelope" style={{ color: '#f5f5f5' }}></i>
                        info@ECommerce.com
                    </span>
                    <span>
                        <i className="fa-solid fa-phone" style={{ color: '#ffffff' }}></i>
                        90966546244
                    </span>
                </div>
                {/* <!-- details div ends here --> */}
            </div>
            {/* <!--  upper div ends here --> */}
            <div className="lowerHeader">
                <div className="shop">
                    <h3>Shop By Category</h3>
                </div>
                {/* <!--   shop div ends here --> */}
                <div className="search">
                    <div className="user">
                        <input type="text" id="userinput" placeholder="Type here" />
                        <div className="btn">
                            <button >search</button>
                        </div>
                    </div>
                </div>
                {/* <!--   search div ends here --> */}
                <div className="login">
                    <i className="fa-solid fa-user"></i>
                    login & SignUp
                    <i className="fa-solid fa-cart-shopping" ></i>
                </div>
                {/* <!--    login div ends here --> */}
            </div>
            {/* <!--    lower header div ends here --> */}

           
        </div>
        {/* // header ends */}


        <div className="banner">
            <img src="https://marketplace.canva.com/EAFloAOrGBY/1/0/1600w/canva-orange-and-black-minimalist-food-banner-landscape-hvZzaUttSLk.jpg" alt="banner" />
        </div>

        <h1>Featured Categories</h1>

        <div className="productList">
            <div className="box">
                <div className="prdimage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfTgqIv_S1XB01gR2Pv_f7uMy5tMpCc52Q3OAAY1T_g&s" alt="" /></div>

                <h3>Product Name</h3>
                <h4>Product Price</h4>
            </div>

            <div className="box">
                <div className="prdimage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfTgqIv_S1XB01gR2Pv_f7uMy5tMpCc52Q3OAAY1T_g&s" alt="" /></div>

                <h3>Product Name</h3>
                <h4>Product Price</h4>
            </div>

            <div className="box">
                <div className="prdimage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfTgqIv_S1XB01gR2Pv_f7uMy5tMpCc52Q3OAAY1T_g&s" alt="" /></div>

                <h3>Product Name</h3>
                <h4>Product Price</h4>
            </div>


            <div className="box">
                <div className="prdimage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfTgqIv_S1XB01gR2Pv_f7uMy5tMpCc52Q3OAAY1T_g&s" alt="" /></div>

                <h3>Product Name</h3>
                <h4>Product Price</h4>
            </div>

            <div className="box">
                <div className="prdimage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfTgqIv_S1XB01gR2Pv_f7uMy5tMpCc52Q3OAAY1T_g&s" alt="" /></div>

                <h3>Product Name</h3>
                <h4>Product Price</h4>
            </div>

            <div className="box">
                <div className="prdimage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfTgqIv_S1XB01gR2Pv_f7uMy5tMpCc52Q3OAAY1T_g&s" alt="" /></div>

                <h3>Product Name</h3>
                <h4>Product Price</h4>
            </div>

            <div className="box">
                <div className="prdimage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfTgqIv_S1XB01gR2Pv_f7uMy5tMpCc52Q3OAAY1T_g&s" alt="" /></div>

                <h3>Product Name</h3>
                <h4>Product Price</h4>
            </div>

            <div className="box">
                <div className="prdimage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfTgqIv_S1XB01gR2Pv_f7uMy5tMpCc52Q3OAAY1T_g&s" alt="" /></div>

                <h3>Product Name</h3>
                <h4>Product Price</h4>
            </div>
        </div>
        </>
    );
}

export default Module11;
