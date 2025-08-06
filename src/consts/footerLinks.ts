import { ContactInfo } from '../enums/contactInfo'
import type { FooterLink } from '../interfaces/footerLink'

export const FOOTER_LINKS: FooterLink[] = [
  {
    href: `mailto:${ContactInfo.Email}`,
    label: 'Email',
  },
  {
    href: ContactInfo.LinkedIn,
    label: 'LinkedIn',
  },
  {
    href: ContactInfo.Github,
    label: 'GitHub',
  },
]
