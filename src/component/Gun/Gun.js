import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Gun = (props) => {
    const {gun, countIncrease} = props;
    const { action, bullet, img, category, capacity, name, price, } = gun;

    const [modalData, setModalData] = useState({})
    // console.log(modalData)
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-96 h-52' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <div className="badge badge-outline">{action}</div>
                        <div className="badge badge-outline">{bullet}</div>
                    </div>
                    <div className='mt-4 mr-28'>
                        <button onClick={()=>countIncrease()} className="btn btn-sm mr-2">Add To Cart</button>
                        {/* <button className="btn btn-sm btn-success">Details</button> */}
                        <label onClick={()=>{setModalData(gun)}} htmlFor="my-modal-3" className="btn modal-button btn-sm btn-success">Details</label>
                    </div>
                </div>
                {
                    modalData && <Modal modalData={modalData} setModalData={setModalData}></Modal>
                }
            </div>

        </div>
    );
};

export default Gun;