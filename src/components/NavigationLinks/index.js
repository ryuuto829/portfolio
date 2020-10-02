import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const NavigationLinks = ({ listItems }) => (
  <S.NavList>
    {listItems.map(({ name, url }, i) => (
      <S.NavItem key={i}>
        <S.NavLink to={url}>{name}</S.NavLink>
      </S.NavItem>
    ))}
  </S.NavList>
);

NavigationLinks.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired
};

export default NavigationLinks;
