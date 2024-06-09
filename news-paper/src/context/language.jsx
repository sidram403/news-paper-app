import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';

export const LanguageContext = createContext();

const cache = {};

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('hi'); // Default language is Hindi

  const translateText = useCallback(async (text) => {
    if (cache[text]) {
      return cache[text];
    }

    try {
      const response = await axios.post(`https://translation.googleapis.com/language/translate/v2`, {}, {
        params: {
          q: text,
          target: language,
          key: 'YOUR_API_KEY', // Replace with your API key
        },
      });

      const translatedText = response.data.data.translations[0].translatedText;
      cache[text] = translatedText;
      return translatedText;
    } catch (error) {
      console.error('Error translating text:', error);
      return text;
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translateText }}>
      {children}
    </LanguageContext.Provider>
  );
};
