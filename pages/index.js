import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['web'])),
    },
  };
}

export default function Home(props) {
  const {t} = useTranslation();

  return (
    <div>
      <h1>{t('web:welcome_message')}</h1>
      <div></div>
    </div>
  )
}
