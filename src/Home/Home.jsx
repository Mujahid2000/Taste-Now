import Banner from "./Banner/Banner";
import Category from './Category/Category'
import Know from "./KnowUs/Know";

const Home = () => {
    return (
        <div className="ellipse">
        <Banner></Banner>
        <Category></Category>
        <Know></Know>
    </div>
    );
};

export default Home;