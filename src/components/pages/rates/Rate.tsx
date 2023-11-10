import { data } from '../../cards/data';
import { ModalWindowProps } from '../../utils/modalWindow/Modal';
import '../rates/rateStyle.scss';

export const Rate: React.FC<ModalWindowProps> = ({ handleOpen }) => {
  const handleOpenClick = () => {
    handleOpen();
  };

  return (
    <div className={`block`}>
      {data.map((item) => (
        <div key={item.title} className="rate">
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
