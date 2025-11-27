import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/dazzleduck-website/fr/about',
    component: ComponentCreator('/dazzleduck-website/fr/about', '095'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog',
    component: ComponentCreator('/dazzleduck-website/fr/blog', 'bc2'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/',
    component: ComponentCreator('/dazzleduck-website/fr/blog/', '0b8'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/architecture-inside-duck',
    component: ComponentCreator('/dazzleduck-website/fr/blog/architecture-inside-duck', '7d3'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/archive',
    component: ComponentCreator('/dazzleduck-website/fr/blog/archive', '431'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/authors',
    component: ComponentCreator('/dazzleduck-website/fr/blog/authors', 'c25'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/community-roadmap',
    component: ComponentCreator('/dazzleduck-website/fr/blog/community-roadmap', 'a24'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/extending-dazzle-duck',
    component: ComponentCreator('/dazzleduck-website/fr/blog/extending-dazzle-duck', 'e0d'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/introducing-dazzle-duck',
    component: ComponentCreator('/dazzleduck-website/fr/blog/introducing-dazzle-duck', '2c9'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/tags',
    component: ComponentCreator('/dazzleduck-website/fr/blog/tags', 'e1e'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/tags/blog',
    component: ComponentCreator('/dazzleduck-website/fr/blog/tags/blog', 'ac5'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/tags/blog/tags/announcement',
    component: ComponentCreator('/dazzleduck-website/fr/blog/tags/blog/tags/announcement', '493'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/tags/blog/tags/architecture',
    component: ComponentCreator('/dazzleduck-website/fr/blog/tags/blog/tags/architecture', '1af'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/tags/blog/tags/community',
    component: ComponentCreator('/dazzleduck-website/fr/blog/tags/blog/tags/community', '038'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/tags/blog/tags/extensions',
    component: ComponentCreator('/dazzleduck-website/fr/blog/tags/blog/tags/extensions', 'ab7'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/tags/blog/tags/roadmap',
    component: ComponentCreator('/dazzleduck-website/fr/blog/tags/blog/tags/roadmap', '825'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/tags/blog/tags/sql',
    component: ComponentCreator('/dazzleduck-website/fr/blog/tags/blog/tags/sql', '1e5'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/tags/dazzle-duck',
    component: ComponentCreator('/dazzleduck-website/fr/blog/tags/dazzle-duck', 'ddc'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/tags/plugins',
    component: ComponentCreator('/dazzleduck-website/fr/blog/tags/plugins', '7c8'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/blog/tags/updates',
    component: ComponentCreator('/dazzleduck-website/fr/blog/tags/updates', '036'),
    exact: true
  },
  {
    path: '/dazzleduck-website/fr/docs',
    component: ComponentCreator('/dazzleduck-website/fr/docs', '897'),
    routes: [
      {
        path: '/dazzleduck-website/fr/docs',
        component: ComponentCreator('/dazzleduck-website/fr/docs', '0fc'),
        routes: [
          {
            path: '/dazzleduck-website/fr/docs',
            component: ComponentCreator('/dazzleduck-website/fr/docs', '9d1'),
            routes: [
              {
                path: '/dazzleduck-website/fr/docs/about',
                component: ComponentCreator('/dazzleduck-website/fr/docs/about', 'c14'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/dazzleduck-website/fr/docs/category/quickstart',
                component: ComponentCreator('/dazzleduck-website/fr/docs/category/quickstart', '497'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/dazzleduck-website/fr/docs/category/setup--deployment',
                component: ComponentCreator('/dazzleduck-website/fr/docs/category/setup--deployment', '0cc'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/dazzleduck-website/fr/docs/intro',
                component: ComponentCreator('/dazzleduck-website/fr/docs/intro', '477'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/dazzleduck-website/fr/docs/quick-start/configuration',
                component: ComponentCreator('/dazzleduck-website/fr/docs/quick-start/configuration', '467'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/dazzleduck-website/fr/docs/quick-start/installation',
                component: ComponentCreator('/dazzleduck-website/fr/docs/quick-start/installation', '2c3'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/dazzleduck-website/fr/docs/quick-start/project-setup/deploy',
                component: ComponentCreator('/dazzleduck-website/fr/docs/quick-start/project-setup/deploy', '680'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/dazzleduck-website/fr/docs/quick-start/project-setup/setup',
                component: ComponentCreator('/dazzleduck-website/fr/docs/quick-start/project-setup/setup', 'acd'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/dazzleduck-website/fr/docs/quick-start/quickstart',
                component: ComponentCreator('/dazzleduck-website/fr/docs/quick-start/quickstart', 'cb0'),
                exact: true,
                sidebar: "docSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/dazzleduck-website/fr/',
    component: ComponentCreator('/dazzleduck-website/fr/', '99d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
