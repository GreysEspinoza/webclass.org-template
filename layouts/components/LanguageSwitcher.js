import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  function handleLanguageChange(event) {
    const languageCode = event.target.value;
    i18n.changeLanguage(languageCode);
  }

  return (
    <div>
      <select onChange={handleLanguageChange}>
        <option value="en">{t('English')}</option>
        <option value="es">{t('Spanish')}</option>
      </select>
    </div>
  );
}
