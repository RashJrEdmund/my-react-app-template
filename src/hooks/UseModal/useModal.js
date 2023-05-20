/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import StyledItemModal from './StyledItemModal';

function ItemModal({ itemModal, clearModal }) {
  const { items, start } = itemModal;

  const [ind, setind] = React.useState(start);

  const handleMotion = (direction) => {
    const end = items.length;
    if (direction === 'forward') {
      setind((prev) => Math.floor((prev + 1) % end));
    } else {
      setind((prev) => (ind <= 0 ? items.length - 1 : prev - 1));
    }
  };

  return (
    <StyledItemModal>
      <div className="item_modal_overlay" onClick={clearModal} />

      <div className="item_modal_holder">
        <button type="button" className="backward_btn" onClick={handleMotion}>
          <MdKeyboardArrowLeft />
        </button>

        <div className="item_container">
          <span className="item_no">item: {ind + 1}</span>
          {items[ind].image_url && (
            <div
              className="image_div"
              style={{ backgroundImage: `url(${items[ind]?.image_url})` }}
            />
          )}

          <div className="info_div">
            <h3>{items[ind]?.name}</h3>

            <p>{items[ind]?.description}</p>
          </div>
        </div>

        <button
          type="button"
          name="forward"
          className="forward_btn"
          onClick={() => handleMotion('forward')}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </StyledItemModal>
  );
}

const useModal = () => {
  const [itemModal, setItemModal] = React.useState({
    items: [],
    start: 0,
    show: false,
  });

  const clearModal = () =>
    setItemModal({
      items: {},
      start: 0,
      show: false,
    });

  function ModalComponent() {
    return (
      <ItemModal
        itemModal={itemModal}
        setItemModal={setItemModal}
        clearModal={clearModal}
      />
    );
  }

  const mountItemModal = (ind, items) => {
    setItemModal({
      items,
      show: true,
      start: +ind,
    });
  };

  return { ModalComponent, itemModal, mountItemModal };
};

export default useModal;
