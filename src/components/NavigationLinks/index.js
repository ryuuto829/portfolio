import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const NavigationLinks = ({ listItems }) => (
  <>
    <ul>
      {listItems.map(({ name, url }, i) => (
        <li key={i}>
          <S.NavLink to={url}>{name}</S.NavLink>
        </li>
      ))}
    </ul>
  </>
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
