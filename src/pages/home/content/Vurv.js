import React from 'react';

export default () => {
    return (
        <div>
            <div className='iframe-container'>
                <iframe src='https://vurvco.github.io/network-viz/#define-yourself' 
                    referrerPolicy='no-referrer' 
                    loading='lazy'></iframe>
            </div>
            <p>
                An interactive visualization of <a href='https://vurv.co/' target='_blank'>vûrv Collective </a> in Austin, TX based on a survey sent to members.
            </p>
            <p>
                In collaboration with <a href='https://dezein.co/' target="_blank">Adam Zeiner</a> and <a href='https://www.marioezekiel.com' target='_blank'>Mario Ezekiel H</a>.
            </p>
            <p>
                View entire <a href='https://vurvco.github.io/network-viz/' target='_blank'>Vurvey</a>.
             </p>
             <p>
                Using: d3.js
             </p>
        </div>
    )
}