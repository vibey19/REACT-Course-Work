import CoreConcepts from "../CoreConcepts/CoreConecpts";
import Section from "../Section/Section.jsx";
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConcept() {
  return(
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((componentItem) => (
          <CoreConcepts
            key={componentItem.title}
            {...componentItem}
          ></CoreConcepts>
        ))}
        {/* HARD CODED METHOD */}
        {/* <CoreConcepts
              title="Copncepts"
              description={CORE_CONCEPTS[0].description}
              image={componentsImg}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </Section>
  );
}
