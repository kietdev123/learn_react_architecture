import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const currentMode = localStorage.getItem('darkMode');
        setIsDarkMode(currentMode === 'true');
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
    };

    return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;