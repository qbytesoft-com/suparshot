import Navbar from 'components/global/navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex justify-center items-center text-2xl font-semibold">
        <p>Welcome to SuparShot</p>
      </div>
    </>
  );
}

export default Home;
