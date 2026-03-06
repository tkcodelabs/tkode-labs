import type { Metadata } from 'next';
import AdminPanel from './AdminPanel';

// Completely hidden from all search engines and bots
export const metadata: Metadata = {
    title: 'TKode Labs',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
        },
    },
};

export default function TkodeCtrlPage() {
    return <AdminPanel />;
}
