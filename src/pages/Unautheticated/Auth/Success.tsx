import { useLocation, useNavigate } from "react-router-dom";
import DoneImage from "../../../assets/svg/done.svg";

interface IProps {
  title: string;
  text: string;
  btnText: string;
  route: string;
}

const Success = () => {
  const navigate = useNavigate();
  const location: IProps = useLocation().state;

  console.log(location.btnText);
  return (
    <div className="auth-bg min-h-screen flex justify-center w-full py-10">
      <div className="max-w-[450px] w-full h-min mt-10 rounded-[20px] bg-white px-10 py-20 flex flex-col justify-center items-center">
        <img src={DoneImage} alt="" />
        <div className="mt-5 max-w-[300px] mx-auto text-center text-lg font-medium">
          {location?.title}
        </div>
        <div className="mt-5 max-w-[350px] mx-auto text-center">
          {location?.text}
        </div>
        <div
          className="py-3 px-10 mt-10 text-center border rounded-xl text-primary cursor-pointer w-full"
          onClick={() => navigate(location?.route)}
        >
          {location?.btnText}
        </div>
      </div>
    </div>
  );
};

export default Success;
