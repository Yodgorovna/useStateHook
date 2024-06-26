import "./App.scss";
import { products, services, ruknlar, audioproducts } from "./data";
import { ServiceCard } from "./components/card/service-card";
import { ProductCard } from "./components/card/product-card";
import { RuknlarCard } from "./components/card/ruknlar-card";

function App() {
  return (
    <div className="p-3">
      <div className="flex gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} cardImg={service.cardImg} h1={service.h1} />
        ))}
      </div>

      <h1 className="section-title ">Рукнлар</h1>

      <div className="flex gap-6">
        {ruknlar.map((item, index) => {
          <RuknlarCard key={index} cardImg={item.cardImg} h1={item.h1} />;
        })}
      </div>
      <h1 className="section-title ">Янги қўшилганлар</h1>
      <div className="flex gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            cardImg={product.cardImg}
            title={product.title}
            janr={product.janr}
            starImg={product.starImg}
            headphone={product.headphone}
            book={product.book}
          />
        ))}
      </div>
      <h1 className="section-title">Аудио китоблар</h1>
      <div className="flex gap-6">
        {audioproducts.map((product, index) => (
          <ProductCard
            key={index}
            cardImg={product.cardImg}
            title={product.title}
            janr={product.janr}
            starImg={product.starImg}
            headphone={product.headphone}
            book={product.book}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
