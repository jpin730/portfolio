import type { Project } from '../interfaces/Project'
import { TECH_TAGS } from './techTags'

export const PROJECTS: Project[] = [
  {
    title: 'LCPTracker V3 MVP',
    years: '2025',
    description:
      'Contributed to Angular apps for a U.S. labor compliance tracker, ensuring consistent UI/UX with a custom Angular Material theme and unit tests using Jasmine and Karma.',
    image: '/projects/shots-lcptracker.webp',
    link: 'https://lcptracker.com',
    github: null,
    isConfidential: true,
    tags: [TECH_TAGS.angular, TECH_TAGS.graphql, TECH_TAGS.tailwindCss, TECH_TAGS.jasmine],
  },
  {
    title: 'Elecate Shopping Cart',
    years: '2024 - 2025',
    description:
      'Multitenant Angular shopping cart app for catheter supplies with configurable flows, backed by Hasura (GraphQL) and PostgreSQL.',
    image: '/projects/shots-elecate.webp',
    link: 'https://elecate.com',
    github: null,
    isConfidential: true,
    tags: [TECH_TAGS.angular, TECH_TAGS.graphql, TECH_TAGS.tailwindCss, TECH_TAGS.postgreSql],
  },
  {
    title: 'Elecate Business Tools',
    years: '2024 - 2025',
    description:
      'Multiple REST API endpoints with NestJS, including support for various payment gateways using the Strategy pattern, dynamic TypeORM database connections (PostgreSQL and SQL Server), Keycloak administration, and SendGrid email integration.',
    image: '/projects/shots-elecate.webp',
    link: 'https://elecate.com',
    github: null,
    isConfidential: true,
    tags: [TECH_TAGS.nestJs, TECH_TAGS.typeOrm, TECH_TAGS.postgreSql, TECH_TAGS.msSqlServer],
  },
  {
    title: 'Unicomer Group SmartCredit/Workflows',
    years: '2021 - 2023',
    description:
      'Angular MVP for credit management in a multinational retail company, with reusable components, i18n via ngx-translate, and unit tests using Jest.',
    image: '/projects/shots-unicomer.webp',
    link: 'https://grupounicomer.com',
    github: null,
    isConfidential: true,
    tags: [TECH_TAGS.angular, TECH_TAGS.jest, TECH_TAGS.sass],
  },
  {
    title: 'Miami Heat Basketball Operations',
    years: '2021',
    description:
      "Angular app for managing NBA team stats, using custom Angular Material components aligned with the team's brand.",
    image: '/projects/shots-miami-heat.webp',
    link: 'https://www.nba.com/heat',
    github: null,
    isConfidential: true,
    tags: [TECH_TAGS.angular, TECH_TAGS.sass],
  },
  {
    title: 'Lirios del Valle - Flower Arrangements Catalog',
    years: '2022',
    description:
      'Real CMS for flower arrangement catalog (Mobile first). Using Angular as frontend and Firebase for Hosting, Database, Image Cloud Storage and Authentication.',
    image: '/projects/shots-lirios-del-valle.webp',
    link: 'https://liriosdelvalle.com',
    github: null,
    isConfidential: false,
    tags: [TECH_TAGS.angular, TECH_TAGS.firebase, TECH_TAGS.bootstrap],
  },
]
