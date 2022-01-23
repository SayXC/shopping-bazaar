import React, { Component } from 'react'
import "../Styles/css/styling.css";

import mfasion1 from '../img/Mens fashion/mfasion1.png'
import mfasion2 from '../img/Mens fashion/mfashion2.png'
import shirt from '../img/shirt.png'


export default class Products extends Component {
    render() {
        return (
            <div>
                <section className="products" id="products">

                    <h1 className="heading"> Men's <span> Fashion</span> </h1>
                    <div className="box-container">
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src={mfasion1} alt="" />
                            <div className="content">
                                <h3>DCROOZ full sleeves sweatshirt</h3>
                                <div className="price">Rs. 1850.00 <span>Rs. 2000.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src={mfasion2} alt="" />
                            <div className="content">
                                <h3>Slim Bomber Jacket Male</h3>
                                <div className="price"><p>Rs. 2000.00</p> <span>Rs. 2250.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src={shirt} alt="" />
                            <div className="content">
                                <h3>Mens travel warm summer </h3>
                                <div className="price">Rs.750.00 <span>Rs.900.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/Mens fashion/trouser1.png" alt="" />
                            <div className="content">
                                <h3>Men maroon formal trouser</h3>
                                <div className="price">Rs. 1035.00<span>Rs. 1500.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/Mens fashion/track1.png" alt="" />
                            <div className="content">
                                <h3>Adidas Cotton Tracks</h3>
                                <div className="price">Rs.1500.00 <span>Rs.2000.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/Mens fashion/tshirts.png" alt="" />
                            <div className="content">
                                <h3>Cool Mens Tshirts</h3>
                                <div className="price">Rs.500.00 <span>Rs.650.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="products" id="products">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className="heading"> Women's <span> Fashion</span> </h1>
                    <div className="box-container">
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/Womens fashion/w1.png" alt="" />
                            <div className="content">
                                <h3>Jevi print Unstitched dress</h3>
                                <div className="price">Rs. 650.00 <span>Rs. 1050.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/Womens fashion/w2.png" alt="" />
                            &lt;<div className="content">
                                <h3>Women's BanarsiSilk Gown</h3>
                                <div className="price">Rs. 800.00 <span>Rs. 1200.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/Womens fashion/w3.png" alt="" />
                            <div className="content">
                                <h3>Basic Edition Short Sleeves Tshirts </h3>
                                <div className="price">Rs.550.00 <span>Rs.700.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/Womens fashion/w4.png" alt="" />
                            <div className="content">
                                <h3>Ladies Kurti</h3>
                                <div className="price">Rs. 350.00<span>Rs. 600.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/Womens fashion/w5.png" alt="" />
                            <div className="content">
                                <h3>New Flex High Rise Legging</h3>
                                <div className="price">Rs. 650.00 <span>Rs. 800.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/Womens fashion/w6.png" alt="" />
                            <div className="content">
                                <h3>women short frock white</h3>
                                <div className="price">Rs.900.00 <span>Rs.1100.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="products" id="products">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className="heading"> Fashion <span> Footwears</span> </h1>
                    <div className="box-container">
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/footwears/f1.png" alt="" />
                            <div className="content">
                                <h3>Penilo Fashion Shoes</h3>
                                <div className="price">Rs.2299.00 <span>Rs.2700.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/footwears/f2.png" alt="" />
                            &lt;<div className="content">
                                <h3>MGZ Stylish Bellies</h3>
                                <div className="price">Rs. 579.00 <span>Rs. 700.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/footwears/f3.png" alt="" />
                            <div className="content">
                                <h3>3'-4' block heel sandels </h3>
                                <div className="price">Rs.750.00 <span>Rs.900.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/footwears/f4.png" alt="" />
                            <div className="content">
                                <h3>INF slider flipflop Men</h3>
                                <div className="price">Rs. 499.00<span>Rs. 600.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/women boots.png" alt="" />
                            <div className="content">
                                <h3>Women's short Boots</h3>
                                <div className="price">Rs.1990.00 <span>Rs.2500.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/footwears/f6.png" alt="" />
                            <div className="content">
                                <h3>Puma Men Grey/Blue Aripon</h3>
                                <div className="price">Rs.2900.00 <span>Rs.3200.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="products" id="products">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className="heading"> Mobiles &amp; <span> Electronics</span> </h1>
                    <div className="box-container">
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/watch1.png" alt="" />
                            <div className="content">
                                <h3>Apple Watch Series 3</h3>
                                <div className="price">Rs.5999.00 <span>Rs.8000.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/mobiles and electronics/e1.png" alt="" />
                            &lt;<div className="content">
                                <h3>One Plus 9 Pro</h3>
                                <div className="price">Rs. 55999.00 <span>Rs. 59999.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/mobiles and electronics/e3.png" alt="" />
                            <div className="content">
                                <h3>Lenovo Ideapad intel core i5 </h3>
                                <div className="price">Rs. 32995.00 <span>Rs. 35200.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/mobiles and electronics/e4.png" alt="" />
                            <div className="content">
                                <h3>Sony WH1000XM4 Noice Cancelling Headphones</h3>
                                <div className="price">Rs. 2999.00<span>Rs. 3200.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/mobiles and electronics/e5.png" alt="" />
                            <div className="content">
                                <h3>Samsung Galaxy Tab A7 26.31cm 32GB Dark Grey</h3>
                                <div className="price">Rs. 18999.00 <span>Rs. 20999.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/mobiles and electronics/e6.png" alt="" />
                            <div className="content">
                                <h3>Airpods 2nd Generation</h3>
                                <div className="price">Rs. 15999.00 <span>Rs. 19900.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="products" id="products">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 className="heading"> Fruits &amp; <span> Vegetables</span> </h1>
                    <div className="box-container">
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/fruits & vegetables/v1.png" alt="" />
                            <div className="content">
                                <h3>fresh Oranges 1kg</h3>
                                <div className="price">Rs. 59.00 <span>Rs. 70.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/fruits & vegetables/v2.png" alt="" />
                            <div className="content">
                                <h3>Potatoes 1kg</h3>
                                <div className="price">Rs. 25.00 <span>Rs. 30.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/fruits & vegetables/v3.png" alt="" />
                            <div className="content">
                                <h3>Fresh Cabbage </h3>
                                <div className="price">Rs. 49.00 <span>Rs. 55.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/fruits & vegetables/v4.png" alt="" />
                            <div className="content">
                                <h3>Sweet Straberries per kg</h3>
                                <div className="price">Rs. 299.00<span>Rs. 350.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/fruits & vegetables/v5.png" alt="" />
                            <div className="content">
                                <h3>Green Peas 1kg</h3>
                                <div className="price">Rs. 36.00 <span>Rs. 42.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <a href="#" className="fas fa-heart" />
                            </div>
                            <img src="../img/fruits & vegetables/v6.png" alt="" />
                            <div className="content">
                                <h3>Fresho Apples 1kg</h3>
                                <div className="price">Rs. 269.00 <span>Rs. 350.00</span></div>
                                <div className="stars">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                </div>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
