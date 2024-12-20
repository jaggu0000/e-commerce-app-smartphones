import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addUser, checkUsername, checkEmail } from '../api/userApi'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedAdmin = localStorage.getItem("admin");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else if (storedAdmin) {
            setUser(JSON.parse(storedAdmin));
        }
    }, []);

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

            const response = await addUser(newUser);
            localStorage.setItem(
                "user",
                JSON.stringify({
                    userId : response.data.id,
                    username : response.data.username
                })
            );
            setUser(newUser);
            setTimeout(() => {
                navigate("/");
            }, 1000);

        } catch (error) {
            throw error;
        }
    }

    const userLogin = async (userdata) => {
        try {
            
        } catch (error) {
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, userSignup, userLogin }} >
            {children}
        </AuthContext.Provider>
    )
};