import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;

const CardItem = ({title, description, img}) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={img} />}
  >
    <Meta title={title} description={description} />
  </Card>
);

export default CardItem;