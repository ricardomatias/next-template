'use client';

import React from 'react';
import { Provider } from 'jotai';
import { store } from 'state/store';
import { IsMobileProvider } from 'hooks/useIsMobile';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <IsMobileProvider>
                {children}
            </IsMobileProvider>
        </Provider>
    );
}
