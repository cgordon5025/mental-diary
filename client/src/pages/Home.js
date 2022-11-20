import React from 'react';

import bgImg from "../Images/homebg.png"
import { Link } from 'react-router-dom'
const Home = () => {

    const styles = {
        bg: {
            padding: "20%",
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no repeat",
            backgroundPosition: "center"
        },
        theBody: {
            display: "flex",
            justifyContent: "center"
        },
        link: {
            padding: "2%",
            textDecoration: "none"
        }
    }
    return (
        <main style={styles.bg}>
            <div style={styles.theBody} >
                <div className='text-center'>
                    <h1> Welcome</h1>
                    <h3> Thank you for visiting the page and taking the time to check in with yourself</h3>
                    <Link style={styles.link} to="/login"> Let's get started</Link>
                </div>
            </div>
        </main>
    )
}

export default Home