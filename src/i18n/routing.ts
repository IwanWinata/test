import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['kontraktor', 'contractor'],
  defaultLocale: 'kontraktor'
});
 
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);