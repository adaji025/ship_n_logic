const Experience = () => {
  const embedId = "QsCDSEgEaO4";
  return (
    <div className="bg-light py-20 mt-20">
      <div className="app-width">
        <div className="text-center">
          <h2 className="text-2xl font-medium">Experiencing Ship N’ Logic</h2>
          <div className="mt-3">Explore our features.</div>
        </div>

        <div className="max-w-[900px] w-full mx-auto rounded-3xl mt-10">
          <iframe
            width="100%"
            height="430"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className="rounded-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
