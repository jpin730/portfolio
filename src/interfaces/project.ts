import type { TechTags } from './techTags'

export interface Project {
  title: string
  description: string
  image: string
  years: string
  link: string | null
  github: string | null
  isConfidential: boolean
  tags: TechTags[keyof TechTags][]
}
