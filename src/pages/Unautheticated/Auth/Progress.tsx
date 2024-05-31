import { useEffect, useState } from "react";
import ProgressBar from "../../../components/Unauthenticated/components/ProgressBar";
import { useNavigate } from "react-router-dom";

const Progress = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="auth-bg min-h-screen flex justify-center w-full py-10">
      <div className="max-w-[660px] w-full h-min mt-10 rounded-[10px] bg-white px-10 pt-5 pb-10 flex flex-col justify-center">
        <div>
          <div className="mt-5 font-medium text-lg">Ship N' Logicing Data</div>
        </div>
        <div className="text-sm mt-2 font-medium flex justify-between gap-5">
          <div className="text-xs">
            Please hold on while this process is ongoing. Do not close this
            window.
          </div>
          <div>{progress}%</div>
        </div>
        <div className="mt-10">
          <ProgressBar progress={progress} />
        </div>
        {progress === 100 && (
          <div className="mx-auto mt-10">
            <div
              className="py-3 px-10 border rounded-xl text-primary cursor-pointer"
              onClick={() => navigate("/payment-option")}
            >
              Next
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Progress;
