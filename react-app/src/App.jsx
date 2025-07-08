import Header from "./Header";
import Footer from "./Footer";
import Players from "./Players";
import Card from "./Card";
import Button from "./Button/Button";
import Button2 from "./Button2";
import Teachers from "./Teachers";
import Greeting from "./Greeting";
import List from "./List";
import ClickEvents from "./ClickEvents";
import ClickEvents2 from "./ClickEvents2";


function App() {

  return(
    <>
      <Header />
      <Greeting loggedIn = {true} user="Belal" />
      <Players />
      <Card />
      <Card />
      <Button />
      <Button2 />
      <Teachers name="Alex" lastName="Schmidt" age={23} />
      <Teachers name="John" lastName="Johnny" age={25} />
      <List />
      <ClickEvents />
      <ClickEvents2 />
      <Footer />
    </>
  );
}

export default App
