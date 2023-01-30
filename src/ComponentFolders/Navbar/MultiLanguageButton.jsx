import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

function MultiLangDropDown() {
  const { t } = useTranslation();

  const [locale, setLocale] = useState('en');
  const handleChangeLocale = (lan) => {
    setLocale(lan);
    i18n.changeLanguage(lan);
  };

  return (
    <div>
      <select
        id="languages"
        value={locale}
        onChange={(e) => handleChangeLocale(e.target.value)}
      >
        <option value="en">{t('languages.en')}</option>
        <option value="tr">{t('languages.tr')}</option>
      </select>
    </div>
  );
}

export default MultiLangDropDown;
