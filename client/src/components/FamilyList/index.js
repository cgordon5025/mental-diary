import React from 'react'
import SingleFamily from '../../pages/SingleFamily'
const FamilyList = ({ user }) => {
    if (!user) {
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
            <div className="flex-row justify-space-between my-4">
                {user &&
                    user.map((me) => (
                        <div key={me._id} >
                            <h2 className="text-center"> {me.username}</h2>
                            <button>Add Grandparent</button>

                            <div style={styles.famContainer}>

                                {me.grandparents.length > 0 ? (
                                    <div style={styles.card} className="card mb-3">
                                        <h4 className="card-header p-2 m-0">
                                            Grandparents
                                        </h4>
                                        <div className='card-body'>
                                            {me.grandparents.map((gp) => {
                                                return (
                                                    <>
                                                        <p>{gp.relation}</p>
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
                                {me.parents.length > 0 ? (
                                    <div style={styles.card} className="card mb-3">
                                        <h4 className="card-header p-2 m-0">
                                            Parents
                                        </h4>
                                        <div className='card-body'>

                                            {me.parents.map((parent) => {
                                                return (
                                                    <>
                                                        <p>{parent.relation}</p>
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
                                {me.siblings.length > 0 ? (
                                    <div style={styles.card} className="card mb-3">
                                        <h4 className="card-header p-2 m-0">
                                            Siblings
                                        </h4>
                                        <div className='card-body'>
                                            {me.siblings.map((sibling) => {
                                                return (
                                                    <>
                                                        <p>{sibling.name} {sibling.relation}</p>
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

export default FamilyList