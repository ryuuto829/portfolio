import React from 'react';
import * as S from './styled';
import { useTranslation } from '@hooks';

import EmailLink from '@components/EmailLink';

const Contact = () => {
  const { sectionsHeaders, contactMessage } = useTranslation();

  return (
    <S.ContactSection id="contact">
      <h2 className="section-header">{sectionsHeaders.contact}</h2>
      <p>{contactMessage}</p>
      <EmailLink />
    </S.ContactSection>
  );
};
export default Contact;
