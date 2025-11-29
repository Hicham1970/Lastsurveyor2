import {
  Ruler,
  ClipboardCheck,
  Fuel,
  TestTube,
  FileCheck,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Draft Surveys",
    description:
      "Accurate draft measurements and calculations for vessel loading conditions.",
    icon: Ruler,
  },
  {
    title: "On/Off Hire Inspections",
    description:
      "Detailed vessel condition assessments for charter agreements.",
    icon: ClipboardCheck,
  },
  {
    title: "OGC Inspections",
    description:
      "inspects consignments of crude or refined petroleum to certify that consignments conform to contract specifications: Lowers container into tank and withdraws samples and Pours them into bottles and routes samples to laboratory for analysis.",

    icon: Fuel,
  },
  {
    title: "Sampling Services",
    description:
      "Professional sampling following latest international standards.",
    icon: TestTube,
  },
  {
    title: "Condition Surveys",
    description: "In-depth analysis of vessel condition for various purposes.",
    icon: FileCheck,
  },
  {
    title: "Technical Inspections",
    description:
      "Specialized technical assessments of ship systems and equipment.",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Professional Marine Inspection Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Comprehensive marine inspection services backed by over 25 years of
            industry experience
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div key={service.title} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 dark:bg-blue-600 text-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
