import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export function getSessionStorageOrDefault<T>(key: string, defaultValue: T): T | null {
    if (typeof window === 'undefined') return defaultValue;

    const stored = window.sessionStorage.getItem(key);

    if (!stored) {
        return defaultValue;
    }

    return JSON.parse(stored);
}

export function saveSessionStorage<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return;

    window.sessionStorage.setItem(key, JSON.stringify(value));
}

export function removeFromSessionStorage(key: string): void {
    if (typeof window === 'undefined') return;

    window.sessionStorage.removeItem(key);
}

export function useSessionStorage<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(getSessionStorageOrDefault(key, defaultValue));

    useEffect(() => {
        saveSessionStorage(key, value);
    }, [key, value]);

    return [value, setValue];
}
