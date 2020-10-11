import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { useActiveLinkObserver } from '@hooks';

const NavigationLinks = ({ listItems, scrolledToTop }) => {
  const activeLink = useActiveLinkObserver();

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
            <S.NavLink to={url} data-title={name}>
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
