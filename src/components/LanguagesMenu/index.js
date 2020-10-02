import React from 'react';
import * as S from './styled';

const LanguagesMenu = () => (
  <>
    <S.MenuList>
      <S.MenuItem>
        <S.LanguageLink to="/" onClick={() => 'change to EN'}>
          EN
        </S.LanguageLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.LanguageLink to="/" onClick={() => 'change to EK'}>
          UK
        </S.LanguageLink>
      </S.MenuItem>
    </S.MenuList>
  </>
);

export default LanguagesMenu;
