import React from 'react';
import * as S from './styled';

import Sun from '../icons/Sun';

const ButtonTheming = () => (
  <S.Button onClick={() => 'change theme'}>
    <Sun />
  </S.Button>
);

export default ButtonTheming;
