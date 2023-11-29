import React from 'react'
import "./Footer.scss"
import Paragraph from './Paragraph'
import { FaApple } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import ColumnCall from './ColumnCall';
import ApicallCol from './ApicallCol';



const Footer = () => {
    return (
        <>

            <div id="main-footer">

                <h2>Quick Links</h2>

                <div id="btnSection">
                    <button>Order Status</button>
                    <button>Shopping Help</button>
                    <button>Your Saves</button>

                </div>

                <div id="lower-footer">
                    <Paragraph />
                    <div id="apple-store">
                        <FaApple />
                        <FaAngleRight />
                        <h3>Apple Store Online</h3>
                    </div>

                    <div id="link-section">
                        <div><ColumnCall call_arr={ApicallCol[0]}/> <ColumnCall call_arr={ApicallCol[1]}/> </div>

                        <div><ColumnCall call_arr={ApicallCol[2]}/><ColumnCall call_arr={ApicallCol[3]}/></div>

                        <div><ColumnCall call_arr={ApicallCol[4]}/></div>

                        <div><ColumnCall call_arr={ApicallCol[5]}/> <ColumnCall call_arr={ApicallCol[6]}/> <ColumnCall call_arr={ApicallCol[7]}/></div>

                        <div><ColumnCall call_arr={ApicallCol[8]}/> <ColumnCall call_arr={ApicallCol[9]}/></div>


                    </div>

                    {/* Check According to Resizing Media Query */}
                    <div id="last-elem">
                        <div><h2>More ways to shop: <span>Find an Apple Store</span> or <span>
                        other retailer</span> near you. Or call 000800 040 1966.</h2></div>
                        <div>
                            <h2>Copyright © 2023 Apple Inc. All rights reserved.</h2>
                            <div id='policies'>
                                <h2>Privacy Policy</h2>
                                <h2>Terms of Use</h2>
                                <h2>Sales Policy</h2>
                                <h2>Legal</h2>
                                <h2>Site Map</h2>
                            </div>
                            <h2 id='country'>India</h2>
                        </div>
                    </div>

                </div>





            </div>



        </>
    )
}

export default Footer