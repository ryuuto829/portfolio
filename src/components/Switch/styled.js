import styled from 'styled-components';

// https://upmostly.com/tutorials/build-a-react-switch-toggle-component
export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 52px;
  height: 26px;
  background: grey;
  background-color: ${props =>
    props.isChecked ? 'var(--light-blue)' : 'var(--light-gray)'};
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`;

export const ToggleButton = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;

export const Checkbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label span {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexItemsBetween};
`;

export const Text = styled.span`
  padding-left: 10px;
`;
