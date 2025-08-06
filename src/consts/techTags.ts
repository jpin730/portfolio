import Angular from '../icons/Angular.astro'
import Bootstrap from '../icons/Bootstrap.astro'
import Firebase from '../icons/Firebase.astro'
import GraphQL from '../icons/GraphQL.astro'
import Jasmine from '../icons/Jasmine.astro'
import Jest from '../icons/Jest.astro'
import MsSqlServer from '../icons/MsSqlServer.astro'
import NestJs from '../icons/NestJs.astro'
import PostgreSql from '../icons/PostgreSql.astro'
import Sass from '../icons/Sass.astro'
import TailwindCss from '../icons/TailwindCss.astro'
import TypeOrm from '../icons/TypeOrm.astro'
import type { TechTags } from '../interfaces/techTags'

export const TECH_TAGS: TechTags = {
  angular: {
    name: 'Angular',
    class: 'bg-red-700 text-white',
    icon: Angular,
  },
  bootstrap: {
    name: 'Bootstrap',
    class: 'bg-purple-700 text-white',
    icon: Bootstrap,
  },
  firebase: {
    name: 'Firebase',
    class: 'bg-yellow-700 text-white',
    icon: Firebase,
  },
  graphql: {
    name: 'GraphQL',
    class: 'bg-pink-600 text-white',
    icon: GraphQL,
  },
  jasmine: {
    name: 'Jasmine',
    class: 'bg-emerald-700 text-white',
    icon: Jasmine,
  },
  jest: {
    name: 'Jest',
    class: 'bg-rose-900 text-white',
    icon: Jest,
  },
  msSqlServer: {
    name: 'MS SQL Server',
    class: 'bg-sky-800 text-white',
    icon: MsSqlServer,
  },
  nestJs: {
    name: 'NestJS',
    class: 'bg-red-700 text-white',
    icon: NestJs,
  },
  postgreSql: {
    name: 'PostgreSQL',
    class: 'bg-blue-800 text-white',
    icon: PostgreSql,
  },
  sass: {
    name: 'Sass',
    class: 'bg-pink-600 text-white',
    icon: Sass,
  },
  tailwindCss: {
    name: 'Tailwind CSS',
    class: 'bg-sky-800 text-white',
    icon: TailwindCss,
  },
  typeOrm: {
    name: 'TypeORM',
    class: 'bg-purple-600 text-white',
    icon: TypeOrm,
  },
}
