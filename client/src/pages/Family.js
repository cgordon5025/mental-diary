import React from 'react'
import UserList from '../components/UserList';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import { Link } from 'react-router-dom';

import bgImg from "../Images/homebg.png"
const Family = () => {
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || []
    const styles = {
        bg: {
            padding: "5%",
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no repeat",
            backgroundPosition: "center"
        },
    }
    return (
        <div style={styles.bg} >
            {
                loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <UserList
                            users={users}
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

export default Family