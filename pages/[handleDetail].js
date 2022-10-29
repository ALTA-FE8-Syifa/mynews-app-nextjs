import { useRouter } from 'next/router';
import React from 'react';
import NavbarComp from '../component/navbar-comp';

function DetailNews() {
  const router = useRouter();
  return (
    <div className="container-fluid">
      <NavbarComp/>
      <main className='row d-flex'>
        <div className='col-10 col-md-6'>
          <img src={router.query.imageUrl} className="img-fluid"/>
        </div>
        <div className='col-10 col-md-6'>
          <p>{router.query.title}</p>
          <p>{router.query.content}</p>
          <p>read more: {router.query.readMoreUrl}</p>
        </div>
      </main>
    </div>
  )
}

export default DetailNews