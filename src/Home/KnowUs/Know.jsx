import './Know.css';

const Know = () => {
    return (
        <div className='sectionMain'>
            <div className="meeting" >
            <div>
                <h2 className="KnowTitle">Get to know <span className="FocText">us</span></h2>
                <img src="https://i.ibb.co/QJTm2fF/unsplash-Oalh2-Moj-Uuk.png" alt="" className='meetingImg'/>
            </div>
            <div>
                <h2 className='subTitle'><span className='focus'>Teamwork</span> is the key to <br /> our success</h2>
                <p className='subDetails'>At TasteNow we make sure that every decision is determined by  a team of us. Everyone's opinion matters, and as a group, we are  stronger. We firmly believe that teamwork makes the dream work.</p>
            </div>
            
        </div>
        <div className='details1'>
        <div className="meeting11" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
            <h2 className='subTitle1'>We are all in for the <span className='focus1'>enviroment</span></h2>
            <p className='subDetails1'>TasteNow donates $1 penny for every purchase made from the app to  an organization that takes <br /> care of our enviromet. We belive that with  everyone´s help, we can make a better world. </p>
        </div>
        <div>
            <img src="https://i.ibb.co/9g5S0cD/unsplash-Kdeq-A3a-Tn-BY.png" alt="" className='environmentImg' />
        </div>
    </div>
    </div>
        </div>
    );
};

export default Know;
