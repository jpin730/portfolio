import type { AstroComponent } from '../types/astroComponent'

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

interface TechTagValue {
  name: string
  class: string
  icon: AstroComponent
}

export type TechTags = {
  [key in TechTagKey]: TechTagValue
}
