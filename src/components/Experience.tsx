"use client";

import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Image, { StaticImageData } from "next/image";

type ExperienceProps = {
  image: StaticImageData;
  position: string;
  company: string;
  duration: string;
  totalDuration: string;
  description: (string | string[])[];
  status: string;
};

export default function Experience(props: ExperienceProps) {
  return (
    <div className="flex flex-row gap-5">
      <Image
        src={props.image}
        alt={props.company}
        className="w-12 h-12 md:w-16 md:h-16 shadow-sm rounded-md border border-input"
      />
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
          <h2 className="text-base md:text-xl font-bold text-gray-700 dark:text-foreground max-w-xl">
            {props.position}
          </h2>
          <Badge
            variant="outline"
            className="rounded-full text-gray-600 dark:text-muted-foreground text-xs bg-gray-50 font-medium w-fit mt-1 md:mt-0"
          >
            {props.status}
          </Badge>
        </div>
        <Accordion type="single" className="text-gray-600 dark:text-foreground h-fit" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-gray-500 dark:text-foreground cursor-pointer">
              {props.company} | {props.duration} • {props.totalDuration}
            </AccordionTrigger>
            <AccordionContent>
              {props.description.map((item, index) =>
                typeof item === "string" ? (
                  <p key={`description-${index}`} className="mb-2">
                    {item}
                  </p>
                ) : (
                  <ul key={`description-${index}`} className="list-disc pl-6">
                    {item.map((listItem, i) => (
                      <li key={`description-${index}-item-${i}`}>{listItem}</li>
                    ))}
                  </ul>
                )
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
