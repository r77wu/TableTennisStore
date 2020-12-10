import React from 'react';
import Divider from "@material-ui/core/Divider";

import BladesItems from "../Blades/Blades";
import RubberItems from "../Rubber/Rubber";
import TablesItems from "../Tables/Tables";
import BallsItems from "../Balls/Balls";

const Products = () => {
  return (
    <section>
      <BladesItems/>
      <Divider style={{margin: "2em 0"}}/>
      <RubberItems/>
      <Divider style={{margin: "2em 0"}}/>
      <TablesItems/>
      <Divider style={{margin: "2em 0"}}/>
      <BallsItems/>
    </section>
  )
}

export default Products;
