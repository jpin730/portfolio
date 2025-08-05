import type { Experience } from '../interfaces/experience'

export const EXPERIENCES: Experience[] = [
  {
    company: 'Cikume Software',
    position: 'Software Engineer',
    location: 'San Salvador, El Salvador (on-site)',
    dates: 'Apr 2024 - Present',
    description:
      'Developed a multitenant Angular shopping cart app from scratch, backed by Hasura (GraphQL) and PostgreSQL. Delivered REST APIs with NestJS, including dynamic database connections, a service supporting multiple payment gateways, Keycloak administration, and SendGrid email integration. Contributed to Angular SPAs for a U.S. labor compliance platform, ensuring consistent UI/UX and test coverage. Also led training initiatives and best practice adoption across teams.',
  },
  {
    company: 'Applaudo Studios',
    position: 'Frontend Developer',
    location: 'San Salvador, El Salvador (remote)',
    dates: 'Apr 2021 - Jul 2023',
    description:
      "Contributed to developing Angular applications, including a player and game statistics manager for an NBA team with a custom Angular Material implementation, and a credit management app for a retail company with i18n using ngx-translate and Jest tests. Participated in building internal tools like a reusable component library integrated into Applaudo Gatekeeper for auth management and a React/Next.js app for measuring employee seniority. Also collaborated as a trainer in Applaudo's Angular trainee program through consultations, interviews, and code reviews.",
  },
]
