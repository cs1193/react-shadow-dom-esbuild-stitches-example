import React, { useRef, forwardRef, useEffect, RefObject } from 'react';
import { createPortal } from 'react-dom';
import { createStitches } from '@stitches/react';

import '@fontsource/bangers';

const { getCssText, css } = createStitches({
  prefix: 'shady',
  theme: {
    fonts: {
      bangers: `"Bangers", cursive`
    },
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
  display: 'flex',
  justifyContent: 'center',
  width: '350px',
  height: '250px',
  margin: '0 auto',
  background: '$yellow',
  color: '$red',
  borderColor: '$red',
  borderWidth: '2px',
  borderStyle: 'solid',
  padding: '$1',
  borderRadius: '8px',
  fontFamily: '$bangers',
  fontSize: '24px'
});

const h1 = css({
  color: '$skyBlue'
});

console.log(getCssText());

interface PortalProps {
  id: string
}

export const ShadowDOMPortal = ({ id }: PortalProps, ref: RefObject) => {
  const portal = useRef(document.createElement('div'));
  useEffect(() => {
    portal.current.id = id;
    document.body.appendChild(portal.current);
  }, [id]);
  return createPortal(
    (
      <React.Fragment>
        <div className={box()}>
          <h3 className={h1()}>
            Shadow DOM Portal
          </h3>
        </div>
        <style type="text/css">{getCssText()}</style>
      </React.Fragment>
    ),
    portal.current.attachShadow({ mode: 'closed' })
  );
};
