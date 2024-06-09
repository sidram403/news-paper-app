import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const useTranslation = (text) => {
  const { translateText } = useLanguage();
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    const translate = async () => {
      const translated = await translateText(text);
      setTranslatedText(translated);
    };

    translate();
  }, [text, translateText]);

  return translatedText;
};

export default useTranslation;
