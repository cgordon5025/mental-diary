import React from 'react'

const UserList = ({ users, email }) => {
    if (!users.length) {
        return <h3> No Profiles Yet</h3>
    }
    return (
        <div>
            <h3 className="text-primary">{email}</h3>
            <div className="flex-row justify-space-between my-4">
                {users &&
                    users.map((user) => (
                        <div key={user._id} className="col-12 col-xl-6">
                            <div className="card mb-3">
                                <h4 className="card-header bg-dark text-light p-2 m-0">
                                    {user.username} <br />
                                    <span className="text-white" style={{ fontSize: '1rem' }}>
                                        currently has {user.email ? user.email.length : 0}{' '}
                                    </span>
                                </h4>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default UserList