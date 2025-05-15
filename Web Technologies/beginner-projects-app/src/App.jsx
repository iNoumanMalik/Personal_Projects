import "./App.css";
import Accordian from "./Component/Accordian";
import RandomColor from "./Component/RandomColor";
import StartRating from "./Component/StartRating";
import ImageSlider from "./Component/ImageSlider";
import ImageSlider2 from "./Component/ImageSlider2";
import Practise from "./Component/Practise";
import JokeGenerator from "./Component/JokeGenerator";
import LoadMore from "./Component/LoadMore";
import LoadMore2 from "./Component/LoadMore2";
function App() {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StartRating/>
      <JokeGenerator/>
      {/* <ImageSlider/> */}
      <ImageSlider2/>
      {/* <LoadMore  itemsToDisplay = {3}/> */}
      <LoadMore2 itemsToDisplay = {4}/>
    </>
  );
}

export default App;
 