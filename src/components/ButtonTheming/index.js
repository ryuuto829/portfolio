import React from 'react';
import * as S from './styled';
import { useTheme, useTranslation, useIsMounted } from '@hooks';
import { Icon } from '@icons';
import { Tooltip, Transition } from '@components';

const ButtonTheming = () => {
  const { tooltipContent } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isMounted = useIsMounted();

  const isDarkMode = theme === 'dark';

  return (
    <Transition delay="500ms" animation="fadeInLeft" skip={isMounted}>
      <Tooltip
        content={
          isDarkMode ? tooltipContent.lightMode : tooltipContent.darkMode
        }>
        <S.Button onClick={toggleTheme}>
          <Icon name={isDarkMode ? 'Sun' : 'Moon'} />
        </S.Button>
      </Tooltip>
    </Transition>
  );
};

export default ButtonTheming;
