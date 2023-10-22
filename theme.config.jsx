import { useConfig, useTheme } from 'nextra-theme-docs';
import Link from 'next/link';

const GITHUB_REPO = 'https://github.com/adrastia-oracle/adrastia-docs/';

const TITLE_SUFFIX = 'Adrastia Docs';
const DEFAULT_DESCRIPTION = "Learn about Adrastia's blockchain oracles.";

export default {
  logo: () => {
    const { resolvedTheme } = useTheme();

    return (
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
            {resolvedTheme === 'dark' ? (
              <img
                src="/logo/logomark-dark.svg"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              />
            ) : (
              <img
                src="/logo/logomark-light.svg"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              />
            )}
          </a>
        </span>
        <Link href="/">{TITLE_SUFFIX}</Link>
      </span>
    );
  },
  logoLink: '',
  project: {
    link: GITHUB_REPO,
  },
  chat: {
    link: 'https://discord.gg/sZP9SUBuSC',
  },
  docsRepositoryBase: GITHUB_REPO + 'tree/main/',
  useNextSeoProps() {
    return {
      titleTemplate: '%s | ' + TITLE_SUFFIX,
    };
  },
  head: () => {
    const { frontMatter } = useConfig();

    return (
      <>
        /* Standard favicon */
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon/favicon-48x48.png" />
        /* Apple favicon */
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/favicon/apple-touch-icon-167x167.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-touch-icon-120x120.png" />
        /* Google favicon */
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
        <meta name="description" content={frontMatter.description || DEFAULT_DESCRIPTION} />
      </>
    );
  },
  footer: {
    text: (
      <span
        style={{
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'auto',
          paddingRight: 'auto',
        }}
      >
        Copyright © TRILEZ SOFTWARE INC. 2022-2023
      </span>
    ),
  },
};
