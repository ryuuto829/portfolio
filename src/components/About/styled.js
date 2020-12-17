import styled from 'styled-components';

export const AboutInner = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: var(--space-huge);

  .image-wrapper {
    ${({ theme }) => theme.mixins.flexItemsCenter};

    align-items: flex-start;
  }

  .about-image {
    display: block;
    position: relative;
    max-width: 380px;
    filter: grayscale(100%);
    object-fit: cover;
    opacity: 0.8;
    border-radius: 50%;
    height: auto;
    transition: var(--transition);
    z-index: 40;

    &:before {
      position: absolute;
      content: '';
      filter: none;
      display: block;
      width: 100%;
      height: 100%;
      border: 2px solid var(--salmon);
      border-radius: 50%;
      z-index: 50;
      transition: var(--transition);
    }

    &:hover {
      filter: grayscale(20%);
    }
  }

  .about-content {
    p {
      margin: var(--space) 0;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, minmax(120px, 200px));
      margin: var(--space) 0 0;
      vertical-align: baseline;
      list-style: disc;
      overflow: hidden;
    }

    li {
      list-style-position: inside;
      margin-bottom: var(--space-small);
    }

    a {
      ${({ theme }) => theme.mixins.link};
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: unset;
    gap: var(--space);

    .image-wrapper {
      order: -1;
    }
  }
`;
