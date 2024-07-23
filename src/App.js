import './App.css';
import Logos from './Logos';

import image1 from "./Images/image1.png";
import image2 from "./Images/image2.png";
import image3 from "./Images/image3.png";
import image4 from "./Images/image4.png";
import image5 from "./Images/image5.png";
import image6 from "./Images/image6.png";
import image7 from "./Images/image7.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,

].map((image) => ({
  id: crypto.randomUUID(),
  image
}))


function App() {
  return (
    <div className="App">
      <Logos  images = {images} speed = {2000} />
    </div>
  );
}

export default App;
