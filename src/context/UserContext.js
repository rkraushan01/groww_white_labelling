import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    '--background': 'hsl(0, 0%, 100%)',
    '--foreground': 'hsl(0, 0%, 0%)',
    '--primary': 'hsl(210, 50%, 50%)',
    '--primary-foreground': 'hsl(0, 0%, 100%)',
  });
  const [merchantName, setMerchantName] = useState('');
  const [merchantLogo, setMerchantLogo] = useState('');

  const toggleTheme = () => {
    // Toggle theme logic
  };

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const response = await fetch('https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata');
        const data = await response.json();
        if (data?.theme) {
          setTheme(data.theme);
        }
        if (data?.merchantName) {
          setMerchantName(data.merchantName);
        }
        if (data?.merchantLogo) {
          setMerchantLogo(data.merchantLogo);
        }
      } catch (error) {
        console.error('Error fetching theme data:', error);
      }
    };
    fetchTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, merchantName, merchantLogo }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };

