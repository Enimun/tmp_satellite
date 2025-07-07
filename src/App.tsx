import {memo} from "react";
import ProductCard from "./components/ProductCard";


const App = memo(() => {
  return <ProductCard
    title="Поле"
    origin="Россия"
    price={1000000000}
    currency="RUB"
    imageUrl="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
  />
});

export default App;
