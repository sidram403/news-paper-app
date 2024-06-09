import React, { useContext } from 'react';
import { LanguageContext } from '../context/language';

const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div className="fixed top-20 left-0 right-0 p-4  z-50 flex justify-end">
            <select
                value={language}
                onChange={handleLanguageChange}
                className="border p-2 rounded"
            >
                <option value="hi">Hindi</option>
                <option value="en">English</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
