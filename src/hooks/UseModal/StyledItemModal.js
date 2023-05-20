import styled from '@emotion/styled';

const StyledItemModal = styled.div`
  .item_modal_overlay {
    background-color: #00000099;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 6;
  }

  .item_modal_holder {
    background: #000;
    padding: 14px 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 97vw;
    max-width: 700px;
    height: fit-content;
    min-height: 400px;
    transform: translate(-50%, -50%);
    z-index: 7;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .item_no {
      color: #f5f5f5;
      position: fixed;
      top: 0;
      right: 0;
      margin: 14px 1rem;
    }

    button {
      background: #00000097;
      position: fixed;
      top: 50%;
      transform: translate(0, -50%) scale(5.6);
      color: #a52a2a;

      &.backward_btn {
        right: calc(100% + 40px);
      }

      &.forward_btn {
        left: calc(100% + 40px);
      }
    }

    .item_container {
      color: #f5f5f5;
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: center;
      gap: 4px;

      .image_div {
        height: 300px;
        width: 300px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }

      .info_div {
        width: 97%;
        margin: 0 5px;

        h3 {
          margin: 0 0 13px;
          padding: 0 0 10px;
          border-bottom: 1px solid grey;
        }

        p {
          line-height: 25px;
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .item_modal_holder {
      button {
        top: calc(100% + 25px);
        transform: scale(3.6);

        &.backward_btn {
          right: calc(50% + 50px);
        }

        &.forward_btn {
          left: calc(50% + 50px);
        }
      }

      .item_container {
        flex-direction: column;
        overflow: auto;
        max-height: 80vh;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }

        .image_div {
          height: 290px;
          min-height: 290px;
          width: 290px;
          min-width: 290px;
        }

        .info_div {
          width: 97%;
          margin: 0 5px;

          h3 {
            margin: 15px 0 10px;
          }

          p {
            line-height: 25px;
            width: 100%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .item_modal_holder {
      button {
        top: 100%;
        transform: scale(2.6);
      }

      .item_container {
        max-height: 550px;

        .image_div {
          height: 220px;
          min-height: 220px;
          width: 220px;
          min-width: 220px;
        }
      }
    }
  }
`;

export default StyledItemModal;
