import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Welcome',
    links: [
      {
        href: '/',
        children: 'Overview'
      },
    ],
  },
  {
    title: 'Fundamentals',
    links: [
      {
        href: '/fundamentals/motivation',
        children: 'Motivation'
      },
      {
        href: '/fundamentals/economics',
        children: 'Economics'
      },
      {
        href: '/fundamentals/roadmap',
        children: 'Roadmap'
      }
    ],
  },
  {
    title: 'Structure',
    links: [
      {
        href: '/structure/contracts',
        children: 'Contracts'
      },
      {
        href: '/structure/updaters',
        children: 'Updaters'
      }
    ],
  },
  {
    title: 'Deployments',
    links: [
      {
        href: '/deployments/arbitrum',
        children: 'Arbitrum'
      },
      {
        href: '/deployments/ethereum',
        children: 'Ethereum'
      },
      {
        href: '/deployments/evmos',
        children: 'Evmos'
      },
      {
        href: '/deployments/optimism',
        children: 'Optimism'
      },
      {
        href: '/deployments/polygon',
        children: 'Polygon'
      }
    ],
  },
  {
    title: 'Security',
    links: [
      {
        href: '/security/attack-vectors',
        children: 'Attack vectors'
      },
      {
        href: '/security/disclosures',
        children: 'Disclosures'
      },
    ],
  },
  {
    title: 'Data feeds',
    links: [
      {
        href: '/data-feeds/sponsoring',
        children: 'Sponsoring'
      },
      {
        href: '/data-feeds/consuming',
        children: 'Consuming'
      }
    ],
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <span>{item.title}</span>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link}>
                    <a href={link.href}>{link.children}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2.5rem 2rem 2rem;
            border-right: 1px solid var(--border-color);
          }
          span {
            font-size: larger;
            font-weight: 500;
            padding: 0.5rem 0 0.5rem;
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            margin: 0;
            padding-left: 16px;
            padding-bottom: 16px;
            font-weight: 300;
          }
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active > a {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}
