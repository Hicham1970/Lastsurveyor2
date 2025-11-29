import { Briefcase, CheckCircle } from "lucide-react";

const services = [
  {
    name: "Draft Surveys",
    description: "Accurate determination of cargo weight by measuring draft marks.",
  },
  {
    name: "On/Off-Hire Surveys",
    description: "Detailed inspection of the vessel's condition and bunkers at the beginning and end of a charter.",
  },
  {
    name: "Bunker Surveys",
    description: "Quantification of fuel oil and lubricants on board during bunkering operations.",
  },
  {
    name: "Condition Surveys",
    description: "Comprehensive assessment of the vessel's overall condition for shipowners or insurers.",
  },
  {
    name: "Oil & Gas Cargo Inspections",
    description: "Inspection and sampling of oil and gas cargoes (crude or refined).",
  },
  {
    name: "Cargo Sampling",
    description: "Professional sampling according to international standards (GAFTA, FOSFA).",
  },
];

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 dark:bg-gray-800 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              A Maritime Expert at Your Service
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200 dark:text-gray-700"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://storage.googleapis.com/a1aa/image/MW7EIpbNjdYWERx2YqWLc99O5XnXfzMfqybcsb1D7HleIreOB.jpg"
                    alt="Surveyor on a ship"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
                With a career spanning over 27 years in the maritime field, I
                have acquired in-depth expertise as an independent surveyor. My
                mission is to provide reliable, accurate, and impartial
                inspection services to protect my clients' interests.
              </p>
            </div>
            <div className="mt-5 prose prose-blue prose-p:my-6 text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1 dark:prose-invert">
                          <p className="mb-6">
                Certified by the SGS (Société Generale de Surveillance), I am committed to upholding the strictest
                international standards. My experience covers a wide range of
                operations in major Moroccan ports, including Casablanca, Jorf
                Lasfar, and Mohammedia.
              </p>
              <h3 className="flex items-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Briefcase className="mr-2 h-6 w-6 text-blue-600" />
                My Inspection Services
              </h3>
                          <p className="m-6">
                I offer a comprehensive range of services to meet all your
                cargo and vessel inspection needs:
              </p>
              <ul role="list">
                {services.map((service) => (
                  <li key={service.name} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>
                      <strong>{service.name}:</strong> {service.description}
                    </span>
                  </li>
                ))}
              </ul>
                          <p className="m-6">
                Each assignment is conducted with the utmost rigor and complete
                integrity, ensuring clear and precise reports to help you make
                the best decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}