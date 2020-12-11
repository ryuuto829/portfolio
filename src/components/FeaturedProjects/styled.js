import styled from 'styled-components';

export const Showcase = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10rem;
  margin-top: 10rem;
  justify-items: end;

  .project-featured {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    grid-gap: 10rem;
    position: relative;
    text-align: left;
    grid-template-areas: 'image content';

    @media (max-width: 925px) {
      grid-template-columns: 1fr;
      grid-gap: 3rem;

      grid-template-areas:
        'title'
        'image'
        'content';
    }
  }

  .project-image {
    align-self: start;
    grid-area: image;

    a {
      display: block;
      width: 100%;
    }

    & img {
      filter: grayscale(50%);
      max-width: 100%;
      object-fit: cover;
      width: 100%;
      border-radius: var(--border-radius);

      /* &:hover {
        filter: grayscale(0);
      } */
    }
  }

  .project-content {
    align-self: start;
    position: relative;
    grid-area: content;

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .project-overline {
    font-size: 14px;
    color: var(--salmon);
    font-weight: var(--weight-semibold);
  }

  .project-description {
    font-size: 17px;
    margin-bottom: 20px;
  }

  & div:nth-of-type(2n) div {
    grid-template-areas: 'content image';

    .project-content {
      text-align: right;

      ul {
        justify-content: flex-end;
      }

      div:last-of-type {
        justify-content: flex-end;
      }
    }

    @media (max-width: 925px) {
      grid-template-areas:
        'title'
        'image'
        'content';

      .project-content {
        text-align: left;

        ul {
          justify-content: flex-start;
        }

        div:last-of-type {
          justify-content: flex-start;
        }
      }
    }
  }
`;

export const CardHeader = styled.div`
  position: relative;

  a {
    display: block;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  h3 {
    font-size: 30px;
    font-family: var(--family-secondary);
    margin: 0;
    font-size: clamp(26px, 5vw, 30px);
    margin-bottom: 20px;
  }

  h3,
  svg {
    transition: var(--transition);
  }

  &:hover {
    color: var(--light-blue);
    fill: var(--light-blue);

    h3 {
      transform: translateX(3px);
    }
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    display: inline-block;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    border: 1px solid transparent;
    border-radius: 2em;
    padding: 0 10px;
    line-height: 22px;
    color: var(--light-gray);
    background-color: #37373f;
    margin: 0 0.125em 0.333em 0;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 40px;

  & > a {
    &:first-child {
      margin-right: 15px;
    }
  }
`;

export const Button = styled.a`
  ${({ theme }) => theme.mixins.smallButton};

  &:before {
    background-color: ${({ theme }) => theme.colorMainBackground};
  }

  @media (max-width: 480px) {
    svg {
      display: none;
    }
  }
`;
