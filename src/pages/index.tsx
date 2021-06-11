import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="@px-3">
        <h1
          data-test="main-header"
          className="@text-4xl @font-extrabold @mb-3 @mt-6"
        >
          Your home for everything home
        </h1>
      </main>
    </div>
  );
};

export default Home;
