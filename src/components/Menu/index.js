import React, { useState } from 'react';
import * as S from './styled';

const Menu = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <S.Wrapper onClick={() => setShowSidebar(!showSidebar)}>
      <S.Hamburger showSidebar={showSidebar} />
    </S.Wrapper>
  );
};

export default Menu;
