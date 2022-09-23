import React from 'react';

const Modal = (props) => {
    const {modalData, setModalData} = props;
    console.log(modalData)
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={()=> setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <figure><img className='w-96 h-52' src={modalData.img} alt="Shoes" /></figure>
                    <h3 className="text-lg font-bold">{modalData.name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div >
    );
};

export default Modal;