import DataIntegration from "../../../../assets/svg/data-integration.svg";
import ShoppingLabel from "../../../../assets/svg/shopping-label.svg";
import CInterface from "../../../../assets/svg/c-interface.svg";
import LowPrice from "../../../../assets/svg/low-price.svg";
import CustomerMgt from "../../../../assets/svg/customer-mgt.svg";

const Benefits = () => {
  const benefitData = [
    {
      image: DataIntegration,
      title: "Data Integration",
      text: "Automated data integration with any sales platform/software to save on manual data entry.",
    },
    {
      image: ShoppingLabel,
      title: "Shipping Label Purchase",
      text: "Real-time shipping prices from multiple carriers.",
    },
    {
      image: LowPrice,
      title: "Low Price",
      text: "Pre-negotiated shipping rates. Know what it will cost before you buy.",
    },
    {
      image: CustomerMgt,
      title: "Customer Management",
      text: "Easy customer and tracking number lookup.",
    },
    {
      image: CInterface,
      title: "Customer Management",
      text: "Customizable to meet your every need.",
    },
  ];
  const Card = ({
    image,
    text,
    title,
  }: {
    image: string;
    title: string;
    text: string;
  }) => {
    return (
      <div className="bg-white p-5 rounded-xl max-w-[350px] w-full">
        <img src={image} alt="" />
        <div className="mt-3 font-medium text-lg">{title}</div>
        <div className="mt-4">{text}</div>
      </div>
    );
  };
  return (
    <div className="mt-32">
      <div id="benefits" className="bg-[#F1E9E680] py-20">
        <div className="app-width">
          <div className="text-center">
            <h2 className="text-2xl font-medium mt-10">Benefits</h2>
            <div className="mt-3">
              What you get to enjoy with Ship N' Logic.
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-10 pb-10">
            {benefitData.map((item, index) => (
              <Card
                key={index}
                image={item.image}
                text={item.text}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
