import React, { FC } from 'react';
import { styled } from '../styles/stitches.config';

const AppHeaderStyledContext = styled('div', {
  backgroundColor: '$gunmetal',
  color: '$white',
  padding: '$2'
});

interface AppHeaderProps {};

export const AppHeader = (props: AppHeaderProps) => {
  return (
    <AppHeaderStyledContext>
      React Shadow DOM
    </AppHeaderStyledContext>
  );
};
