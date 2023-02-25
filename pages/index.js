import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next';
import Header from "../components/Header/Header";
import {Container, Grid } from "@nextui-org/react";
import OfferCard from "../components/OfferCard/OfferCard";

// This gets called on every request
export async function getServerSideProps({locale,locales}) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:1337/api/offer-cards?locale=${locale}`)
  const data = await res.json()
  // Pass data to the page via props
  return {
    props: {
      ...(await serverSideTranslations(locale, ['web'])),
      locale,
      locales,
      data
    },
  };
}

export default function Home(props) {
  const {t} = useTranslation();
  const languageActive = t('web:header_language');
  const objectCards = props.data;
  const cards = objectCards.data;

  return (
    <div>
        <Header languageActive={languageActive} locales={props.locales} locale={props.locale}></Header>
        <Container>
        <h1>{t('web:welcome_message')}</h1>

        <Grid.Container justify="center">
          <Grid>
            {cards.map((card) => (
              <OfferCard card={card} key={card.id}/>
            ))}   
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
  
}
