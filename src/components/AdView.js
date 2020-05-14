import React from 'react';
//displays an ad when the user is online.  Two sizes: leader-board banner 
//for large and small-mobile banner for small
function AdView() {
  return (
    <div className='center-text'>
      {/*leaer-board ad for large */}
      <div className='hide-for-small leader-board-ad center-text'>
        <br></br>
		    There is an ad here when you are online.
        <br></br>
        Ads help Math Teacher make money.
      </div>
       {/*small mobile banner for small */}
      <div className='hide-for-big mobile-banner center-text'>
        <br></br>
		    There is an ad here when you are online.
        <br></br>
        Ads help Math Teacher make money.
        <br></br><br></br>
      </div>
    </div>
  );
}
export default AdView;