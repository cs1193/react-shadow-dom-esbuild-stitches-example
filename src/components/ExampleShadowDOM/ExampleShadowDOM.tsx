import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { createStitches } from '@stitches/react';

const { styled, getCssText, css } = createStitches({
  theme: {
    colors: {
      red: '#F00',
      blue: 'blue'
    }
  }
});

const box = css({
  background: '$red',
  color: '$blue'
});

const element: HTMLElement = document.getElementById('root');

const shadowRoot = ReactDOM.createRoot(
  element.attachShadow({ mode: 'open' })
);

shadowRoot.render(<><div className={box()}>App Colored</div><style>{getCssText()}</style></>);
