import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className="header">
            <img src={Logo} alt="" className='logo' />
            {!menuOpened && mobile ? (
                <div style={{
                    backgroundColor: 'var(--appColor)',
                    padding: '0.5rem',
                    borderRadius: '5px',
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center"
                }}

                    onClick={() => setMenuOpened(true)}
                >
                    <img src={bars} style={{ width: '1.5rem', height: '1.5rem' }} alt="" />
                </div>
            ) :
                (
                    <ul className='header-menu'>
                        <li>
                            <Link
                                onClick={() => setMenuOpened(false)}
                                activeClass='active'
                                to='home'
                                spy={true}
                                smooth={true}
                            >Home</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setMenuOpened(false)}
                                to='programs'
                                spy={true}
                                smooth={true}
                            >
                                Programs
                            </Link>
                        </li>
                        <li onClick={() => setMenuOpened(false)}>
                            <Link
                                to='reasons'
                                spy={true}
                                smooth={true}
                                onClick={() => setMenuOpened(false)}
                            >
                                Why us
                            </Link>
                        </li>
                        <li><Link
                            onClick={() => setMenuOpened(false)}
                            to='plans'
                            spy={true}
                            smooth={true}
                        >Plans</Link></li>
                        <li >
                            <Link
                                onClick={() => setMenuOpened(false)}
                                to='testimonials'
                                spy={true}
                                smooth={true}
                            >Testimonials</Link>
                        </li>
                    </ul>
                )}



        </div>
    )
}

export default Header