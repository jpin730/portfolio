import { ContactInfo } from '../enums/contactInfo'
import Email from '../icons/Email.astro'
import GitHub from '../icons/GitHub.astro'
import LinkedIn from '../icons/LinkedIn.astro'
import type { ContactLink } from '../interfaces/ContactLink'

export const CONTACT_LINKS: ContactLink[] = [
  {
    href: ContactInfo.LinkedIn,
    label: 'LinkedIn',
    icon: LinkedIn,
  },
  {
    href: ContactInfo.Github,
    label: 'GitHub',
    icon: GitHub,
  },
  {
    href: `mailto:${ContactInfo.Email}`,
    label: 'Email',
    icon: Email,
  },
]
