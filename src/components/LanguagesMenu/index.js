import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';

import * as S from './styled';
import { useIsMounted } from '@hooks';
import allLang from '@config/i18n/locales';
import { Tooltip, Transition } from '@components';

const LanguagesMenu = ({ showSidebar, isDefault, locale }) => {
  const { pathname } = useLocation();
  const isMounted = useIsMounted();

  const changeLangHandler = (e, lang) => {
    e.preventDefault();

    if (locale === lang) return;

    // Pathname is a string like: "/uk/" or "/uk/projects".
    // In case we want to switch to the default language, we should omit the first three
    // characters from the url ("/uk"), if not - add language to the path
    !isDefault ? navigate(pathname.slice(3)) : navigate(`/${lang}${pathname}`);
  };

  return (
    <S.MenuList>
      {Object.keys(allLang).map((lang, i) => {
        const { name, path } = allLang[lang];

        return (
          <Tooltip key={i} content={name} placement="bottom">
            <li>
              <Transition
                delay={`${i * 100 + 500}ms`}
                animation="fadeInLeft"
                skip={isMounted || showSidebar}>
                <S.LanguageButton
                  onClick={e => changeLangHandler(e, path)}
                  $currentLang={locale === path}>
                  {path}
                </S.LanguageButton>
              </Transition>
            </li>
          </Tooltip>
        );
      })}
    </S.MenuList>
  );
};

LanguagesMenu.propTypes = {
  showSidebar: PropTypes.bool,
  isDefault: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired
};

export default LanguagesMenu;
