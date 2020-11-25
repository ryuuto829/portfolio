import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import { useTranslation } from '@hooks';

const Switch = ({ isActive, onChangeHandler }) => {
  const { tooltipContent } = useTranslation();

  const buttonRef = useRef(null);
  const labelRef = useRef(null);

  // We can toggle theme by pressing 'Enter' key
  const toggleSwitch = e => {
    if (e.key === 'Enter') buttonRef.current.click();
  };

  useEffect(() => {
    labelRef.current.addEventListener('keydown', toggleSwitch);

    return () => {
      labelRef.current.removeEventListener('keydown', toggleSwitch);
    };
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.Checkbox
          ref={buttonRef}
          aria-hidden="true"
          type="checkbox"
          id="switch-mode"
          onClick={onChangeHandler}
        />
        <S.Label
          ref={labelRef}
          tabIndex={0}
          htmlFor="switch-mode"
          isChecked={isActive}
          aria-label={tooltipContent.darkMode}>
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
