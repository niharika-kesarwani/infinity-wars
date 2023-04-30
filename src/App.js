import React from "react";
import "./styles.css";

import faker from "faker";

faker.seed(123);

const data = [...Array(50)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale",
  ]),
  idealFor: faker.random.arrayElement([
    "Men",
    "Women",
    "Girl",
    "Boy",
    "Senior",
  ]),
  level: faker.random.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional",
  ]),
  color: faker.commerce.color(),
}));

export default function App() {
  return (
    <div className="App">
      <div className="searchInput">
        <label>
          Search: <input placeholder="Search By Name" />
        </label>
        <button>Search Data</button>
      </div>
      <fieldset className="radioInput">
        <legend>Sort By</legend>
        <label>
          <input type="radio" name="radio" />
          Price - High to Low
        </label>
        <label>
          <input type="radio" name="radio" />
          Price - Low to High
        </label>
      </fieldset>
      <fieldset className="checkBoxInput">
        <legend>Filters</legend>
        <label>
          <input type="checkbox" />
          Include Out of Stock
        </label>
        <label>
          <input type="checkbox" />
          Fast Delivery Only
        </label>
      </fieldset>
      <div className="products">
        {data.map(
          ({
            id,
            name,
            image,
            price,
            productName,
            inStock,
            level,
            fastDelivery,
          }) => (
            <div key={id} className="product">
              <img src={image} alt={productName} />
              <h3> {name} </h3>
              <div>Rs. {price}</div>
              {inStock && <div> In Stock </div>}
              {!inStock && <div> Out of Stock </div>}
              <div>{level}</div>
              {fastDelivery ? (
                <div> Fast Delivery </div>
              ) : (
                <div> 3 days minimum </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
