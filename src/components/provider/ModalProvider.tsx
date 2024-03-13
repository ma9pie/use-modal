import { css, Global } from '@emotion/react';
import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

import BottomSheet from '@/components/modals/BottomSheet';
import Modal from '@/components/modals/Modal';
import { ModalProps, Modals } from '@/types';

type Props = {
  deleteDelay?: number;
  children: ReactNode;
};

export const ModalContext = createContext({
  deleteDelay: 0,
  modals: new Map(),
  setModals: (value: SetStateAction<Modals>) => {},
});

const ModalProvider = ({ deleteDelay = 200, children }: Props) => {
  const [modals, setModals] = useState<Modals>(new Map());

  const modalList: ModalProps[] = useMemo(
    () => Array.from(modals.values()),
    [modals]
  );

  return (
    <ModalContext.Provider value={{ deleteDelay, modals, setModals }}>
      <Global styles={[resetStyle, globalStyle]}></Global>
      <div id="modal-provider">
        {modalList.map((props) => (
          <div key={props.id}>
            {(() => {
              switch (props.type) {
                case 'bottomSheet':
                  return <BottomSheet {...props}></BottomSheet>;
                default:
                  return <Modal {...props}></Modal>;
              }
            })()}
          </div>
        ))}
      </div>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  :root {
    --bg: #ffffff;
    --overlay: rgba(0, 0, 0, 0.4);
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

const resetStyle = css`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
