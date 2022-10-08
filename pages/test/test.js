import {useTranslation} from 'next-i18next';
import Header from "../../components/Header/Header";

export default function Test(props) {
  const {t} = useTranslation();

  return (
    <div>
      <h1>{t('web:welcome_message')}</h1>
      <div></div>
    </div>
  )
}
