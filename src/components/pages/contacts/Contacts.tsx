import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import AccountantsData from './AccountantsData';
import { dataPeople } from './DataPeople';
import { Person } from './ContactsTypes';
import '../contacts/contacts.scss';

export function Contacts({ data }: { data: Person[] }) {
  return (
    <>
      <div className="contacts container">
        <Header />
        <main className="main_contacts">
          <p className="contacts-description section_text">
            Наши сотрудники готовы оказать всестороннюю помощь и поддержку в
            решении любых Ваших вопросов. Высококлассные специалисты разберутся
            с проблемой любой сложности в кратчийшие сроки.
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
