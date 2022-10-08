import { Dropdown } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function LanguageDropdown(props) {
  return (
    <Dropdown>
      <Dropdown.Button flat>Language</Dropdown.Button>
      <Dropdown.Menu aria-label="Languages">

      {props.locales.map((locale) => {  
          
           return (
            <Dropdown.Item key={locale}>
              <Link className={locale == props.locale ? "active" : ""} href={locale} locale={locale}>
                  {locale}
              </Link>
            </Dropdown.Item>
           ) 
        })}

      </Dropdown.Menu>
    </Dropdown>
  );
}
