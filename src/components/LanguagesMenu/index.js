import React from 'react';
import { navigate } from 'gatsby';
import * as S from './styled';

import { useLocale } from '@hooks';
import allLang from '@config/i18n/locales';
import Tooltip from '@components/Tooltip';

const LanguagesMenu = () => {
  const { locale, changeLocale } = useLocale();

  const changeLangHandler = (e, lang) => {
    e.preventDefault();
    if (locale === lang) return;

    changeLocale(lang);

    lang === 'en' ? navigate('/') : navigate(`/${lang}`);
  };

  return (
    <>
      <S.MenuList>
        {Object.keys(allLang).map((lang, i) => {
          const { name, path } = allLang[lang];

          return (
            <Tooltip key={i} content={name} placement="bottom">
              <S.MenuItem>
                <S.LanguageLink
                  to="/"
                  onClick={e => changeLangHandler(e, path)}
                  $currentLang={locale === path}>
                  {path}
                </S.LanguageLink>
              </S.MenuItem>
            </Tooltip>
          );
        })}
      </S.MenuList>
    </>
  );
};
export default LanguagesMenu;
