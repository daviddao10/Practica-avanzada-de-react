import React from 'react';
import {Card} from 'antd'    
import './ListProducst.css'

import { TypeProducts} from '../../Types/Products';
import DeletedButtom from '../../components/common/DeletedButton';
import { useDispatch } from 'react-redux';
import { setDeletedProducts } from '../../redux/action';
const { Meta } = Card;

const Product = ({id,name,sale,price,tags,photo}:TypeProducts) => {
 const dispatch = useDispatch();

 const handleOnDeleted =()=>{
  dispatch(setDeletedProducts(id))
 }
  return(
  <Card
    hoverable
    title={name}
    style={{ width: 240 }}
    cover={<img alt="example" src={photo} />}
    extra={<DeletedButtom onClick={handleOnDeleted} />}
  >
    <b>{
    sale ? 'Sell' : 'Buy'
    }</b>
    <Meta  description={tags} prefixCls='hoal'  />
    {price}
  </Card>
)};

export default Product;