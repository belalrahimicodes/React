import Header from "./Header";
import Footer from "./Footer";
import Players from "./Players";
import Card from "./Card";
import Button from "./Button/Button";
import Button2 from "./Button2";
import Teachers from "./Teachers";

function App() {

  return(
    <>
      <Header />
      <Players />
      <Card />
      <Card />
      <Button />
      <Button2 />
      <Teachers name="Alex" lastName="Schmidt" age={23} />
      <Teachers name="John" lastName="Johnny" age={25} />
      <Footer />
    </>
  );
}

export default App
