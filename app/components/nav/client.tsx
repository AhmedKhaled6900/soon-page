'use client'

import { useTranslation } from '../../i18n/client'
import NavbarBase from './nabbarBase'
// import { FooterBase } from './FooterBase'
// import { useTranslation } from '../../../i18n/client'

interface Props {
    lang: string
}
export const Navbar: React.FC<Props> = ({ lang }) => {
  const { t } = useTranslation(lang, 'navbar')
  return( 
     <NavbarBase t={t} lang={lang} />
    )

}
