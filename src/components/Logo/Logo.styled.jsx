import styled from 'styled-components';

const widths = {
  small: '120px',
  medium: '151px',
  large: '253px',
};

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => widths[size] || widths.small};
  height: 55px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
  text-transform: uppercase;
  color: #fff;
  background-color: #141e55;
`;
