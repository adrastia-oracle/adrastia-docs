import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { SideNav, TableOfContents, TopNav } from '../components';

import 'prismjs';
// Import other Prism themes here
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-solidity.min';
import 'prismjs/themes/prism.min.css';

import '../public/globals.css'

import type { AppProps } from 'next/app'
import type { MarkdocNextJsPageProps } from '@markdoc/next.js'

const TITLE = 'Adrastia Docs';
const DESCRIPTION = 'Documentation for Adrastia smart contract oracles.';

function collectHeadings(node, sections = []) {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

export type MyAppProps = MarkdocNextJsPageProps

export default function MyApp({ Component, pageProps }: AppProps<MyAppProps>) {
  const { markdoc } = pageProps;

  let title = TITLE;
  let description = DESCRIPTION;
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];

  return (
    <>
      <Head>
        <title>{title + " | Adrastia Docs"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title + " | Adrastia Docs"} />
        <meta name="description" content={description} />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon/favicon-48x48.png" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon-180x180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/favicon/apple-touch-icon-167x167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-touch-icon-120x120.png"
        />

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

        <meta name="theme-color" content="#2196F3" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <TopNav>
        <a href="https://github.com/adrastia-oracle/" target="_blank">GitHub</a>
        <a href="https://discord.gg/sZP9SUBuSC" target="_blank">Discord</a>
      </TopNav>
      <div className="page">
        <SideNav />
        <main className="flex column">
          <Component {...pageProps} />
        </main>
        <TableOfContents toc={toc} />
      </div>
      <style jsx>
        {`
          .page {
            position: fixed; 
            top: var(--top-nav-height);
            display: flex;
            width: 100vw;
            flex-grow: 1;
          }
          main {
            overflow: auto;
            height: calc(100vh - var(--top-nav-height));
            flex-grow: 1;
            font-size: 16px;
            padding: 0 2rem 2rem;
          }
        `}
      </style>
    </>
  );
}
