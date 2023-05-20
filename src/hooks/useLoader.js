/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';
import loadingIcon from './assets/loading-icon.svg';

const StyledLoadingAmin = styled.div`
  position: fixed;
  background: linear-gradient(to bottom, #00000067, #00000067, #00000067);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  .loading_container {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(to bottom, #00000091, #00000091, #00000091);
    width: fit-content;
    height: fit-content;
    padding: 1rem 5rem;
    border-radius: 10px;
    color: #f5f5f5;
    font-weight: 500;
    letter-spacing: 2px;
    z-index: 10;

    @keyframes loadingAnime {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }

    img {
      animation: loadingAnime;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;

      width: 50px;
      height: 50px;
      margin: 10px 0 1rem;
    }
  }
`;

const useLoader = () => {
  const [loadingAnime, setLoadingAnime] = React.useState({
    show: false,
    message: '',
  });

  function LoadingComponent() {
    return (
      <StyledLoadingAmin>
        <div className="loading_container">
          <img src={loadingIcon} alt="Image_loading_icon" />
          <p>{loadingAnime.message || 'loading...'}</p>
        </div>
      </StyledLoadingAmin>
    );
  }

  return { LoadingComponent, setLoadingAnime, loadingAnime };
};

export default useLoader;
