import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { productData } from './productsData';
import { CustomButton } from '../../utils/CustomButton';
import { Link } from 'react-router-dom';
import './productStyle.scss';
import { useTranslation } from 'react-i18next';

export const Product: React.FC = () => {
  const { t } = useTranslation();
  const newPath = '/calculation';
  return (
    <div className={`product_block`}>
      {productData.map((item) => (
        <div className="product" key={item.id} id={item.id}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{t(`services:titleVal.${item.name}`)}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {t(`services:servicesVal.${item.productDescription}`)}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
      <Typography variant="h6" align="center" gutterBottom>
        {t('services:costCalc')}
      </Typography>
      <Link to={newPath}>
        <CustomButton>{t('services:btnCalc')}</CustomButton>
      </Link>
      <img src="./assets/city.png" alt="" className="product_img" />
    </div>
  );
};
