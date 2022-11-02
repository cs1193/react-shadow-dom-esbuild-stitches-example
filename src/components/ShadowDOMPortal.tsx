import React, { useRef, forwardRef, useEffect, RefObject } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  id: string,
  children: React.Node | React.Node[] | JSX.Element | JSX.Element[];
}

export const ShadowDOMPortal = forwardRef(({ id, children }: PortalProps, ref: RefObject) => {
  const portal = useRef(document.createElement('div'));
  useEffect(() => {
    portal.current.id = id;
    document.body.appendChild(portal.current);
  }, [id]);
  return createPortal(children, portal.current);
});
