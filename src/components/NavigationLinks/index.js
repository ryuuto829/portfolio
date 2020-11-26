import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { Link } from 'gatsby';
import { useLocale, useIsMounted } from '@hooks';
import { Transition } from '@components';

const NavigationLinks = ({ listItems, isHome, activeLink, isDefault }) => {
  const { locale } = useLocale();
  const isMounted = useIsMounted();

  return (
    <S.NavList>
      {listItems.map(({ name, url }, i) => {
        // Extract id of the section from url like '/#work'
        const linkID = url.split('#')[1];

        return (
          <S.NavItem key={i} isActive={isHome && linkID === activeLink}>
            <Transition
              delay={`${i * 100}ms`}
              animation="fadeInLeft"
              skip={isMounted}>
              {isHome ? (
                <a href={isDefault ? url : `/${locale}${url}`}>
                  <span>{name}</span>
                </a>
              ) : (
                <Link to={isDefault ? url : `/${locale}${url}`}>
                  <span>{name}</span>
                </Link>
              )}
            </Transition>
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
  isHome: PropTypes.bool.isRequired,
  activeLink: PropTypes.string,
  isDefault: PropTypes.bool.isRequired
};

export default NavigationLinks;
