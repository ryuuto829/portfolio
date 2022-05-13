import styled from 'styled-components';

export const Showcase = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10rem;
  margin-top: 10rem;

  & > div {
    width: 100%;
  }

  .project-featured {
    display: grid;
    position: relative;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    grid-gap: 10rem;
    text-align: left;
    grid-template-areas: 'image content';

    @media (max-width: 925px) {
      grid-template-columns: 1fr;
      grid-gap: 3rem;

      grid-template-areas:
        'image'
        'content';
    }
  }

  .project-image {
    grid-area: image;
    width: 100%;
    display: flex;
    justify-content: center;

    a {
      display: block;
      width: 100%;

      @media (max-width: 925px) {
        max-width: 500px;
      }
    }

    img {
      filter: grayscale(50%);
      object-fit: cover;
      border-radius: var(--border-radius);
    }
  }

  .project-content {
    grid-area: content;
    align-self: start;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .project-overline {
    font-size: var(--text-small);
    color: ${({ theme }) => theme.primaryColor};
    font-weight: var(--weight-semibold);
  }

  .project-description {
    font-size: var(--text-normal);
    margin-bottom: var(--space);
  }

  // Alternative pattern for every second item
  & > div:nth-of-type(2n) > div {
    grid-template-areas: 'content image';

    .project-content {
      text-align: right;

      ul,
      div:last-of-type {
        justify-content: flex-end;
      }
    }

    @media (max-width: 925px) {
      grid-template-areas:
        'image'
        'content';

      .project-content {
        text-align: left;

        ul,
        div:last-of-type {
          justify-content: flex-start;
        }
      }
    }
  }

  @media (max-width: 925px) {
    margin-top: 8rem;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  margin-top: var(--space-extra);

  a {
    ${({ theme }) => theme.mixins.smallButton};

    &:before {
      background-color: ${({ theme }) => theme.mainBackground};
    }

    &:first-child {
      margin-right: 15px;
    }
  }
`;
