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
      // Ultra-dark background with subtle borders that adapt to the cyan theme
      "group border border-border/40 bg-card/40 backdrop-blur-sm text-card-foreground transition-all duration-200 last:mb-0 mb-4", 
      "hover:bg-card/80 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.05)]",
      "data-[state=open]:border-primary/50 data-[state=open]:bg-card/90 data-[state=open]:shadow-[0_0_20px_rgba(6,182,212,0.1)]",
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
        "flex flex-1 items-center justify-between p-6 text-left text-muted-foreground transition-colors duration-200 select-none",
        "hover:text-foreground",
        "group-data-[state=open]:text-foreground group-data-[state=open]:pb-4",
        "[&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        {/* Icon wrapper glowing with primary cyan accents when active */}
        <div className="p-2 rounded-lg bg-muted border border-border/40 group-data-[state=open]:bg-primary/10 group-data-[state=open]:border-primary/30 transition-all duration-200">
          <HelpCircle className="h-4 w-4 text-muted-foreground group-data-[state=open]:text-primary transition-colors" />
        </div>
        <span className="text-base font-medium tracking-wide leading-relaxed">{children}</span>
      </div>
      <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-200 group-data-[state=open]:text-primary" />
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
    className="overflow-hidden transition-[max-height,opacity] duration-200 data-[state=open]:opacity-100 data-[state=closed]:opacity-0"
    {...props}
  >
    <div
      className={cn(
        "px-6 pb-6 text-sm leading-relaxed text-muted-foreground/90 border-t border-border/20 pt-4  transition-colors duration-200",
        "group-data-[state=open]:text-foreground/80",
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };