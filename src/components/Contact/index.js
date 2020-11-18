import React from 'react';
import * as S from './styled';
import { useTranslation } from '@hooks';

import EmailLink from '@components/EmailLink';

const Contact = () => {
  const { sectionsHeaders } = useTranslation();

  return (
    <S.ContactSection id="contact">
      <h2 className="section-header">{sectionsHeaders.contact}</h2>
      <p>
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <EmailLink />
    </S.ContactSection>
  );
};
export default Contact;
