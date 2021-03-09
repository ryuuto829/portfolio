import React from 'react';
import * as S from './styled';
import { blogArticles } from '@config';

const Blog = () => (
  <>
    <S.Menu>
      {blogArticles &&
        blogArticles.map(({ name, url }, i) => (
          <li key={i}>
            <a href={url}>{name}</a>
          </li>
        ))}
    </S.Menu>
  </>
);

export default Blog;
