import { createContext, useState } from "react";
import { User } from "../server/backend";

const dummyUser = new User("admin", "admin@admin.com", "admin", "admin", "111-111-1111", "date");
export const ActiveUserContext = createContext(dummyUser);


export const ActiveUserProvider = ({ children }) => {
    const [activeUser, setActiveUser] = useState(dummyUser); // Initialize with dummy user
  
    return (
      <ActiveUserContext.Provider value={{ activeUser, setActiveUser }}>
        {children}
      </ActiveUserContext.Provider>
    );
};