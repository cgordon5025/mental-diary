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
                <p className='text-center'>{user.username}</p>
                <div style={styles.famContainer}>
                    {user.grandparents.length > 0 ? (
                        <div style={styles.card} className="card mb-3">
                            <h4 className='card-hearder p-2 m-0'>
                                Grandparents
                            </h4>
                            {user.grandparents.map((grandparent) => {
                                return (
                                    <div key={grandparent.grandparentID
                                    }>
                                        <p >{grandparent.relation}</p>
                                        {
                                            grandparent.details ? (
                                                <li> {grandparent.details}</li>
                                            ) : (<></>)
                                        }
                                    </div>
                                )
                            })}
                        </div>

                    ) : (<></>)
                    }
                    {user.parents.length > 0 ? (
                        <div style={styles.card} className="card mb-3">
                            <h4 className='card-hearder p-2 m-0'>
                                Parents
                            </h4>
                            {user.parents.map((parent) => {
                                return (
                                    <div key={parent.parentId}>
                                        <p>{parent.relation}</p>
                                        {parent.details ? (
                                            <li> {parent.details}</li>
                                        ) : (<></>)
                                        }
                                    </div>
                                )
                            })}
                        </div>

                    ) : (<></>)
                    }
                    {user.siblings.length > 0 ? (
                        <div style={styles.card} className="card mb-3">
                            <h4 className='card-hearder p-2 m-0'>
                                Siblings
                            </h4>
                            {user.siblings.map((sibling) => {
                                return (
                                    <div key={sibling.siblingId}>
                                        <p>{sibling.name} {sibling.relation}</p>
                                        {sibling.details ? (
                                            <li> {sibling.details}</li>
                                        ) : (<></>)
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    ) : (<></>)
                    }
                </div >
            </div>
        </div >
    )
}

export default FamilyList