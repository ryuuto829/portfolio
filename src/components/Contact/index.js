import React from 'react';
import * as S from './styled';
import { useTranslation } from '@hooks';

import { IconEmail, IconDownload } from '@icons';
import Tooltip from '@components/Tooltip';

const Contact = () => {
  const { sectionsHeaders } = useTranslation();

  // Copy text to the clipboard on button click
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('rykhlyk.info@gmail.com');
  };

  return (
    <S.foo id="contact">
      <h2 className="section-header">{sectionsHeaders.contact}</h2>
      <p>
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>

      <S.LinksGroup>
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume (235Kb, PDF)
            <span aria-hidden="true">
              <IconDownload />
            </span>
          </a>
        </li>
        <li>
          <a href="mailto:rykhlyk.info@gmail.com">
            rykhlyk.info@gmail.com
            <span aria-hidden="true">
              <IconEmail />
            </span>
          </a>
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
        </li>
      </S.LinksGroup>
    </S.foo>
  );
};
export default Contact;
