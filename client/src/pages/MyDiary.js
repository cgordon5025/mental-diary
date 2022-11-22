import React from 'react'
import MyEntryList from '../components/myEntries';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_SINGLE_USER } from '../utils/queries';
import { Link, useParams } from 'react-router-dom'
import bgImg from "../Images/homebg.png"
const MyDiary = () => {
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
        button: {
            display: "flex",
            justifyContent: "center",

        }
    }
    return (
        <div style={styles.bg} >
            {
                loading ? (
                    <div>Loading...</div>
                ) : (
                    <MyEntryList
                        user={user}
                    />
                )
            }
            <div style={styles.button}>
                <Link className="btn btn-block btn-info" to='/newEntry' > New Entry</Link>
            </div>
        </div >)
}

export default MyDiary