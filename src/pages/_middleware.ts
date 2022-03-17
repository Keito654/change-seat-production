import { NextRequest, NextResponse } from 'next/server';
import { client } from 'src/libs/supabase';

export const middleware = (req: NextRequest) => {
  const user = client.auth.session()?.user;

  console.log(req.nextUrl.pathname);
  const anonymosPermitPage = ['/auth', '/about', '/usage', '/registration'];

  if (anonymosPermitPage.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }
  if (user) {
    return NextResponse.next();
  }

  return NextResponse.redirect('/auth');
};
