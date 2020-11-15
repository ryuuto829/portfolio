import React from 'react';
// import * as S from './styled';
import { useTranslation } from '@hooks';

const Blog = () => {
  const { sectionsHeaders } = useTranslation();

  return (
    <section id="blog">
      <h2 className="section-header">{sectionsHeaders.blog}</h2>
    </section>
  );
};

export default Blog;
