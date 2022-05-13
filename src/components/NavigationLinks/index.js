import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import * as S from './styled';
import { useIsMounted } from '@hooks';
import { localizedLink } from '@utils';
import { Transition } from '@components';

const NavigationLinks = ({
  listItems,
  isHome,
  activeLink,
  isDefault,
  locale
}) => {
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
                <a href={localizedLink(url, locale, isDefault)}>
                  <span>{name}</span>
                </a>
              ) : (
                <Link to={localizedLink(url, locale, isDefault)}>
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
  isDefault: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired
};

export default NavigationLinks;
