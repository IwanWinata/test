'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { analytics, logEvent } from '@/app/lib/firebase';
import { BaseProvider } from './context/BaseContext';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	useEffect(() => {
		if (analytics) {
			logEvent(analytics, 'page_view', { page_path: pathname });
		}
	}, [pathname]);

	return <BaseProvider>{children}</BaseProvider>;
}
