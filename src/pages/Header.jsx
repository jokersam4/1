import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from "react-icons/fa";
import { useMediaQuery } from "@react-hook/media-query";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import logo from '../images/logo2.png'
function Header() {

    const navRef = useRef();
    const [showLogoutButton, setShowLogoutButton] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isMenu, setisMenu] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const isSmallScreen = useMediaQuery('(max-width: 1024px)');

    const animationVariants = {
        smallScreen: { opacity: 1, y: -90, x: '20%' },
        largeScreen: { opacity: 1, y: 0 },
    };

    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            localStorage.setItem('token', result.user.accessToken);
            localStorage.setItem('user', JSON.stringify(result.user));
            setUser(result.user);
            navigate("/");
        }
        catch (error) {
            console.error(error);
        }
    }

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setUser(null);
        }
        catch (error) {
            console.error(error);
        }
    }

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    const logUserData = () => {
        console.log("User photoURL:", user.photoURL);
        console.log(user);
    };


    return (
        <header className="gap">
            <NavLink to={"/"}>
                <img src={logo} alt='Logo' style={{ width: '120px' }} />
            </NavLink>
            <nav ref={navRef}>
                <a href="/#">Home</a>

                <a href="/#">About Us</a>

                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
                <>
                    {user ? (
                        <>
                            <div
                                className="def"

                                onMouseEnter={() => setisMenu(true)}
                                onMouseLeave={() => setisMenu(false)}
                            >
                                {user && <img className="userpdp" src={user.photoURL} alt="profile" onClick={logUserData} />}
                                {isMenu && (

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, y: 10, x: 30 }}
                                        exit={{ opacity: 0, y: 50 }}
                                        onClick={() => setShowLogoutButton(!showLogoutButton)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="motiondiva"

                                    >


                                        <p className="gg">{user.email}</p>
                                        {/* <hr />  */}
                                        <button className="sign-out-button" onClick={handleLogout}>Logout</button>

                                    </motion.div>

                                )}
                            </div>
                        </>
                    ) : (
                        <button className="sign-in-button" onClick={handleSignInWithGoogle}>Signin</button>
                    )}
                </>

            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Header;
