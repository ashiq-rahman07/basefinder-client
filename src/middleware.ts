import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from './services/AuthService';

type Role = keyof typeof roleBasedPrivateRoutes;


const authRoutes = ['/login', '/register'];

const roleBasedPrivateRoutes = {
  landlord: [/^\/landlord/, /^\/create-house/, /^\/profile/],
  tenant: [/^\/tenant/, /^\/create-request/, /^\/profile/, /^\/payrent/],
  admin: [/^\/admin/, /^\/profile/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const cleanPathname = pathname.replace(/\/+$/, '')
  const isAuthRoute = authRoutes.includes(cleanPathname);
  const userInfo = await getCurrentUser();

  if (!userInfo) {
    if (isAuthRoute) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }

  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some(route => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL('/', request.url));
};

export const config = {
  matcher: [
    '/login',
    '/create-house',
    '/profile',
    '/admin',
    '/admin/:page',
    '/landlord',
    '/landlord/listing',
    '/landlord/:page',
    '/tenant',
    '/tenant:page',
    '/tenant/my-request',
    '/payrent',
    '/payrent/verify',
    '/payrent/verify/:page',
  ],
};
