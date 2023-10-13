import { config } from 'lib/config';
import Link from 'next/link';

/**
 * The shared header component.
 */
export default function Header() {
    return (
        <header className="text-center sm:text-left">
            <h1>
                <Link href="/">{config.siteName}</Link>
            </h1>
            <nav className="flex flex-row gap-4"></nav>
        </header>
    );
}
