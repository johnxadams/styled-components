import React from "react";

import styled, { css } from "styled-components";

// libraries
import ComplexTitle from "../_myStyledComponents/ComplexTitle";
import Product from "../_myStyledComponents/Product";

const products = [
  { id: 1, product: "chair", price: 30 },
  { id: 2, product: "bed", price: 150 },
  { id: 3, product: "couch", price: 550 },
];

export default function Products() {
  return <section>
      <ComplexTitle title='all products'/>
      {products.map((product, index) => {
          return (
              <Product {...product} key={product.id}/>
              
          )
      })}
  </section>;
}
