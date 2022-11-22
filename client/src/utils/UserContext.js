import React, { useState } from 'react';
import { User } from '../../../server/models';

export const UserContext = React.createContext

const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState()
}

return (
    <UserContext.Provider value={{ currentUser: currentUser }}{...props}></UserContext.Provider>
)