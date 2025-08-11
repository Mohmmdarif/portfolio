import Experience from "@/components/Experience";
import { AnimatedTooltip } from "@/components/AnimatedTooltip";

import {
  SucofindoLogo,
  KawanKerjaLogo,
  DigistarLogo,
  CoreInitiativeLogo,
  MaxyLogo,
  BNISLogo,
} from "@/assets/index";

import {
  dashboardSSGI,
  mobileDevKawanKerja,
  digistar,
  sucofindoIntern,
  coreInitiative,
  maxyAcademy,
  BnisIntern,
} from "@/data/tech-stack";

import { getAutoDuration } from "@/lib/dateUtils";

export const data = [
  {
    id: "year-2025",
    title: "2025",
    content: (
      <div className="grid grid-cols-1 gap-10" key="year-2025">
        <div>
          <Experience
            key="bnis-intern"
            image={BNISLogo}
            position="Frontend Developer"
            company="PT. BNI Sekuritas"
            duration="Apr 2025 - Now"
            totalDuration={getAutoDuration("Apr 2025 - Now")}
            description={[
              [
                "Collaborating effectively with the team, including Backend Developers, Project Managers, and the QA team, in translating the requirements from the Business Analyst into technical solutions.",
                "Implementing a microfrontend architecture to enhance scalability, modularity, and ease of maintenance of the application.",
                "Developing a customer data access system as an internal system to support data exchange and management between branches.",
                "Building an internal dashboard as a monitoring tool for RTBO and SOA data to support operational oversight and data-driven decision-making.",
              ],
            ]}
            status="Internship"
          />

          <p className="mt-10 font-medium text-gray-500 mb-2 text-sm md:text-base">
            Technology
          </p>
          <div className="flex flex-row items-center mb-3 w-full">
            <AnimatedTooltip items={BnisIntern} />
          </div>
        </div>

        <hr className="border-neutral-200 my-3" />

        <div>
          <Experience
            key="sucofindo-intern"
            image={SucofindoLogo}
            position="Frontend Developer"
            company="PT. Sucofindo"
            duration="Oct 2024 - Jan 2025"
            totalDuration={getAutoDuration("Oct 2024 - Jan 2025")}
            description={[
              "The SSGI Dashboard is a platform used to monitor the achievement of data from all registered regions in Indonesia. It is also used for verifying survey results of toddler data collected from field surveys. This project was developed through the collaboration of three people, and I played the role of a Front-End Developer.",
            ]}
            status="Freelance"
          />

          <p className="mt-10 font-medium text-gray-500 mb-2 text-sm md:text-base">
            Technology
          </p>
          <div className="flex flex-row items-center mb-3 w-full">
            <AnimatedTooltip items={dashboardSSGI} />
          </div>
        </div>
        <hr className="border-neutral-200 my-3" />
      </div>
    ),
  },
  {
    id: "year-2024",
    title: "2024",
    content: (
      <div className="grid grid-cols-1 gap-10" key="year-2024">
        <div>
          <Experience
            key="kawan-kerja-intern"
            image={KawanKerjaLogo}
            position="Mobile Developer Intern"
            company="PT. Kawan Kerja Indonesia"
            duration="Aug - Nov 2024"
            totalDuration={getAutoDuration("Aug 2024 - Nov 2024")}
            description={[
              "Kawan Kerja Indonesia is a company focused on HR solutions and IT services. It operates KawanKerja.com for recruitment and HR management and KawanKerja.id for digital application development, including Pembimbing.ID, an online mentoring platform. Based in Bandung, it aims to enhance workforce quality and digital innovation.",

              [
                "I work as a Mobile Developer, responsible for developing mobile applications using React Native. I have developed two applications: BlindO, a color blindness test app, and Vooca, an English dictionary app.",
                "Collaborated with UI/UX designers to enhance user experience.",
              ],
            ]}
            status="Internship"
          />

          <p className="mt-10 font-medium text-gray-500 mb-2 text-sm md:text-base">
            Technology
          </p>
          <div className="flex flex-row items-center mb-3 w-full">
            <AnimatedTooltip items={mobileDevKawanKerja} />
          </div>
        </div>

        <hr className="border-neutral-200 my-3" />

        <div>
          <Experience
            key="digistar-mentee"
            image={DigistarLogo}
            position="Hacker Mentee Digistar Class 2024"
            company="Digistar Club by Telkom Indonesia"
            duration="Aug - Oct 2024"
            totalDuration={getAutoDuration("Aug 2024 - Oct 2024")}
            description={[
              "The Digistar Class program is an initiative by Telkom Indonesia designed to prepare Indonesia’s future digital talents. This program offers intensive mentoring focused on developing both hard and soft skills needed in the digital industry, with direct guidance from Telkom’s professional mentors who are experts in their fields.",
              "Digistar Class is open to students, fresh graduates, digital communities, and the diaspora, aiming to bridge the gap between job seekers' skills and industry demands. Since its launch, the program has nurtured over 1,700 mentees through various training sessions and collaborative projects.",
              [
                "Selected as one of 500 mentees who passed the selection process out of a total of 12,000+ candidates.",
                "Analyzing the Pijar Mahir use case for MSMEs to provide solutions and recommendations for increasing market share and revenue.",
                "Utilizing web development skills to analyze required features and design a user interface.",
                "Collaborating closely with Pijar Mahir team members to overcome daily challenges and deliver impactful solutions.",
              ],
            ]}
            status="Seasonal"
          />

          <p className="mt-10 font-medium text-gray-500 mb-2 text-sm md:text-base">
            Technology
          </p>
          <div className="flex flex-row items-center mb-3 w-full">
            <AnimatedTooltip items={digistar} />
          </div>
        </div>

        <hr className="border-neutral-200 my-3" />

        <div>
          <Experience
            key="sucofindo-intern"
            image={SucofindoLogo}
            position="Frontend Developer Intern"
            company="PT. Sucofindo"
            duration="Des 2023 - Jan 2024"
            totalDuration={getAutoDuration("Dec 2023 - Jan 2024")}
            description={[
              "PT Sucofindo (Superintending Company of Indonesia) is a state-owned enterprise engaged in inspection, testing, certification, and consulting services. Established in 1956, Sucofindo initially focused on trade and commodity supervision but has since expanded into various sectors, including industry, environment, agriculture, energy, and management systems. With an extensive network across Indonesia, Sucofindo plays a vital role in ensuring quality standards and compliance across different industries.",
              "I serve as a Frontend Developer in the SBU HMPM division, responsible for developing the Referral Sucofindo application from scratch. Referral Sucofindo is an application based on a case study at PT. Sucofindo, designed to simplify the process for clients when accessing the company's services. This web-based application is currently in the development phase.",

              [
                "Responsible for designing the application using Figma tools.",
                "Responsible for integrating APIs using Axios.",
                "Collaborate intensively with other developers.",
                "Developing a responsive web application using ReactJS and TailwindCSS.",
              ],
            ]}
            status="Internship"
          />

          <p className="mt-10 font-medium text-gray-500 mb-2 text-sm md:text-base">
            Technology
          </p>
          <div className="flex flex-row items-center mb-3 w-full">
            <AnimatedTooltip items={sucofindoIntern} />
          </div>
        </div>
        <hr className="border-neutral-200 my-3" />
      </div>
    ),
  },
  {
    id: "year-2023",
    title: "2023",
    content: (
      <div className="grid grid-cols-1 gap-10" key="year-2023">
        <div>
          <Experience
            key="core-initiative-intern"
            image={CoreInitiativeLogo}
            position="Project-Based Virtual Intern : Frontend Developer Core Initiative x Rakamin Academy"
            company="Core Initiative Studio"
            duration="Nov 2023"
            totalDuration={getAutoDuration("Nov 2023 - Nov 2023")}
            description={[
              "The Rakamin Frontend Core Initiative is an internship program focused on developing frontend skills using modern technologies. In this program, I served as a Frontend Developer and used Vue.js to build a responsive and interactive web application interface.",
              "I was responsible for:",
              [
                "Developing frontend features using Vue.js.",
                "Translating designs from Figma into functional user interfaces.",
                "Integrating the Fake Store API with Axios to fetch and manage data.",
                "Optimizing application performance for better speed and responsiveness.",
              ],
            ]}
            status="Internship"
          />

          <p className="mt-10 font-medium text-gray-500 mb-2 text-sm md:text-base">
            Technology
          </p>
          <div className="flex flex-row items-center mb-3 w-full">
            <AnimatedTooltip items={coreInitiative} />
          </div>
        </div>

        <hr className="border-neutral-200 my-3" />

        <div>
          <Experience
            key="maxy-academy-mentee"
            image={MaxyLogo}
            position="Frontend Developer Mentee"
            company="Maxy Academy"
            duration="Sep - Oct 2023"
            totalDuration={getAutoDuration("Sep 2023 - Oct 2023")}
            description={[
              "As a Frontend Developer Mentee at Maxy Academy, I was responsible for building and optimizing web interfaces using HTML, CSS, Bootstrap 4, and Framework7. I also implemented AJAX to fetch data from APIs, managed user authentication with Firebase Authentication, and stored and displayed data using Firebase Database. Additionally, I optimized visual representations with ChartJS and performed debugging and data manipulation using JavaScript & jQuery.",
              "In project development, I collaborated with the team using Git for version control and participated in code reviews to ensure the implementation of best practices in frontend development. I also integrated Google Analytics for website performance analysis. This experience has helped me understand industry standards in frontend development, enhance my technical skills, and strengthen my ability to build responsive and user-friendly web applications.",
            ]}
            status="Seasonal"
          />

          <p className="mt-10 font-medium text-gray-500 mb-2 text-sm md:text-base">
            Technology
          </p>
          <div className="flex flex-row items-center mb-3 w-full">
            <AnimatedTooltip items={maxyAcademy} />
          </div>
        </div>
      </div>
    ),
  },
];
