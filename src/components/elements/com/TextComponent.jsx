import Typograf from "typograf";

const tp = new Typograf({ locale: ["ru", "en-US"] });

export default function TextComponent({ children }) {
  const formatted = tp.execute(children);

  return <p dangerouslySetInnerHTML={{ __html: formatted }} />;
}
