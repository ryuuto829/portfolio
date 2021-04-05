import React from 'react';
import * as S from './styled';
import { blogArticles } from '@config';

import { Transition } from '@components';

const Blog = () => (
  <S.BlogSection>
    <Transition>
      <h3 className="section-overline" id="blog">
        Some highlights from my blog
      </h3>
    </Transition>

    <S.Menu>
      {blogArticles &&
        blogArticles.map(({ name, url }, i) => (
          <Transition key={i}>
            <li>
              <a href={url}>{name}</a>
            </li>
          </Transition>
        ))}
    </S.Menu>

    <Transition>
      <a href="/" aria-label="Github" title="Github" className="show-blog">
        <span>Go to Blog</span>
      </a>
    </Transition>
  </S.BlogSection>
);

export default Blog;
