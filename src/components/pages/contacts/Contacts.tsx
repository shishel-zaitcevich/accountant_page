import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import AccountantsData from './AccountantsData';
import { dataPeople } from './DataPeople';
import { Person } from './ContactsTypes';
import '../contacts/contacts.scss';
import { useTranslation } from 'react-i18next';

export function Contacts({ data }: { data: Person[] }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="contacts container">
        <Header />
        <main className="main_contacts">
          <p className="contacts-description section_text">
            {t('contacts:contactsDescription')}
          </p>
          <div className="buh">
            <img src="./assets/buh1.png" alt="" className="buh-img1" />
            <div className="buh-description1 section_text">
              <AccountantsData data={[dataPeople[0]]} />
            </div>
          </div>
          <div className="buh">
            <div className="buh-description2 section_text">
              <AccountantsData data={[dataPeople[1]]} />
            </div>
            <img src="./assets/buh2.png" alt="" className="buh-img2" />
          </div>
          {/* <div className="buh">
            <img src="./assets/buh3.png" alt="" className="buh-img1" />
            <div className="buh-description1 section_text">
              <AccountantsData data={[dataPeople[0]]} />
            </div>
          </div> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
