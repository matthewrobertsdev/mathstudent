import React from 'react';
//displays an ad when the user is online.  Two sizes: leader-board banner 
//for large and small-mobile banner for small
function AdView() {
  return (
      /* leader board ad or mobile banner */
      <div className='ad center-text'>
        <br/>
		    There is an ad here when you are online.
        <br/>
        Ads help Math Teacher make money.
        <br/>
        <br/>
      </div>
  );
}
export default AdView;