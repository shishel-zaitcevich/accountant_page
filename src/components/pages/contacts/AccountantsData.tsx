import React from 'react';
import DataTable from './DataTable';
import { Person } from './ContactsTypes';

interface AccountantsDataProps {
  data: Person[];
}

const AccountantsData: React.FC<AccountantsDataProps> = ({ data }) => {
  return (
    <div>
      <DataTable data={data} />
    </div>
  );
};

export default AccountantsData;
