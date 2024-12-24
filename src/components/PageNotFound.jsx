import React from 'react';
import { NavLink } from 'react-router-dom';
import sad_face from '../../public/assets/sad_face.png'
import UserNavbar from './UserNavbar';

const PageNotFound = () => {
    return (
        <>
            <UserNavbar />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-8">
                <div className="text-center flex flex-col items-center justify-center">
                    <h1 className="text-9xl font-bold text-red-500">404</h1>
                    <h2 className="text-3xl font-semibold mt-4 text-gray-800">Oops! Page Not Found</h2>
                    <p className="text-gray-600 mt-2">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <img
                        src={sad_face}
                        alt="sad_face"
                        className="mt-8"
                    />
                    <NavLink
                        to="/"
                        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700"
                    >
                        Go Back Home
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;
