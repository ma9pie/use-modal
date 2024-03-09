import styled from '@emotion/styled';
import React, { CSSProperties, ReactNode } from 'react';

interface Props {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const GlobalStyles = ({ className, style, children }: Props) => {
  return (
    <Wrapper>
      <div className={className} style={style}>
        {children}
      </div>
    </Wrapper>
  );
};

export default GlobalStyles;

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  /* for checking layout */
  .border-black {
    border: 1px solid black;
  }
  .border-red {
    border: 1px solid red;
  }
  .border-blue {
    border: 1px solid blue;
  }
  .border-green {
    border: 1px solid green;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes slide-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
  @keyframes slide-down {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(100%);
    }
  }

  .fade-in {
    animation: fade-in 0.2s ease-in-out forwards;
  }
  .fade-out {
    animation: fade-out 0.2s ease-in-out forwards;
  }
  .slide-up {
    animation: slide-up 0.2s ease-in-out forwards;
  }
  .slide-down {
    animation: slide-down 0.2s ease-in-out forwards;
  }
`;
