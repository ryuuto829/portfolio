import React from 'react';
import { Navigation, Social, Footer, SEO } from '@components';

const projectTemplate = ({ pageContext }) => {
  const {
    date,
    about,
    // external,
    // github,
    // isDefault,
    // locale,
    // slug,
    // technologies,
    title,
    html
  } = pageContext;

  return (
    <>
      <SEO title={title} description={about} />
      <Navigation />
      <Social />
      <div id="content">
        <main>
          <section className="blog-post-container">
            <div className="blog-post">
              <h1>{title}</h1>
              <h2>{date}</h2>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default projectTemplate;
