import "../styles/global.css";

import { ChalengeProvider } from "../contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChalengeProvider>
      <Component {...pageProps} />
    </ChalengeProvider>
  );
}

export default MyApp;
