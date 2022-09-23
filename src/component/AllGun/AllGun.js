import React, { useState, useEffect } from 'react';
import Gun from '../Gun/Gun';

const AllGun = ({countIncrease}) => {
    const [guns, setGuns] = useState([]);

    // const datas = async () => {
    //     const res = await fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    //     const data = await res.json();
    //     setGuns(data)
    // }
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
        // datas()
    }, [])
    return (
        <>
            <div className='my-8'>
                <h1 className='text-4xl font-bold'>WelCome To Gun Store</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut accusantium enim quod magni quae vero! Impedit ipsam cum itaque sit iusto, atque facere iure accusantium culpa aspernatur placeat ducimus unde sequi assumenda possimus, ut doloremque temporibus pariatur porro inventore.</p>
            </div>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    guns.map(gun => <Gun countIncrease={countIncrease} gun={gun} key={gun.id} />)
                }
            </div>
        </>
    );
};

export default AllGun;