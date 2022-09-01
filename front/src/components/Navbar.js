import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

function Navbar() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return (
        <div className="navbar">
            <a className="active" href="/">Home</a>
            <a href="/homebrews">Homebrews</a>
            <a href="/contact">Contact</a>
            <a href="#about">About</a>
            <div className="topnav-right">
                {isLoggedIn
                    ?
                    (<>
                        <button onClick={logOutUser}>Logout</button>
                    </>) 
                    :
                    (<>
                        <a href="/signup">Signup </a>

                        <a href="/login">Login </a>
                    </>)
                }
                <img className="company-logo" src="https://img.icons8.com/dusk/2x/league-of-legends.png" height="30px" alt="LOL"  />
                <div className="company">
                    <p>LOLGeeks</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar