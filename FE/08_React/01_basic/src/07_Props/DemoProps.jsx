import ExWithMap from "./Ex01_Map_Props/ExWithMap";
import ViewDetail from './Ex02_ViewDetail/ViewDetail';
import ProductCard from "./ProductCard";
import PropChildren from "./PropChildren";

const DemoProps = () => {
  const product = {
    id: 1,
    name: "iphone",
    price: 1000,
    img: "https://picsum.photos/200/200",
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Section 07: Props</h1>
      <h3>Example:</h3>
      <div className="w-25">
        <ProductCard prod={product} />
      </div>

      <h3>Example: Props children</h3>
      <PropChildren>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisic</p>
      </PropChildren>

      <h3>Exercise: Map and Props</h3>
      <ExWithMap />
      
      <ViewDetail/>
    </div>
  );
};

export default DemoProps;
