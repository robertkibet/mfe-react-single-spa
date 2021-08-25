import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgb(10, 64, 114);
  color: white;
`;

interface TitleProps {
  bold?: boolean;
  size?: number;
}
const Title = styled.div<TitleProps>`
  width: auto;
  max-width: 100px;
  font-weight: ${({ bold }) => bold ? '600' : 'normal'};
  ${({ size }) => size && `font-size: ${size}px;`}
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Title bold size={19}>MFE Demo</Title>
      <Title>Account</Title>
    </Wrapper>
  )
}
export default Navbar;