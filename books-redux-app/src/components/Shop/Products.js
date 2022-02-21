import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_DATA = [
  {
    id: "p1",
    titke: "My first book",
    price: 6,
    description: "the first book I ever wrote",
  },
  {
    id: "p3",
    titke: "My first book",
    price: 5,
    description: "the second book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((p) => {
          return (
            <ProductItem
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              description={p.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
