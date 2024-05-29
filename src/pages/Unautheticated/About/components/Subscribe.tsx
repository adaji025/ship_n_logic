const Subscribe = () => {
  return (
    <div className="subscribe text-white py-16 mt-44 z-0">
      <div className="app-width !z-50">
        <div className="text-center text-[32px] font-medium">
          Subscribe to our newsletter for updates
        </div>
        <div className="mt-5 text-center max-w-[500px] mx-auto">
          Lorem ipsum dolor sit amet consectetur. Morbi morbi sagittis tincidunt
          neque risus in nullam.
        </div>
        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="youremail@gmail.com"
            className="py-3 px-5 outline-none max-w-[500px] w-full rounded-l-full bg-white/15 placeholder:text-white"
          />
          <button className="bg-white rounded-r-full p-3 text-primary">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
