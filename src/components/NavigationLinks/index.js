import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { useActiveLinkObserver, useLocale } from '@hooks';

const NavigationLinks = ({ listItems, scrolledToTop }) => {
  const activeLink = useActiveLinkObserver();
  const { locale } = useLocale();

  return (
    <S.NavList>
      {listItems.map(({ name, url }, i) => {
        // Extract id of the section from url like '/#work'
        const id = url.split('#')[1];

        return (
          <S.NavItem
            key={i}
            isActive={id === activeLink}
            scrolledToTop={scrolledToTop}>
            <S.NavLink
              to={locale === 'en' ? url : `/${locale}${url}`}
              data-title={name}>
              {name}
            </S.NavLink>
          </S.NavItem>
        );
      })}
    </S.NavList>
  );
};

NavigationLinks.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired,
  scrolledToTop: PropTypes.bool.isRequired
};

export default NavigationLinks;
