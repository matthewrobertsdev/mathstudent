import React from 'react';
class AdView extends React.Component{
    render(){
        return (
            <div className='center-text'><br></br>
		    <div className='hide-for-small leaderBoardAd center-text'>
		    There is an ad here when you are online.<br></br><br></br>Ads help Learn Math make money.</div>
		    <div className='hide-for-big mobileBanner center-text'>
		    There is an ad here when you are online.<br></br><br></br>Ads help Learn Math make money.</div>
		    </div>
        );
    }
}
export default AdView;