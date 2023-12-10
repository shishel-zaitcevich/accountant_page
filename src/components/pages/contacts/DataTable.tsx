import React from 'react';
import { Person } from './ContactsTypes';
import { useTranslation } from 'react-i18next';
import '../contacts/dataTable.scss';

interface TableProps {
  data: Person[];
}

const DataTable: React.FC<TableProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <table className="table">
      <tbody>
        {data.map((person, index) => (
          <React.Fragment key={index}>
            <tr className="row">
              <td className="cell table_header">{t('contacts:name')}:</td>
              <td className="cell">{t(`contacts:nameVal.${person.name}`)}</td>
            </tr>
            <tr className="row">
              <td className="cell table_header">{t('contacts:education')}:</td>
              <td className="cell">
                {t(`contacts:educationVal.${person.education}`)}
              </td>
            </tr>

            <tr className="row">
              <td className="cell table_header">
                {t('contacts:functionality')}:
              </td>

              <td className="cell">
                {t(`contacts:funcVal.${person.functionality}`)}
              </td>
            </tr>
            <tr className="row">
              <td className="cell table_header">{t('contacts:phone')}:</td>
              <td className="cell">
                <a href="tel:+1234567890" className="link">
                  {person.phone}
                </a>
              </td>
            </tr>
            <tr className="row">
              <td className="cell table_header">{t('contacts:email')}:</td>
              <td className="cell">
                <a href="mailto:example@example.com" className="link">
                  {person.email}
                </a>
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
