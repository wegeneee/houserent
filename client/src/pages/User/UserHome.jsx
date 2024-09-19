import React, { useEffect, useState } from 'react';
import { HideLoading, ShowLoading } from '../../redux/alertsSlice';
import { useDispatch } from 'react-redux';



const UserHome = () => {
    const dispatch = useDispatch();
    const [showPopup, setShowPopup] = useState(true);

    const handlePopupClose = () => {
        setShowPopup(false);
    };
    // 
    //   

    return (
        <div className="relative">
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-black opacity-50 w-full h-full absolute"></div>
                    <div className="bg-white p-6 rounded shadow-lg z-50 m-4">
                        <h2 className="text-xl font-bold mb-4">Rules and Regulations</h2>
                        <p className="mb-4">Here are the rules and regulations for the bus system.</p>
                        <button onClick={handlePopupClose} className='btn btn-primary'>OK</button>
                    </div>
                </div>
            )}

            <div className="user-info">
                {/* Display user information here */}
                <div>
                  <p>hello boss</p>
                </div>
                <div>
                   
                </div>
            </div>
        </div>
    );
};

export default UserHome;