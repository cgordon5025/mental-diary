import React from 'react'
import { Navigate, useParams } from 'react-router-dom';

import FamilyList from '../components/FamilyList';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth'
import bgImg from "../Images/homebg.png"
const Family = () => {
    const { userId } = useParams()
    const { loading, data } = useQuery(userId ? QUERY_SINGLE_USER : QUERY_ME,
        {
            variables: { userId: userId }
        });
    const user = data?.me || data?.user || []
    const styles = {
        bg: {
            padding: "5%",
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no repeat",
            backgroundPosition: "center"
        },
    }
    if (Auth.loggedIn() && Auth.getUser().data._id === userId) {
        return <Navigate to="/singlefamily/637aa29090d5a55044a1f082" />
    }
    return (
        <div style={styles.bg} >
            {
                loading ? (
                    <div>Loading...</div>
                ) : (
                    <FamilyList
                        user={user}
                    />
                )
            }
        </div >)
}

export default Family