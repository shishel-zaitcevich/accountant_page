import React from 'react';
import { Person } from './ContactsTypes';
import '../contacts/dataTable.scss';

interface TableProps {
  data: Person[];
}

const DataTable: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="table">
      <tbody>
        {data.map((person, index) => (
          <React.Fragment key={index}>
            <tr className="row">
              <td className="cell table_header">Имя:</td>
              <td className="cell">{person.name}</td>
            </tr>
            <tr className="row">
              <td className="cell table_header">Образование:</td>
              <td className="cell">{person.education}</td>
            </tr>
            <tr className="row">
              <td className="cell table_header">Функционал:</td>
              <td className="cell">{person.functionality}</td>
            </tr>
            <tr className="row">
              <td className="cell table_header">Телефон:</td>
              <td className="cell">{person.phone}</td>
            </tr>
            <tr className="row">
              <td className="cell table_header">E-mail:</td>
              <td className="cell">{person.email}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
