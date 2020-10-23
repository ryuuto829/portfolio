import React from 'react';
import { navigate } from 'gatsby';
import * as S from './styled';

import { useLocale } from '@hooks/useLocale';
// import { useLocation } from '@reach/router';

const LanguagesMenu = () => {
  const { locale, changeLocale } = useLocale();

  // const { pathname } = useLocation();

  const changeLangHandler = (e, lang) => {
    e.preventDefault();
    if (locale === lang) return;
    changeLocale(lang);

    lang === 'en' ? navigate('/') : navigate(`/${lang}`);

    // console.log(pathname);
  };

  return (
    <>
      <S.MenuList>
        <S.MenuItem>
          <S.LanguageLink
            to="/"
            onClick={e => changeLangHandler(e, 'en')}
            $currentLang={locale === 'en'}>
            EN
          </S.LanguageLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.LanguageLink
            to="/"
            onClick={e => changeLangHandler(e, 'uk')}
            $currentLang={locale === 'uk'}>
            UK
          </S.LanguageLink>
        </S.MenuItem>
      </S.MenuList>
    </>
  );
};
export default LanguagesMenu;
