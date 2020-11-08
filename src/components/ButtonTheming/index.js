import React from 'react';
import * as S from './styled';
import { useTheme } from '@hooks';

import Sun from '@icons/Sun';
import Tooltip from '@components/Tooltip';

const ButtonTheming = () => {
  const { theme, toggleTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  return (
    <Tooltip content={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
      <S.Button onClick={toggleTheme}>
        <Sun />
      </S.Button>
    </Tooltip>
  );
};

export default ButtonTheming;
