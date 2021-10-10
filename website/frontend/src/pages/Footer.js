import React from "react";
import "../css/footer.css";
import logo from "../assets/blaze.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <div fluid style={{ backgroundColor: "#161718" }}>
                <div className='container-fluid'>
                    <div className='container'>
                        <div className='roww'>
                            <div className='coll'>
                                <img src={logo} alt='' className='imgg' />
                            </div>
                            <div className='coll' >
                                <h2> Links:</h2>
                                <ul>
                                    <li>
                                        <Link target={"_blank"} to='/eyetest' style={{ color: "white" }}>
                                            Vision Test
                                        </Link>
                                    </li>
                                    <li>
                                        <a target={"_blank"} href='' style={{ color: "white" }}>
                                            Aural Test
                                        </a>
                                    </li>
                                    <li>
                                        <a target={"_blank"} href='' style={{ color: "white" }}>
                                            How To Use
                                        </a>
                                    </li>
                                    <li>
                                        <a target={"_blank"} href='' style={{ color: "white" }}>
                                            GetDocument
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
