'use client'

import { useTranslation } from '../../i18n/client'
import CountdownTimer from './soonBase'
// import NavbarBase from './nabbarBase'
// import { FooterBase } from './FooterBase'
// import { useTranslation } from '../../../i18n/client'

interface Props {
    lang: string
}
export const SoonCounter: React.FC<Props> = ({ lang }) => {
  const { t } = useTranslation(lang, 'soon')
  return( 
      <CountdownTimer t={t} lang={lang} />
    )

}
