import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Switch = ({ isActive, onChangeHandler }) => (
  <>
    <S.Wrapper>
      <S.Checkbox type="checkbox" id="switch-mode" onClick={onChangeHandler} />
      <S.Label htmlFor="switch-mode" isChecked={isActive}>
        <S.ToggleButton />
      </S.Label>
      <S.Text>Dark Mode</S.Text>
    </S.Wrapper>
  </>
);

Switch.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default Switch;
