import { Welcome, GetStarted, Services, Transactions } from "../components";

const Home = () => {
  return (
    <div className="">
      <Welcome />
      <GetStarted />
      <Services />
      <Transactions />
    </div>
  );
};

export default Home;
