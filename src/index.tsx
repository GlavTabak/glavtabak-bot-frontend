import { NextUIProvider } from '@nextui-org/react';
import { SDKProvider, useLaunchParams } from '@tma.js/sdk-react';
import { type FC, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import '@root/app/styles/globals.css';
import { ErrorBoundary, ErrorBoundaryError } from '@components/service';
import { App } from './App';

const Root: FC = () => {
  const debug = useLaunchParams().startParam === 'debug';

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    if (debug) {
      import('eruda').then((lib) => lib.default.init());
    }
  }, [debug]);

  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <SDKProvider acceptCustomStyles debug={debug}>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </SDKProvider>
    </ErrorBoundary>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
