import { Accordion } from "@mantine/core";

const faqData = [
  {
    title: "How does Ship N' Logic work?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit assumenda, repellendus ex fugiat ipsa asperiores. ",
  },
  {
    title: "How does Ship N' Logic work?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit assumenda, repellendus ex fugiat ipsa asperiores. ",
  },
  {
    title: "HHow does Ship N' Logic work?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit assumenda, repellendus ex fugiat ipsa asperiores. ",
  },
];
const Faq = () => {
  return (
    <div id="faq" className="app-width pt-32">
      <div className="text-center">
        <h2 className="text-2xl font-medium">Experiencing Ship N’ Logic</h2>
        <div className="mt-3">Explore our features.</div>
      </div>
      <div className="mt-10">
        <Accordion defaultValue="">
          {faqData.map((item, index) => (
            <Accordion.Item key={index} value={item.title}>
              <Accordion.Control>{item.title}</Accordion.Control>
              <Accordion.Panel>{item.text}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
