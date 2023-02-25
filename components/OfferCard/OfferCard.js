import { Card, Grid, Text, Link } from "@nextui-org/react";

export default function OfferCard(props) {
    const card = props.card
  return (
        <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
            <img
                alt={props.card.attributes.Title}
                src="https://w7.pngwing.com/pngs/792/230/png-transparent-binance-macos-bigsur-icon.png"
                width="34px"
                height="34px"
            />
            <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                {props.card.attributes.Title}
                </Text>
                </Grid>
            </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
            <Text>
            {props.card.attributes.Description}
            </Text>
            </Card.Body>
            <Card.Footer>
            <Link
                icon
                color="primary"
                target="_blank"
                href={props.card.attributes.Link}
            >
                Visitar sitio
            </Link>
            </Card.Footer>
        </Card>
  );
}