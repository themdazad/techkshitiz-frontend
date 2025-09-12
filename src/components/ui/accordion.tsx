import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      // pehle tha: "mb-4"
      "group border border-[#1E293B] rounded-lg bg-[#0B1120] transition-colors duration-300 last:mb-0", 
      "hover:bg-[#020817] hover:border-[#334155]",
      "data-[state=open]:border-[#475569] data-[state=open]:bg-[#0F172A]",
      className
    )}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex w-full">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        // removed focus rings
        "flex flex-1 items-center justify-between p-6 text-left text-white transition-colors duration-300 rounded-lg",
        "group-data-[state=open]:text-white group-data-[state=open]:pb-5",
        "[&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-[#1E293B] group-data-[state=open]:bg-[#334155] transition-colors duration-300">
          <HelpCircle className="h-4 w-4 text-gray-300 group-data-[state=open]:text-white" />
        </div>
        <span className="text-base leading-relaxed">{children}</span>
      </div>
      <ChevronDown className="h-5 w-5 shrink-0 text-gray-300 transition-transform duration-300 group-data-[state=open]:text-white" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    // removed animate-accordion-down/up → now just height transition
    className="overflow-hidden transition-[max-height,opacity] duration-300 data-[state=open]:opacity-100 data-[state=closed]:opacity-0"
    {...props}
  >
    <div
      className={cn(
        "px-6 pb-6 text-sm leading-relaxed text-white border-t border-[#1E293B] pt-4 bg-[#0B1120] rounded-b-lg transition-colors duration-300",
        "group-data-[state=open]:bg-[#0F172A]",
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
