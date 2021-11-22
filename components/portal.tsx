import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useSSR } from 'hooks/useSSR';

interface Props {
    // id: string;
    children: ReactNode;
}

/**
 * @example
 * <Portal id="modal">
 *   <p>Thinking with portals</p>
 * </Portal>
 */
const Portal = ({ children }: Props): any => {
    const { isBrowser } = useSSR();

    return children && isBrowser ? createPortal(children, document.getElementById('modal') ?? document.body) : null;
};

export default Portal;
