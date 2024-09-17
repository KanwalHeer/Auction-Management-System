import type { NextPage } from 'next';
import AuctionList from './auctionList/page';



const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">MultiAuction System</h1>
      <h2 className='text-sm font-bold mb-4 text-center text-gray-500'>Current Auctions</h2>
      <AuctionList/>
    </div>
  );
};

export default Home;
