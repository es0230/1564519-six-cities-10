import Header from '../header/header';

function LoadingScreen(): JSX.Element {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: 'center', marginTop: '300px' }}>Loading...</h1>
    </>
  );
}

export default LoadingScreen;
