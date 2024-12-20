import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addUser, checkUsername, checkEmail } from '../api/userApi'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    const userSignup = async (userData) => {
        try {
            const emailExist = await checkEmail(userData.email);
            if (emailExist) {
                throw new Error("An account already exists in this email");
            }
            
            const usernameExist = await checkUsername(userData.username);
            if (usernameExist) {
                throw new Error("Username already in use.");
            }

            const newUser = {
                ...userData,
                "role" : "user",
                "block" : false
            };

            await addUser(newUser);
            setUser(newUser);
            setTimeout(() => {
                navigate("/");
            }, 1000);

        } catch (error) {
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{ user, userSignup }} >
            {children}
        </AuthContext.Provider>
    )
};