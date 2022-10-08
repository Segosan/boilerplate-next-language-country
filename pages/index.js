import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next';
import Header from "../components/Header/Header";

export async function getStaticProps({locale,locales}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['web'])),
      locale,
      locales
    },
  };
}

export default function Home(props) {
  const {t} = useTranslation();
  const languageActive = t('web:header_language');
  return (
    <div>
      <Header languageActive={languageActive} locales={props.locales} locale={props.locale}></Header>
      <h1>{t('web:welcome_message')}</h1>
    </div>
  )
  
}
