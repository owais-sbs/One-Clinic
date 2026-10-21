import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

type LegalSubSection = {
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

type LegalSection = {
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  subSections?: readonly LegalSubSection[];
};

type LegalDocumentProps = {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: readonly LegalSection[];
};

function Block({ paragraphs, bullets }: { paragraphs?: readonly string[]; bullets?: readonly string[] }) {
  return (
    <>
      {paragraphs?.map((text) => (
        <p key={text} className="text-[15px] leading-7 text-gray-600 sm:text-base">
          {text}
        </p>
      ))}
      {bullets && bullets.length > 0 && (
        <ul className="list-disc space-y-2 pl-5 text-[15px] leading-7 text-gray-600 sm:text-base">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export function LegalDocument({ title, effectiveDate, intro, sections }: LegalDocumentProps) {
  return (
    <Section className="bg-white py-16 sm:py-24">
      <Container>
        <article className="mx-auto max-w-3xl">
          <header className="mb-10 border-b border-gray-100 pb-8 sm:mb-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-5xl">{title}</h1>
            <p className="mt-4 text-sm font-medium text-gray-500">Effective date: {effectiveDate}</p>
            <p className="mt-6 text-[15px] leading-7 text-gray-600 sm:text-base">{intro}</p>
          </header>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">{section.heading}</h2>
                <Block paragraphs={section.paragraphs} bullets={section.bullets} />
                {section.subSections?.map((sub) => (
                  <div key={sub.heading} className="space-y-3 pt-2">
                    <h3 className="text-base font-semibold text-black sm:text-lg">{sub.heading}</h3>
                    <Block paragraphs={sub.paragraphs} bullets={sub.bullets} />
                  </div>
                ))}
              </section>
            ))}
          </div>
        </article>
      </Container>
    </Section>
  );
}

export type { LegalDocumentProps, LegalSection };
