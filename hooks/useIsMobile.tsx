import React, { createContext, useContext } from 'react';
import useMedia from 'use-media';

interface Props {
    children: React.ReactNode;
    value?: boolean;
}

export const IsMobileContext = createContext<boolean>(false);

const MEDIA_QUERY = '(max-width: 767px) and (orientation: portrait), (max-width: 767px) and (orientation: landscape)';

export function IsMobileProvider({ children, value = false }: Props): JSX.Element {
    const isMobileQuery = useMedia(MEDIA_QUERY, value);

    return <IsMobileContext.Provider value={isMobileQuery}>{children}</IsMobileContext.Provider>;
}

export function useIsMobileContext(): boolean {
    return useContext(IsMobileContext);
}
