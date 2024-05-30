// src/components/ProgressBar.js

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div
      style={{ border: "1px solid #ccc", width: "100%", borderRadius: "20px" }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "60px",
          backgroundColor: progress < 100 ? "blue" : "green",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          borderTopRightRadius: progress < 100 ? "0px" : "20px",
          borderBottomRightRadius: progress < 100 ? "0px" : "20px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
