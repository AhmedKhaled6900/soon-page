
import { useTranslation } from 'react-i18next';
import CountdownTimer from './soonBase';
interface Props {
    lang: string;
}
const Soon:React.FC<Props> = async ({lang}) => {

    const { t } = await useTranslation("soon")
    // useEffect(() => {
    //     i18n.changeLanguage(lang);
    //   }, [lang, i18n]);
    return ( 
<div>
<CountdownTimer t={t} lang={lang} ></CountdownTimer>
</div>

      );
}
 
export default Soon; 