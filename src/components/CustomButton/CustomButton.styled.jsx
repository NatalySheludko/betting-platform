import styled from 'styled-components';

const width = {
  largest: '267px',
  larger: '251px',
  large: '214px',
  small: '127px',
  smaller: '79px',
};

const BaseButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
  text-transform: uppercase;
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 18px 0 rgba(14, 24, 17, 0.25);
  color: #fcfcfc;
`;

export const OrangeCustomButton = styled(BaseButtonStyled)`
  width: ${({ size }) => width[size] || '127px'};
  background-color: #ec622b;
`;

export const GreenCustomButton = styled(BaseButtonStyled)`
  width: ${({ size }) => width[size] || '127px'};
  background-color: #0fa810;
`;
