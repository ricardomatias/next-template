import React, { createContext, useContext, useMemo } from 'react';
import { useMedia } from './useMedia';

interface Props {
    children: React.ReactNode;
    value?: boolean;
}

interface MediaQueries {
    isTablet: boolean;
    isMobile: boolean;
}

export const IsMobileContext = createContext<MediaQueries>({ isMobile: false, isTablet: false });

const TABLET_MEDIA_QUERY = '(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)';
const MOBILE_MEDIA_QUERY = '(max-width: 1024px)';

export function IsMobileProvider({ children, value = false }: Props): JSX.Element {
    const isMobile = useMedia(MOBILE_MEDIA_QUERY, value);
    const isTablet = useMedia(TABLET_MEDIA_QUERY, value);

    const mediaQueryValue = useMemo(() => ({ isMobile, isTablet }), [isMobile, isTablet]);

    return <IsMobileContext.Provider value={mediaQueryValue}>{children}</IsMobileContext.Provider>;
}

export function useMediaQueryContext(): MediaQueries {
    return useContext(IsMobileContext);
}
