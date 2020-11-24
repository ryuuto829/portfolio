import React from 'react';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import * as S from './styled';

import { useLocale } from '@hooks';
import allLang from '@config/i18n/locales';
import { Tooltip, Transition } from '@components';

const LanguagesMenu = () => {
  const { locale } = useLocale();
  const { pathname } = useLocation();

  const changeLangHandler = (e, lang) => {
    e.preventDefault();

    if (locale === lang) return;

    // Pathname is a string like in ex.: "/uk/" or "/uk/projects".
    // In case we want to switch to default language, then we'll omit first three
    // characters from the url ("/uk"), if not - add language to the path
    lang === 'en'
      ? navigate(pathname.slice(3))
      : navigate(`/${lang}${pathname}`);
  };

  return (
    <S.MenuList>
      {Object.keys(allLang).map((lang, i) => {
        const { name, path } = allLang[lang];

        return (
          <Tooltip key={i} content={name} placement="bottom">
            <li>
              <Transition delay={`${i * 100 + 500}ms`} animation="fadeInLeft">
                <S.LanguageLink
                  onClick={e => changeLangHandler(e, path)}
                  $currentLang={locale === path}>
                  {path}
                </S.LanguageLink>
              </Transition>
            </li>
          </Tooltip>
        );
      })}
    </S.MenuList>
  );
};
export default LanguagesMenu;
