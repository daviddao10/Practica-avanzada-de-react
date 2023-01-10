import React from 'react';
import {Card} from 'antd'    
import {DeleteOutlined} from '@ant-design/icons'
import './ListProducst.css'
import { TypeProducts} from '../../Types/Products';

const { Meta } = Card;

const Product = ({name,sale,price,tags,photo}:TypeProducts) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={photo} />}
    extra={<DeleteOutlined />}
  >
    <b>{
    sale ? 'Sell' : 'Buy'
    }</b>
    <Meta title={name} description={tags} prefixCls='hoal'  />
    {price}
  </Card>
);

export default Product;