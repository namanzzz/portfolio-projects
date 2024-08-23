import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
        {/* Accordian component */}
        {/* <Accordian /> */}

        {/* Random color component */}
        {/* <RandomColor /> */}

        {/* Star Rating */}
        {/* <StarRating noOfStars={10}/> */}
   
      {/* Image slider */}
      {/* <ImageSlider url = {'https://picsum.photos/v2/list'} limit={15} page={2}/> */}


      {/* QR code generator */}
      <QRCodeGenerator />
    </div>
  );
}

export default App;
