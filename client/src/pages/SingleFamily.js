import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import FamilyList from '../components/FamilyList';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth'
import bgImg from "../Images/homebg.png"
const SingleFamily = () => {
    const { userId } = useParams()
    const { loading, data } = useQuery(userId ? QUERY_SINGLE_USER : QUERY_ME,
        {
            variables: { userId: userId }
        });
    const user = data?.me || data?.user || []
    console.log(user)
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
        return <Navigate to="/singlefamily/" />
    }
    return (
        <div style={styles.bg} >
            {
                loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <h2> Hello</h2>
                        <FamilyList
                            user={user}
                        />
                        <div>
                            <Link className="btn btn-block btn-info" to='/newGrandparent'>Add a Grandparent</Link>
                            <Link className="btn btn-block btn-info" to='/newParent'>Add a Parent</Link>
                            <Link className="btn btn-block btn-info" to='/newSibling'>Add a Sibling</Link>

                        </div>
                    </>
                )
            }
        </div >)
}

export default SingleFamily