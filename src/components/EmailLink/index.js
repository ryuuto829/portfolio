import React from 'react';
import * as S from './styled';
import { useTranslation } from '@hooks';
import { email } from '@config';
import { IconEmail, IconCopy } from '@icons';
import { Tooltip } from '@components';

const EmailLink = ({ ...rest }) => {
  const { tooltipContent } = useTranslation();

  // Copy text to the clipboard on button click
  const copyEmailToClipboard = e => {
    // Prevent Event bubbling, to not click on link
    e.preventDefault();

    navigator.clipboard.writeText(email);
  };

  return (
    <S.EmailLink {...rest} href={`mailto:${email}`}>
      <IconEmail />
      <span className="email-content">{email}</span>
      <Tooltip
        content={tooltipContent.copied}
        trigger="click"
        onShow={instance => {
          setTimeout(() => {
            instance.hide();
          }, 2000);
        }}>
        <button
          onClick={e => copyEmailToClipboard(e)}
          className="copy-button"
          aria-label="Copy"
          title="Copy">
          <IconCopy />
        </button>
      </Tooltip>
    </S.EmailLink>
  );
};

export default EmailLink;
