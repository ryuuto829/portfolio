import styled from 'styled-components';

// Read more: https://upmostly.com/tutorials/build-a-react-switch-toggle-component
export const SwitchButton = styled.div`
  ${({ theme }) => theme.mixins.flexItemsBetween};
  flex-wrap: wrap;

  .button-text {
    padding-left: 10px;
    font-size: 14px;
  }
`;

export const Label = styled.label`
  ${({ theme }) => theme.mixins.flexItemsBetween};
  cursor: pointer;
  width: 42px;
  height: 21px;
  background-color: ${({ isChecked }) =>
    isChecked ? 'var(--salmon)' : 'var(--light-gray)'};
  border-radius: 100px;
  position: relative;
  transition: var(--transition);

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: var(--white);
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    transition: var(--transition);
  }
`;

export const Checkbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;
