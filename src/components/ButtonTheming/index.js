import React from 'react';
import * as S from './styled';
import { useTheme, useTranslation } from '@hooks';
import { Icon } from '@icons';
import { Tooltip } from '@components';

const ButtonTheming = () => {
  const { tooltipContent } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  return (
    <Tooltip
      content={isDarkMode ? tooltipContent.lightMode : tooltipContent.darkMode}>
      <S.Button onClick={toggleTheme}>
        <Icon name={isDarkMode ? 'Sun' : 'Moon'} />
      </S.Button>
    </Tooltip>
  );
};

export default ButtonTheming;
