import React from 'react';
import * as S from './styled';
// import { useTranslation } from '@hooks';

import { IconEmail } from '@icons';
import Tooltip from '@components/Tooltip';

const EmailLink = () => {
  // Copy text to the clipboard on button click
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('rykhlyk.info@gmail.com');
  };

  return (
    <S.EmailLink href="mailto:rykhlyk.info@gmail.com">
      <IconEmail />
      <span>rykhlyk.info@gmail.com</span>
      <Tooltip
        content="Copied!"
        trigger="click"
        onShow={instance => {
          setTimeout(() => {
            instance.hide();
          }, 2000);
        }}>
        <button onClick={copyEmailToClipboard}>Copy</button>
      </Tooltip>
    </S.EmailLink>
  );
};

export default EmailLink;
