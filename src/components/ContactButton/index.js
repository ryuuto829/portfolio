import React from 'react';
import * as S from './styled';
// import { useTranslation } from '@hooks';

import { IconEmail, IconDownload } from '@icons';
import Tooltip from '@components/Tooltip';

const ContactButton = () => {
  // Copy text to the clipboard on button click
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('rykhlyk.info@gmail.com');
  };

  return (
    <S.LinksGroup>
      <li>
        <S.foo href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <IconDownload />
          <span>Resume</span>
          <span className="detail">(235Kb, PDF)</span>
        </S.foo>
      </li>
      <li>
        <S.foo href="mailto:rykhlyk.info@gmail.com">
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
        </S.foo>
      </li>
    </S.LinksGroup>
  );
};

export default ContactButton;
