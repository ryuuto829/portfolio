import React from 'react';
import * as S from './styled';
import { useTranslation } from '@hooks';

import { EmailLink, Transition } from '@components';

const Contact = () => {
  const { sectionsHeaders, contactMessage } = useTranslation();

  return (
    <S.ContactSection id="contact">
      <Transition>
        <h2 className="section-header">{sectionsHeaders.contact}</h2>
      </Transition>
      <Transition>
        <p>{contactMessage}</p>
      </Transition>
      <Transition>
        <EmailLink />
      </Transition>
    </S.ContactSection>
  );
};
export default Contact;
