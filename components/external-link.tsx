import { ReactNode } from 'react';

type Props = { url: string; children: ReactNode };

export const ExternalLink = ({ url, children }: Props): JSX.Element => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
};
