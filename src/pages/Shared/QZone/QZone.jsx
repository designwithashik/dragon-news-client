import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const QZone = () => {
    return (
        <div className='bg-secondary'>
            <h3>Q-Zone</h3>
            <img src={qzone1} />
            <img src={qzone2} />
            <img src={qzone3} />
        </div>
    );
};

export default QZone;