import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className='BannerTitle'>
                <h1 className='bannerTitle'>
                    Experience food <br /> <span className='focus'>Delivery</span> like no other
                </h1>
                <p className='description'>
                    We deliver the food of your choice wherever, whenever. Select 
                    your food from only the top restaurants in the area, and get it in 
                    a flash. Download the app now to discover more.
                </p>
            </div>
            <div className=''>
                <img src="https://i.ibb.co/gvWhkRs/Food-Background-2-1.png" alt="" className='bannerImg' />
            </div>
        </div>
    );
};

export default Banner;
