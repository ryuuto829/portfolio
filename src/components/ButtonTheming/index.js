import React from 'react';
import * as S from './styled';

import Sun from '@icons/Sun';
import Tooltip from '@components/Tooltip';

const ButtonTheming = () => (
  <Tooltip content="Light Mode">
    <S.Button onClick={() => 'change theme'}>
      <Sun />
    </S.Button>
  </Tooltip>
);

export default ButtonTheming;
