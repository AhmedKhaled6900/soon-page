
import { useTranslation } from 'react-i18next';
import NavbarBase from './nabbarBase';
interface Props {
    lang: string;
}
const Navbar:React.FC<Props> = async ({lang}) => {

    const { t } = await useTranslation("navbar")
    // useEffect(() => {
    //     i18n.changeLanguage(lang);
    //   }, [lang, i18n]);
    return ( 
<div>
<NavbarBase t={t} lang={lang} ></NavbarBase>
</div>

      );
}
 
export default Navbar; 