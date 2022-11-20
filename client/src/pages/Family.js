import React from 'react'
import UserList from '../components/UserList';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

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
                    <UserList
                        users={users}
                    />
                )
            }
        </div >)
}

export default Family