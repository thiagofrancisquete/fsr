import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from 'antd';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h3>Endereço não encontrado</h3>
      <Link to='/'>
        <Button type='primary'>Inicio</Button>
      </Link>
    </div>
  );
};

export default NotFound;
