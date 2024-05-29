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
    <div className="app-width mt-32">
      <Accordion defaultValue="">
        {faqData.map((item, index) => (
          <Accordion.Item key={index} value={item.title}>
            <Accordion.Control>{item.title}</Accordion.Control>
            <Accordion.Panel>{item.text}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
