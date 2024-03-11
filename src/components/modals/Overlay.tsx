import styled from '@emotion/styled';
import React from 'react';

interface Props {
  className?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const Overlay = ({ className, backgroundColor, onClick }: Props) => {
  return (
    <Wrapper
      className={className}
      style={{
        backgroundColor,
      }}
      onClick={onClick}
    ></Wrapper>
  );
};

export default Overlay;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;
