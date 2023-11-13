import { data } from '../../cards/data';
import { ModalWindowProps } from '../../utils/modalWindow/Modal';
import { useEffect } from 'react';
import '../rates/rateStyle.scss';
import { useLocation } from 'react-router-dom';

export const Rate: React.FC<ModalWindowProps> = ({ handleOpen }) => {
  const { state } = useLocation();
  useEffect(() => {
    const scrollToRef = (id: string) => {
      const element = document.querySelector(`#${id}`);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (state?.blockId) {
      scrollToRef(state.blockId);
    }
  }, [state]);

  const handleOpenClick = () => {
    handleOpen();
  };

  return (
    <div className={`block`}>
      {data.map((item) => (
        <div key={item.id} className="rate" id={item.id}>
          <div className="rate_info">
            <div className="rate_icon">
              {item.image ? (
                <img
                  src={item.image.url}
                  alt={item.image.alt}
                  className="rates_icons"
                />
              ) : (
                <span>No image available</span>
              )}
            </div>
            <div className="rate_card">
              <div className="advantages_title text">{item.title} </div>
              <div>{item.quantity}</div>
              <div>
                {'Цена '}
                {item.price} {item.timeline}
              </div>
            </div>
          </div>
          <div className="rate_description">{item.description}</div>

          <button
            className="button_order button_bottom"
            onClick={handleOpenClick}
          >
            Заказать
          </button>
        </div>
      ))}
    </div>
  );
};
