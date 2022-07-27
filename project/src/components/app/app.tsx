import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  favoriteCount: number;
  placeCount: number;
}

function App({ favoriteCount, placeCount }: AppScreenProps): JSX.Element {
  return (
    <MainPage
      favoriteCount={favoriteCount}
      placeCount={placeCount}
    />
  );
}

export default App;
