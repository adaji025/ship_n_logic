import Image from "../../../../assets/png/about.png";
import ButtonComp from "../../../../components/Button";
const AboutComp = () => {
  return (
    <div className="app-width mt-20">
      <div className="text-center">
        <h2 className="text-2xl font-medium">About Us</h2>
        <div className="mt-3">Know more about Ship N' Logic.</div>
      </div>
      <div className="mt-10 flex gap-5 sm:gap-10 flex-col md:flex-row">
        <div className="flex-1">
          <div className="leading-[32px]">
            Ship N’ Logic has developed cutting-edge software that seamlessly
            integrates with customer's database and sales channel platforms,
            revolutionizing the way shipping labels are generated, tracked, and
            purchased. By automating the entire process, this innovative
            solution not only saves your company valuable time but also
            significantly reduces costs. With the ability to connect directly to
            the customer's sales platform/ software we can efficiently retrieve
            all the necessary shipping information, eliminating the need for
            manual data entry.
          </div>
          <div className="mt-5 leading-[32px]">
            By offering low-cost shipping labels from multiple carriers with
            real-time pre-negotiated prices. Ship N’ Logic can now provide its
            customers with a cost-effective solution while streamlining their
            own operations. Ship N’ Logic truly exemplifies the power of
            technology in optimizing business processes, efficiency, and driving
            down shipping cost.
          </div>

          <div className="mt-10">
            <ButtonComp text="Get started" />
          </div>
        </div>
        <div className="flex-1">
          <img src={Image} alt="Know more about Ship N' Logic." />
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
