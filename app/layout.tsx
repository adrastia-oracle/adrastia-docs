import { Footer, Layout, Navbar, useTheme } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import ThemeAwareLogo from '@components/theme-aware-logo';

const GITHUB_REPO = 'https://github.com/adrastia-oracle/adrastia-docs/';

const TITLE_SUFFIX = 'Adrastia Docs';
const DEFAULT_DESCRIPTION = "Learn about Adrastia's blockchain oracles.";

export const metadata: Metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  description: DEFAULT_DESCRIPTION,
  title: {
    default: TITLE_SUFFIX,
    template: `%s | ${TITLE_SUFFIX}`,
  },
};

const navbar = (
  <Navbar
    logo={
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            height: '2em',
            marginRight: '1em',
          }}
        >
          <a href="https://adrastia.io/">
            <ThemeAwareLogo />
          </a>
        </span>
        <Link href="/">{TITLE_SUFFIX}</Link>
      </span>
    }
    logoLink={''}
    projectLink={GITHUB_REPO}
    chatLink={'https://discord.adrastia.io/'}
  />
);

const footer = (
  <Footer>
    <span
      style={{
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 'auto',
        paddingRight: 'auto',
      }}
    >
      Copyright © TRILEZ SOFTWARE INC. 2022-2025
    </span>
  </Footer>
);

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        {/* Standard favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon/favicon-48x48.png" />
        {/* Apple favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/favicon/apple-touch-icon-167x167.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-touch-icon-120x120.png" />
        {/* Google favicon */}
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase={GITHUB_REPO + 'tree/main/'}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
