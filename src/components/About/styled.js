import styled from 'styled-components';

export const AboutInner = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .about-image {
    display: block;
    width: 100%;
    /* max-width: 274px; */
    max-width: 380px;
    filter: grayscale(100%);
    object-fit: cover;
    opacity: 0.8;
    border-radius: 50%;
    height: auto;
  }

  p {
    margin: 20px 0;
    line-height: 160%;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(120px, 200px));
    padding: 0px;
    margin: 20px 0px 0px;
    font: inherit;
    vertical-align: baseline;
    font-weight: var(--weight-light);
    list-style: disc;
    overflow: hidden;
  }

  li {
    list-style-position: inside;
    margin-bottom: 10px;
  }

  .about-content {
    a {
      color: var(--salmon);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: unset;

    .image-wrapper {
      order: -1;
    }
  }
`;
