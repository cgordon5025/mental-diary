import React from 'react'

const UserList = ({ users, email }) => {
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
                        <div data-key={user._id} >
                            <h2 className="text-center"> {user.username}</h2>
                            <div style={styles.famContainer}>

                                {user.grandparents.length > 0 ? (
                                    <div style={styles.card} className="card mb-3">
                                        <h4 className="card-header p-2 m-0">
                                            Grandparents
                                        </h4>
                                        <div className='card-body'>
                                            {user.grandparents.map((gp, index) => {
                                                return (
                                                    <>
                                                        <p key={gp.grandparentID
                                                        }>{gp.relation}</p>
                                                        {
                                                            gp.details ? (
                                                                <li>{gp.details}</li>
                                                            ) : (
                                                                <></>
                                                            )
                                                        }
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {user.parents.length > 0 ? (
                                    <div style={styles.card} className="card mb-3">
                                        <h4 className="card-header p-2 m-0">
                                            Parents
                                        </h4>
                                        <div className='card-body'>

                                            {user.parents.map((parent, index) => {
                                                return (
                                                    <>
                                                        <p key={parent.parentId}>{parent.relation}</p>
                                                        {parent.details ? (
                                                            <li>{parent.details}</li>
                                                        ) : (
                                                            <></>
                                                        )}

                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div>) : (
                                    <></>
                                )}
                                {user.siblings.length > 0 ? (
                                    <div style={styles.card} className="card mb-3">
                                        <h4 className="card-header p-2 m-0">
                                            Siblings
                                        </h4>
                                        <div className='card-body'>
                                            {user.siblings.map((sibling, index) => {
                                                return (
                                                    <>
                                                        <p key={sibling.siblingId}>{sibling.name} {sibling.relation}</p>
                                                        {sibling.details ? (
                                                            <li>{sibling.details}</li>
                                                        ) : (
                                                            <></>
                                                        )
                                                        }
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div >
        </div >
    )
}

export default UserList