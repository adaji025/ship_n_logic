import Header from "./components/HeaderTwo";

const Purchase = () => {
  return (
      <div>
          <Header />
      <div className="flex gap-10">
        <div className="w-[75%] bg-white rounded-[20px] p-10"></div>
        <div className="flex-1 bg-white rounded-[20px] p-10"></div>
      </div>
    </div>
  );
};

export default Purchase;
