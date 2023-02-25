import { Grid, Button } from "@nextui-org/react";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

function Header(props) {

  return (
    <header>
      <div className="header">

      <Grid.Container gap={2} justify="center">
        <Grid xs>
          <img className="header__logo" src=""></img>
        </Grid>
        <Grid xs={6}>
        <nav className="header__center">
          <ul>
            <li>
            <Button light color="primary" auto>
              Primary
            </Button>
            </li>
            <li>
            <Button light color="primary" auto>
              Primary
            </Button>
            </li>
            <li>
            <Button light color="primary" auto>
              Primary
            </Button>
            </li>
          </ul>
        </nav>
        </Grid>
        <Grid xs>
        <div className="header__menu">
        <LanguageDropdown languageActive={props.languageActive}  locales={props.locales}  locale={props.locale}></LanguageDropdown>
          </div>
        </Grid>
      </Grid.Container>
      </div>
    </header>
  )
  
}

export default Header