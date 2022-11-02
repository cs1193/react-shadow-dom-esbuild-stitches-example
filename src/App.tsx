import React, { FC } from 'react';
import { globalStyles, styled } from './styles/stitches.config';
import { AppHeader } from './components/AppHeader';

const BackgroundText = styled('div', {
  fontSize: '$large',
  color: '$manatee',
  padding: '$2',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

const CodeText = styled('code', {
  fontFamily: '$mono',
  backgroundColor: '$gainsboro',
  color: '$charcoal',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: '$auroMetalSaurus',
  padding: '0 $2',
  margin: '$2 0'
});

interface AppProps {};

export const App = (props: AppProps) => {
  globalStyles();
  return (
    <>
      <AppHeader />
      <BackgroundText>
        The monochromatic styles come from the main app <CodeText>stitches.config.ts</CodeText>.
      </BackgroundText>
    </>
  );
};
