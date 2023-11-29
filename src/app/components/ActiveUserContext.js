import { createContext } from "react";
import { User } from ".../server/backend.js";

const ActiveUserContext = createContext();
export {ActiveUserContext};
export const dummyUser = new User("admin", "admin@admin.com", "admin", "admin", "111-111-1111", "date");