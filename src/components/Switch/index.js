import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { useTranslation } from '@hooks';

const Switch = ({ isActive, onChangeHandler }) => {
  const { tooltipContent } = useTranslation();

  return (
    <>
      <S.Wrapper>
        <S.Checkbox
          type="checkbox"
          id="switch-mode"
          onClick={onChangeHandler}
        />
        <S.Label htmlFor="switch-mode" isChecked={isActive}>
          <S.ToggleButton />
        </S.Label>
        <S.Text>{tooltipContent.darkMode}</S.Text>
      </S.Wrapper>
    </>
  );
};

Switch.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default Switch;
