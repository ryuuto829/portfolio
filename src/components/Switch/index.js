import React, { useState } from 'react';
import * as S from './styled';

const Switch = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <S.Wrapper>
        <S.Checkbox
          type="checkbox"
          id="switch-mode"
          onClick={() => setChecked(!checked)}
        />
        <S.Label htmlFor="switch-mode" isChecked={checked}>
          <S.ToggleButton />
        </S.Label>
        <S.Text>Dark Mode</S.Text>
      </S.Wrapper>
    </>
  );
};

export default Switch;
