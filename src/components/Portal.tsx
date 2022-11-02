import React, { useRef, memo, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  id: string,
  children: React.Node | React.Node[] | JSX.Element | JSX.Element[];
}

export const Portal = memo(({ id, children }: PortalProps) => {
  const portal = useRef(document.createElement('div'));
  useEffect(() => {
    portal.current.id = id;
    document.body.appendChild(portal.current);
  }, [id]);
  return createPortal(children, portal.current);
});
