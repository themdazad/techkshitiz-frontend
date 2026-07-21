import CyberFrame from "@/components/custom-ui/CyberFrame";
import HeadingText from "@/components/custom-ui/HeadingText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

export const Faq = () => {
    return (
      <section className="relative max-w-screen-xl mx-auto px-4 py-12 font-spacemono">
        <div className="mb-6">
          <HeadingText style={"heading font-syne font-bold text-3xl md:text-4xl"} text={"Frequently Asked Questions"}/>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <CyberFrame key={faq.id} className=" my-4">
            <AccordionItem  value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
            </CyberFrame>
          ))}
        </Accordion>
      </section>
    );
};