import type { TechTags } from './TechTags'

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
