import React from 'react'

const myEntryList = ({ users, email }) => {
    if (!users.length) {
        return <h3> No Profiles Yet</h3>
    }
    const styles = {
        card: {
            width: "18rem",
            height: "fit-content"
        },
        famContainer: {
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap"
        }
    }

    return (
        <div>
            <h3 className="text-primary">{email}</h3>
            <div className="flex-row justify-space-between my-4">
                {users &&
                    users.map((user) => (
                        <div key={user._id} >
                            <h2 className="text-center"> {user.username}'s Diary</h2>
                            <div style={styles.famContainer}>
                                {user.diaryEntry.map((singleEntry) => {
                                    return (
                                        <>
                                            <div key={singleEntry.diaryEntryId} style={styles.card} className='card'>

                                                <div className='card-header'>
                                                    <h3>{singleEntry.createdAt}</h3>
                                                </div>
                                                < div className='card-body'>
                                                    <h3>{singleEntry.title}</h3>
                                                    {singleEntry.description ? (
                                                        <li>{singleEntry.description}</li>
                                                    )
                                                        : (
                                                            <></>)}
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                                )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default myEntryList