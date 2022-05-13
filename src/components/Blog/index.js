import React from 'react';
import * as S from './styled';
import { blogArticles, blogURL } from '@config';
import { useTranslation } from '@hooks';
import { Transition } from '@components';

const Blog = () => {
  const { sectionsHeaders, blogContent } = useTranslation();

  return (
    <S.BlogSection>
      <Transition>
        <h3 className="section-overline" id="blog">
          {sectionsHeaders.blog}
        </h3>
      </Transition>

      <S.Menu>
        {blogArticles &&
          blogArticles.map(({ name, url }, i) => (
            <Transition key={i}>
              <S.MenuItem>
                <a href={url}>{name}</a>
              </S.MenuItem>
            </Transition>
          ))}
      </S.Menu>

      <Transition>
        <a
          href={blogURL}
          aria-label="Dev.to Blog"
          title="Dev.to Blog"
          className="show-blog">
          <span>{blogContent.goToBlog}</span>
        </a>
      </Transition>
    </S.BlogSection>
  );
};

export default Blog;
