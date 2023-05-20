/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';

const StyledDialogueDiv = styled.div`
  background: linear-gradient(to bottom, #00000083, #00000083, #00000083);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;

  .dialogue-div {
    background: linear-gradient(to bottom, #000000ce, #000000ce, #000000ce);
    color: #f5f5f5;
    width: 95vw;
    max-width: 340px;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 1rem 10px;

    .dialogue-btns {
      width: 100%;
      max-width: 200px;
      height: fit-content;
      margin: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .cancel-btn {
        background-color: #6ee374;
        color: #000;
        padding: 10px 15px;
        font-weight: 700;
      }

      .reset {
        background-color: #a52a2a;
        color: #f5f5f5;
        padding: 10px 15px;
        font-weight: 700;
      }
    }
  }
`;

const useDialogue = () => {
  const [dialogueDetails, setDialogueDetails] = React.useState({
    message1: '',
    message2: '',
    message3: '',
    agreeTxt: '',
    disagreeTxt: '',
    fxntoCall: null,
    show: false,
  });

  const clearDialogue = () =>
    setDialogueDetails({
      message1: '',
      message2: '',
      message3: '',
      agreeTxt: '',
      disagreeTxt: '',
      fxntoCall: null,
      show: false,
    });

  function DialogueComponent() {
    return (
      <StyledDialogueDiv
        onClick={() => setDialogueDetails((prev) => ({ ...prev, show: false }))}
      >
        <div className="dialogue-div">
          <p>{dialogueDetails?.message1}</p>
          <p>{dialogueDetails?.message2}</p>
          <p>{dialogueDetails?.message3}</p>

          <div className="dialogue-btns">
            <button
              className="cancel-btn"
              type="button"
              onClick={() => clearDialogue()}
            >
              {dialogueDetails?.disagreeTxt || 'Cancel'}
            </button>

            <button
              className="reset"
              type="button"
              onClick={() => {
                dialogueDetails?.fxntoCall();
                clearDialogue();
              }}
            >
              {dialogueDetails?.agreeTxt || 'proceed'}
            </button>
          </div>
        </div>
      </StyledDialogueDiv>
    );
  }

  const displayDialogue = (options) => {
    setDialogueDetails({ ...options, show: true });
  };

  return { DialogueComponent, dialogueDetails, displayDialogue };
};

export default useDialogue;
