import React from 'react'
import EntryList from '../components/entryList';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import { Link } from 'react-router-dom'
import bgImg from "../Images/homebg.png"
const Diary = () => {
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
        button: {
            justifyContent: "center",

        }
    }
    return (
        <div style={styles.bg} >
            {
                loading ? (
                    <div>Loading...</div>
                ) : (
                    <EntryList
                        users={users}
                    />
                )
            }
            <div style={styles.button}>
                <Link className="btn btn-block btn-info" to='/newEntry' > New Entry</Link>
            </div>
        </div >)
}

export default Diary