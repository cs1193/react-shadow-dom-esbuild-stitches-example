import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { createStitches } from '@stitches/react';

const { getCssText, css } = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      green: '#37C976',
      skyBlue: '#3DAEFE',
      yellow: '#FFA23A',
      red: '#FE4F4F'
    }
  }
});

const box = css({
  background: '$yellow',
  color: '$red'
});

// const element: HTMLElement = document.getElementById('root');

// const shadowRoot = ReactDOM.createRoot(
//   element.attachShadow({ mode: 'open' })
// );

// shadowRoot.render(<><div className={box()}>App Colored</div><style>{getCssText()}</style></>);

interface ExampleShadowDOMProps {
  id: string;
}

export const ExampleShadowDOM = ({ id }: ExampleShadowDOMProps) => {
  const portal = useRef(document.createElement('div'));
  useEffect(() => {
    portal.current.id = id;
    document.body.appendChild(portal.current);
  }, [id]);
  return createPortal(<><div className={box()}>App Colored</div><style>{getCssText()}</style></>, portal.current.attachShadow({ mode: 'open' }));
};
