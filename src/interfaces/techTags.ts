type TechTagKey =
  | 'angular'
  | 'bootstrap'
  | 'firebase'
  | 'graphql'
  | 'jasmine'
  | 'jest'
  | 'msSqlServer'
  | 'nestJs'
  | 'postgreSql'
  | 'sass'
  | 'tailwindCss'
  | 'typeOrm'

type AstroComponent = (_props: Record<string, unknown>) => unknown

interface TechTagValue {
  name: string
  class: string
  icon: AstroComponent
}

export type TechTags = {
  [key in TechTagKey]: TechTagValue
}
