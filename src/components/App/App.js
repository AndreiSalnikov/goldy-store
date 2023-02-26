import './App.scss';
import Header from "../Header/Header"
import Main from "../Main/Main";
import Categories from "../Сategories/Сategories";
import Sales from "../Sales/Sales";
import Discount from "../Discount/Discount";
import ProductDay from "../ ProductDay/ProductDay";
import Articles from "../Articles/Articles";

function App() {
  return (
    <div className='app'>
      <Header>
      </Header>
      <Main>
      </Main>
      <Categories>
      </Categories>
      <Sales></Sales>
      <Discount></Discount>
      <ProductDay></ProductDay>
      <Articles></Articles>
    </div>
  );
}

export default App;
