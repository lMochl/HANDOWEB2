import CalendarDays from "lucide-react/dist/esm/icons/calendar-days.js";
import ChartNoAxesColumnIncreasing from "lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js";
import Check from "lucide-react/dist/esm/icons/check.js";
import Eye from "lucide-react/dist/esm/icons/eye.js";
import FileText from "lucide-react/dist/esm/icons/file-text.js";
import MessagesSquare from "lucide-react/dist/esm/icons/messages-square.js";
import RefreshCw from "lucide-react/dist/esm/icons/refresh-cw.js";
import Shuffle from "lucide-react/dist/esm/icons/shuffle.js";
import Timer from "lucide-react/dist/esm/icons/timer.js";
import Zap from "lucide-react/dist/esm/icons/zap.js";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { useState } from "react";

// Implemented from the FINAL page in Figma. data-node-id attributes retain
// the connection to the designer's sections, typography, and asset layers.
function CalendarHero() {
  const [selectedDay, setSelectedDay] = useState(2);
  return (
    <section
      data-node-id="140:389"
      data-name="Section"
      id="inicio"
      className="content-stretch flex flex-col items-start pb-[112px] pt-[128px] relative shrink-0 w-full figma-section calendar-hero"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src="/figma/calendar/imgSection.webp"
        data-figma-asset="calendar/imgSection"
        decoding="async"
      />
      <div
        data-node-id="140:390"
        data-name="Container"
        className="content-stretch flex flex-col items-start max-w-[1280px] px-[32px] relative shrink-0 w-full figma-shell"
      >
        <div
          data-node-id="140:391"
          data-name="Container"
          data-columns="2"
          style={{
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gridTemplateRows: "minmax(366.50px, auto)",
          }}
          className="gap-x-[64px] gap-y-[64px] grid relative shrink-0 w-full figma-grid"
        >
          <div
            data-node-id="140:392"
            data-name="Container"
            className="col-start-1 content-stretch flex flex-col h-[366.5px] items-start justify-self-stretch relative row-start-1 self-center shrink-0 figma-adaptive-height"
          >
            <div
              data-node-id="140:393"
              data-name="Container"
              className="h-[56px] relative shrink-0 w-full"
            >
              <div
                data-node-id="140:394"
                data-name="Container"
                className="absolute bg-[#ebf6fd] content-stretch flex gap-[8px] items-center left-0 px-[12px] py-[6px] rounded-[16777200px] top-0"
              >
                <div
                  data-node-id="140:395"
                  className="relative shrink-0 size-[20px]"
                >
                  <img
                    alt=""
                    src="/figma/calendar/imgGroup84.svg"
                    data-figma-asset="calendar/imgGroup84"
                    className="absolute block inset-0 max-w-none  figma-svg"
                    decoding="async"
                  />
                </div>
                <p
                  data-node-id="140:405"
                  className="font-ui leading-[16px] not-italic relative shrink-0 text-[#0a2e56] text-[12px] whitespace-nowrap font-medium"
                >
                  Hando Calendar
                </p>
              </div>
            </div>
            <h1
              data-node-id="140:406"
              data-name="Heading 1"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full figma-heading"
            >
              <span
                data-node-id="140:407"
                data-name="Container"
                className="h-[75px] relative shrink-0 w-full block"
              >
                <span
                  data-node-id="140:408"
                  className="absolute font-display leading-[72px] left-0 not-italic text-[72px] text-white top-[-0.5px] whitespace-nowrap font-normal block"
                >
                  Turnos y equipos,
                </span>
              </span>
              <span
                data-node-id="140:409"
                data-name="Text"
                className="content-stretch flex flex-col items-start relative shrink-0 w-full block"
              >
                <span
                  data-node-id="140:410"
                  className="font-display leading-[72px] not-italic relative shrink-0 text-[#0a2e56] text-[72px] whitespace-nowrap font-normal block"
                >
                  sin el caos.
                </span>
              </span>
            </h1>
            <div
              data-node-id="140:411"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-[521.5px]"
            >
              <p
                data-node-id="140:412"
                className="font-body leading-[32.5px] relative shrink-0 text-[20px] text-white w-[522px] font-normal"
              >
                Simplifica la planificación, coordinación y gestión de turnos de
                tu equipo de salud en una sola plataforma centralizada.
              </p>
            </div>
            <div
              data-node-id="140:413"
              data-name="Container"
              className="content-stretch flex gap-[12px] h-[82px] items-start pt-[32px] relative shrink-0 w-[521.5px]"
            >
              <a
                data-node-id="140:414"
                data-name="Button"
                href="contacto.html?solucion=calendar"
                className="bg-[#3c6ea3] content-stretch flex flex-col h-full items-center justify-center px-[28px] py-[14px] relative rounded-[12px] shrink-0 figma-link"
              >
                <p
                  data-node-id="140:415"
                  className="font-ui leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap font-medium"
                >
                  Solicitar cotización
                </p>
              </a>
              <a
                data-node-id="140:416"
                data-name="Button"
                href="#solucion"
                className="border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col h-full items-center justify-center px-[28px] py-[14px] relative rounded-[12px] shrink-0 figma-link"
              >
                <p
                  data-node-id="140:417"
                  className="font-ui leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap font-medium"
                >
                  Ver solución
                </p>
              </a>
            </div>
          </div>
          <div
            data-node-id="140:418"
            data-name="Container"
            className="col-start-2 content-stretch flex flex-col h-[359.594px] items-start justify-self-stretch relative row-start-1 self-center shrink-0 figma-adaptive-height"
          >
            <div
              data-node-id="140:419"
              data-name="Container"
              className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex flex-col items-start p-[24px] relative rounded-[16px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] shrink-0 w-full"
            >
              <div
                data-node-id="140:420"
                data-name="Container"
                className="content-stretch flex items-center justify-between relative shrink-0 w-full"
              >
                <div
                  data-node-id="140:421"
                  data-name="Container"
                  className="content-stretch flex flex-col items-start relative shrink-0 w-[160.953px]"
                >
                  <div
                    data-node-id="140:422"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                  >
                    <p
                      data-node-id="140:423"
                      className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-medium"
                    >
                      Semana actual
                    </p>
                  </div>
                  <div
                    data-node-id="140:424"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col h-[30px] items-start pt-[4px] relative shrink-0 w-[160.953px]"
                  >
                    <p
                      data-node-id="140:425"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap font-semibold"
                    >
                      Unidad de Urgencias
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:426"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0"
                >
                  <button
                    data-node-id="140:427"
                    data-name="Container"
                    type="button"
                    aria-label="Seleccionar día 1"
                    aria-pressed={selectedDay === 0}
                    onClick={() => setSelectedDay(0)}
                    className={
                      " content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" +
                      (selectedDay === 0
                        ? " bg-[#3c6ea3] text-white"
                        : " bg-[rgba(255,255,255,0.62)] text-[#0a2e56]")
                    }
                  >
                    <span
                      data-node-id="140:428"
                      className="font-ui leading-[16px] not-italic relative shrink-0 text-inherit text-[12px] whitespace-nowrap font-normal"
                    >
                      L
                    </span>
                  </button>
                  <button
                    data-node-id="140:429"
                    data-name="Container"
                    type="button"
                    aria-label="Seleccionar día 2"
                    aria-pressed={selectedDay === 1}
                    onClick={() => setSelectedDay(1)}
                    className={
                      " content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" +
                      (selectedDay === 1
                        ? " bg-[#3c6ea3] text-white"
                        : " bg-[rgba(255,255,255,0.62)] text-[#0a2e56]")
                    }
                  >
                    <span
                      data-node-id="140:430"
                      className="font-ui leading-[16px] not-italic relative shrink-0 text-inherit text-[12px] whitespace-nowrap font-normal"
                    >
                      M
                    </span>
                  </button>
                  <button
                    data-node-id="140:431"
                    data-name="Container"
                    type="button"
                    aria-label="Seleccionar día 3"
                    aria-pressed={selectedDay === 2}
                    onClick={() => setSelectedDay(2)}
                    className={
                      " content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" +
                      (selectedDay === 2
                        ? " bg-[#3c6ea3] text-white"
                        : " bg-[rgba(255,255,255,0.62)] text-[#0a2e56]")
                    }
                  >
                    <span
                      data-node-id="140:432"
                      className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-inherit whitespace-nowrap font-normal"
                    >
                      M
                    </span>
                  </button>
                  <button
                    data-node-id="140:433"
                    data-name="Container"
                    type="button"
                    aria-label="Seleccionar día 4"
                    aria-pressed={selectedDay === 3}
                    onClick={() => setSelectedDay(3)}
                    className={
                      " content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" +
                      (selectedDay === 3
                        ? " bg-[#3c6ea3] text-white"
                        : " bg-[rgba(255,255,255,0.62)] text-[#0a2e56]")
                    }
                  >
                    <span
                      data-node-id="140:434"
                      className="font-ui leading-[16px] not-italic relative shrink-0 text-inherit text-[12px] whitespace-nowrap font-normal"
                    >
                      J
                    </span>
                  </button>
                  <button
                    data-node-id="140:435"
                    data-name="Container"
                    type="button"
                    aria-label="Seleccionar día 5"
                    aria-pressed={selectedDay === 4}
                    onClick={() => setSelectedDay(4)}
                    className={
                      " content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" +
                      (selectedDay === 4
                        ? " bg-[#3c6ea3] text-white"
                        : " bg-[rgba(255,255,255,0.62)] text-[#0a2e56]")
                    }
                  >
                    <span
                      data-node-id="140:436"
                      className="font-ui leading-[16px] not-italic relative shrink-0 text-inherit text-[12px] whitespace-nowrap font-normal"
                    >
                      V
                    </span>
                  </button>
                  <button
                    data-node-id="140:437"
                    data-name="Container"
                    type="button"
                    aria-label="Seleccionar día 6"
                    aria-pressed={selectedDay === 5}
                    onClick={() => setSelectedDay(5)}
                    className={
                      " content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" +
                      (selectedDay === 5
                        ? " bg-[#3c6ea3] text-white"
                        : " bg-[rgba(255,255,255,0.62)] text-[#0a2e56]")
                    }
                  >
                    <span
                      data-node-id="140:438"
                      className="font-ui leading-[16px] not-italic relative shrink-0 text-inherit text-[12px] whitespace-nowrap font-normal"
                    >
                      S
                    </span>
                  </button>
                  <button
                    data-node-id="140:439"
                    data-name="Container"
                    type="button"
                    aria-label="Seleccionar día 7"
                    aria-pressed={selectedDay === 6}
                    onClick={() => setSelectedDay(6)}
                    className={
                      " content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]" +
                      (selectedDay === 6
                        ? " bg-[#3c6ea3] text-white"
                        : " bg-[rgba(255,255,255,0.62)] text-[#0a2e56]")
                    }
                  >
                    <span
                      data-node-id="140:440"
                      className="font-ui leading-[16px] not-italic relative shrink-0 text-inherit text-[12px] whitespace-nowrap font-normal"
                    >
                      D
                    </span>
                  </button>
                </div>
              </div>
              <div
                data-node-id="140:441"
                data-name="Container:margin"
                className="content-stretch flex flex-col items-center pt-[20px] relative shrink-0 w-full"
              >
                <div
                  data-node-id="140:442"
                  data-name="Container"
                  className="border-[rgba(255,255,255,0.07)] border-b border-solid content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:443"
                    data-name="Container"
                    className="content-stretch flex gap-[12px] items-center relative shrink-0"
                  >
                    <div
                      data-node-id="140:444"
                      data-name="Container"
                      className="bg-[#3c6ea3] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]"
                    >
                      <p
                        data-node-id="140:445"
                        className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-semibold"
                      >
                        D
                      </p>
                    </div>
                    <div
                      data-node-id="140:446"
                      data-name="Container"
                      className="content-stretch flex flex-col items-start relative shrink-0 w-[86.313px]"
                    >
                      <div
                        data-node-id="140:447"
                        data-name="Paragraph"
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      >
                        <p
                          data-node-id="140:448"
                          className="font-ui leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap font-medium"
                        >
                          Dr. Rodriguez
                        </p>
                      </div>
                      <div
                        data-node-id="140:449"
                        data-name="Paragraph"
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                      >
                        <p
                          data-node-id="140:450"
                          className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                        >
                          Médico
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-node-id="140:451"
                    data-name="Container"
                    className="bg-white content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[16777200px] shrink-0"
                  >
                    <p
                      data-node-id="140:452"
                      className="font-ui leading-[16px] not-italic relative shrink-0 text-[#3c6ea3] text-[12px] whitespace-nowrap font-normal"
                    >
                      07:00 – 15:00
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-node-id="140:453"
                data-name="Container"
                className="border-[rgba(255,255,255,0.07)] border-b border-solid content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full"
              >
                <div
                  data-node-id="140:454"
                  data-name="Container"
                  className="content-stretch flex gap-[12px] items-center relative shrink-0"
                >
                  <div
                    data-node-id="140:455"
                    data-name="Container"
                    className="bg-[#3c6ea3] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]"
                  >
                    <p
                      data-node-id="140:456"
                      className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-semibold"
                    >
                      E
                    </p>
                  </div>
                  <div
                    data-node-id="140:457"
                    data-name="Container"
                    className="content-stretch flex flex-col items-start relative shrink-0 w-[93.055px]"
                  >
                    <div
                      data-node-id="140:458"
                      data-name="Paragraph"
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    >
                      <p
                        data-node-id="140:459"
                        className="font-ui leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap font-medium"
                      >
                        Enf. Morales
                      </p>
                    </div>
                    <div
                      data-node-id="140:460"
                      data-name="Paragraph"
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    >
                      <p
                        data-node-id="140:461"
                        className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                      >
                        Enfermería
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-node-id="140:462"
                  data-name="Container"
                  className="bg-white content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[16777200px] shrink-0"
                >
                  <p
                    data-node-id="140:463"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[#3c6ea3] text-[12px] whitespace-nowrap font-normal"
                  >
                    15:00 – 23:00
                  </p>
                </div>
              </div>
              <div
                data-node-id="140:464"
                data-name="Container"
                className="border-[rgba(255,255,255,0.07)] border-b border-solid content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full"
              >
                <div
                  data-node-id="140:465"
                  data-name="Container"
                  className="content-stretch flex gap-[12px] items-center relative shrink-0"
                >
                  <div
                    data-node-id="140:466"
                    data-name="Container"
                    className="bg-[#3c6ea3] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]"
                  >
                    <p
                      data-node-id="140:467"
                      className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-semibold"
                    >
                      T
                    </p>
                  </div>
                  <div
                    data-node-id="140:468"
                    data-name="Container"
                    className="content-stretch flex flex-col items-start relative shrink-0 w-[96.016px]"
                  >
                    <div
                      data-node-id="140:469"
                      data-name="Paragraph"
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    >
                      <p
                        data-node-id="140:470"
                        className="font-ui leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap font-medium"
                      >
                        Téc. Paredes
                      </p>
                    </div>
                    <div
                      data-node-id="140:471"
                      data-name="Paragraph"
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    >
                      <p
                        data-node-id="140:472"
                        className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                      >
                        Técnico
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-node-id="140:473"
                  data-name="Container"
                  className="bg-white content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[16777200px] shrink-0"
                >
                  <p
                    data-node-id="140:474"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[#3c6ea3] text-[12px] whitespace-nowrap font-normal"
                  >
                    23:00 – 07:00
                  </p>
                </div>
              </div>
              <div
                data-node-id="140:475"
                data-name="Container"
                className="border-[rgba(255,255,255,0.07)] border-b border-solid content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full"
              >
                <div
                  data-node-id="140:476"
                  data-name="Container"
                  className="content-stretch flex gap-[12px] items-center relative shrink-0"
                >
                  <div
                    data-node-id="140:477"
                    data-name="Container"
                    className="bg-[#3c6ea3] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[32px]"
                  >
                    <p
                      data-node-id="140:478"
                      className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-semibold"
                    >
                      D
                    </p>
                  </div>
                  <div
                    data-node-id="140:479"
                    data-name="Container"
                    className="content-stretch flex flex-col items-start relative shrink-0 w-[86.313px]"
                  >
                    <div
                      data-node-id="140:480"
                      data-name="Paragraph"
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    >
                      <p
                        data-node-id="140:481"
                        className="font-ui leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap font-medium"
                      >
                        Dr. Fuentes
                      </p>
                    </div>
                    <div
                      data-node-id="140:482"
                      data-name="Paragraph"
                      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                    >
                      <p
                        data-node-id="140:483"
                        className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                      >
                        Médico
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-node-id="140:484"
                  data-name="Container"
                  className="bg-white content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[16777200px] shrink-0"
                >
                  <p
                    data-node-id="140:485"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[#3c6ea3] text-[12px] whitespace-nowrap font-normal"
                  >
                    07:00 – 15:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarProblem() {
  return (
    <section
      data-node-id="140:486"
      data-name="Container"
      id="problema"
      className="content-stretch flex flex-col items-start max-w-[1280px] px-[32px] py-[100px] relative shrink-0 w-full figma-shell figma-section calendar-problem"
    >
      <div
        data-node-id="140:487"
        data-name="Container:margin"
        className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      >
        <div
          data-node-id="140:488"
          data-name="Container"
          className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full"
        >
          <div
            data-node-id="140:489"
            data-name="Container"
            className="h-[46px] relative shrink-0 w-[671px]"
          >
            <div
              data-node-id="140:490"
              data-name="Tag"
              className="absolute bg-[#ebf6fd] h-[24px] left-1/2 rounded-[16777200px] top-[2.5px] w-[120.82px] -translate-x-1/2"
            >
              <p
                data-node-id="140:491"
                className="-translate-x-1/2 absolute font-ui leading-[16px] left-[60px] not-italic text-[#3c6ea3] text-[12px] text-center top-[4.5px] tracking-[1.2px] uppercase whitespace-nowrap font-semibold"
              >
                El problema
              </p>
            </div>
          </div>
          <h2
            data-node-id="140:492"
            data-name="Heading 2"
            className="content-stretch flex flex-col items-center relative shrink-0 w-[672px] figma-heading"
          >
            <span
              data-node-id="140:493"
              className="font-display leading-[0] not-italic relative shrink-0 text-[#0a2e56] text-[0px] text-center w-[847px] font-normal block"
            >
              <span className="leading-[72px] text-[72px]">Coordinar</span>
              <span className="leading-[72px] text-[72px]">{` turnos no debería `}</span>
              <span className="leading-[72px] text-[72px]">{`tomar `}</span>
              <span className="leading-[72px] text-[#a2cee3] text-[72px]">
                tanto tiempo.
              </span>
            </span>
          </h2>
          <div
            data-node-id="140:494"
            data-name="Paragraph"
            className="content-stretch flex flex-col items-center pt-[16px] relative shrink-0 w-[672px]"
          >
            <p
              data-node-id="140:495"
              className="font-body leading-[26px] relative shrink-0 text-[#5a6b82] text-[16px] text-center w-[672px] font-normal"
            >
              La mayoría de los equipos de salud gestiona sus turnos con
              herramientas que no fueron diseñadas para eso.
            </p>
          </div>
        </div>
      </div>
      <div
        data-node-id="140:496"
        data-name="Container:margin"
        className="content-stretch flex flex-col items-start pt-[56px] relative shrink-0 w-full"
      >
        <div
          data-node-id="140:497"
          data-name="Container"
          data-columns="3"
          style={{
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gridTemplateRows: "minmax(79.50px, auto) minmax(79.50px, auto)",
          }}
          className="gap-x-[16px] gap-y-[16px] grid relative shrink-0 w-full figma-grid"
        >
          <div
            data-node-id="140:498"
            data-name="ProblemItem"
            className="bg-[#f0f4f8] border border-[#dde4ee] border-solid col-start-1 content-stretch flex gap-[12px] items-start justify-self-stretch p-[16px] relative rounded-[12px] row-start-1 self-stretch shrink-0"
          >
            <div
              data-node-id="140:499"
              data-name="Text"
              className="content-stretch flex flex-col items-start relative shrink-0"
            >
              <p
                data-node-id="140:500"
                className="font-ui leading-[28px] not-italic relative shrink-0 text-[#0b1d3a] text-[20px] whitespace-nowrap font-normal"
              >
                <ChartNoAxesColumnIncreasing
                  className="ui-icon"
                  aria-hidden="true"
                />
              </p>
            </div>
            <div
              data-node-id="140:501"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0"
            >
              <p
                data-node-id="140:502"
                className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[293px] font-normal"
              >
                Planillas Excel que se desactualizan constantemente y generan
                confusión.
              </p>
            </div>
          </div>
          <div
            data-node-id="140:503"
            data-name="ProblemItem"
            className="bg-[#f0f4f8] border border-[#dde4ee] border-solid col-start-2 content-stretch flex gap-[12px] items-start justify-self-stretch p-[16px] relative rounded-[12px] row-start-1 self-stretch shrink-0"
          >
            <div
              data-node-id="140:504"
              data-name="Text"
              className="content-stretch flex flex-col items-start relative shrink-0"
            >
              <p
                data-node-id="140:505"
                className="font-ui leading-[28px] not-italic relative shrink-0 text-[#0b1d3a] text-[20px] whitespace-nowrap font-normal"
              >
                <MessagesSquare className="ui-icon" aria-hidden="true" />
              </p>
            </div>
            <div
              data-node-id="140:506"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0"
            >
              <p
                data-node-id="140:507"
                className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[293px] font-normal"
              >
                Coordinación por WhatsApp o correo electrónico, sin trazabilidad
                ni control.
              </p>
            </div>
          </div>
          <div
            data-node-id="140:508"
            data-name="ProblemItem"
            className="bg-[#f0f4f8] border border-[#dde4ee] border-solid col-start-3 content-stretch flex gap-[12px] items-start justify-self-stretch p-[16px] relative rounded-[12px] row-start-1 self-stretch shrink-0"
          >
            <div
              data-node-id="140:509"
              data-name="Text"
              className="content-stretch flex flex-col items-start relative shrink-0"
            >
              <p
                data-node-id="140:510"
                className="font-ui leading-[28px] not-italic relative shrink-0 text-[#0b1d3a] text-[20px] whitespace-nowrap font-normal"
              >
                <FileText className="ui-icon" aria-hidden="true" />
              </p>
            </div>
            <div
              data-node-id="140:511"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0"
            >
              <p
                data-node-id="140:512"
                className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[293px] font-normal"
              >
                Documentos aislados que no se sincronizan entre los miembros del
                equipo.
              </p>
            </div>
          </div>
          <div
            data-node-id="140:513"
            data-name="ProblemItem"
            className="bg-[#f0f4f8] border border-[#dde4ee] border-solid col-start-1 content-stretch flex gap-[12px] items-start justify-self-stretch p-[16px] relative rounded-[12px] row-start-2 self-stretch shrink-0"
          >
            <div
              data-node-id="140:514"
              data-name="Text"
              className="content-stretch flex flex-col items-start relative shrink-0"
            >
              <p
                data-node-id="140:515"
                className="font-ui leading-[28px] not-italic relative shrink-0 text-[#0b1d3a] text-[20px] whitespace-nowrap font-normal"
              >
                <Shuffle className="ui-icon" aria-hidden="true" />
              </p>
            </div>
            <div
              data-node-id="140:516"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0"
            >
              <p
                data-node-id="140:517"
                className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[293px] font-normal"
              >
                Cambios de turno que se gestionan informalmente y generan
                errores.
              </p>
            </div>
          </div>
          <div
            data-node-id="140:518"
            data-name="ProblemItem"
            className="bg-[#f0f4f8] border border-[#dde4ee] border-solid col-start-2 content-stretch flex gap-[12px] items-start justify-self-stretch p-[16px] relative rounded-[12px] row-start-2 self-stretch shrink-0"
          >
            <div
              data-node-id="140:519"
              data-name="Text"
              className="content-stretch flex flex-col items-start relative shrink-0"
            >
              <p
                data-node-id="140:520"
                className="font-ui leading-[28px] not-italic relative shrink-0 text-[#0b1d3a] text-[20px] whitespace-nowrap font-normal"
              >
                <Eye className="ui-icon" aria-hidden="true" />
              </p>
            </div>
            <div
              data-node-id="140:521"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0"
            >
              <p
                data-node-id="140:522"
                className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[293px] font-normal"
              >
                Sin visibilidad global de la planificación ni de las
                especialidades disponibles.
              </p>
            </div>
          </div>
          <div
            data-node-id="140:523"
            data-name="ProblemItem"
            className="bg-[#f0f4f8] border border-[#dde4ee] border-solid col-start-3 content-stretch flex gap-[12px] items-start justify-self-stretch p-[16px] relative rounded-[12px] row-start-2 self-stretch shrink-0"
          >
            <div
              data-node-id="140:524"
              data-name="Text"
              className="content-stretch flex flex-col items-start relative shrink-0"
            >
              <p
                data-node-id="140:525"
                className="font-ui leading-[28px] not-italic relative shrink-0 text-[#0b1d3a] text-[20px] whitespace-nowrap font-normal"
              >
                <Timer className="ui-icon" aria-hidden="true" />
              </p>
            </div>
            <div
              data-node-id="140:526"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0"
            >
              <p
                data-node-id="140:527"
                className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[293px] font-normal"
              >
                Tiempo excesivo dedicado a coordinar en lugar de atender.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarSolution() {
  return (
    <section
      data-node-id="140:528"
      data-name="Section"
      id="solucion"
      className="bg-[#ebf6fd] content-stretch flex flex-col items-start py-[128px] relative shrink-0 w-full figma-section calendar-solution"
    >
      <div
        data-node-id="140:529"
        data-name="Container"
        className="content-stretch flex flex-col items-start max-w-[1280px] px-[32px] relative shrink-0 w-full figma-shell"
      >
        <div
          data-node-id="140:530"
          data-name="Container"
          data-columns="2"
          style={{
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gridTemplateRows: "minmax(468.50px, auto)",
          }}
          className="gap-x-[64px] gap-y-[64px] grid relative shrink-0 w-full figma-grid"
        >
          <div
            data-node-id="140:531"
            data-name="Container"
            className="col-start-1 content-stretch flex flex-col h-[468.5px] items-start justify-self-stretch relative row-start-1 self-center shrink-0 figma-adaptive-height"
          >
            <div
              data-node-id="140:532"
              data-name="Container"
              className="h-[46.5px] relative shrink-0 w-full"
            >
              <div
                data-node-id="140:533"
                data-name="Tag"
                className="absolute bg-white h-[24px] left-0 rounded-[16777200px] top-[2.5px] w-[118.883px]"
              >
                <p
                  data-node-id="140:534"
                  className="absolute font-body leading-[22.75px] left-[22px] text-[#3c6ea3] text-[14px] top-[-0.5px] whitespace-nowrap font-normal"
                >
                  La solución
                </p>
              </div>
            </div>
            <h2
              data-node-id="140:535"
              data-name="Heading 2"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full figma-heading"
            >
              <span
                data-node-id="140:536"
                className="font-display leading-[0] not-italic relative shrink-0 text-[#0a2e56] text-[0px] w-[522px] font-normal block"
              >
                <span className="leading-[60px] text-[48px]">
                  Todo en un solo lugar,
                </span>
                <span className="leading-[60px] text-[#a2cee3] text-[48px]">{` siempre actualizado.`}</span>
              </span>
            </h2>
            <div
              data-node-id="140:537"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-[521.5px]"
            >
              <p
                data-node-id="140:538"
                className="font-body leading-[26px] relative shrink-0 text-[#5a6b82] text-[16px] w-[522px] font-normal"
              >
                Hando Calendar centraliza la planificación de turnos, equipos y
                profesionales en una plataforma diseñada específicamente para el
                sector salud.
              </p>
            </div>
            <div
              data-node-id="140:539"
              data-name="Container:margin"
              className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-full"
            >
              <div
                data-node-id="140:540"
                data-name="Container"
                className="h-[168px] relative shrink-0 w-full"
              >
                <div
                  data-node-id="140:541"
                  data-name="FeatureChip"
                  className="absolute bg-[#c5deec] content-stretch flex flex-col h-[36px] items-center justify-center left-0 px-[16px] py-[8px] rounded-[12px] top-0"
                >
                  <p
                    data-node-id="140:542"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                  >
                    Calendarización
                  </p>
                </div>
                <div
                  data-node-id="140:543"
                  data-name="FeatureChip"
                  className="absolute bg-[#c5deec] content-stretch flex flex-col h-[36px] items-center justify-center left-[148.3px] px-[16px] py-[8px] rounded-[12px] top-0"
                >
                  <p
                    data-node-id="140:544"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                  >
                    Patrones de turno
                  </p>
                </div>
                <div
                  data-node-id="140:545"
                  data-name="FeatureChip"
                  className="absolute bg-[#c5deec] content-stretch flex flex-col h-[36px] items-center justify-center left-[307.73px] px-[16px] py-[8px] rounded-[12px] top-0"
                >
                  <p
                    data-node-id="140:546"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                  >
                    Equipos de trabajo
                  </p>
                </div>
                <div
                  data-node-id="140:547"
                  data-name="FeatureChip"
                  className="absolute bg-[#c5deec] content-stretch flex flex-col h-[36px] items-center justify-center left-0 px-[16px] py-[8px] rounded-[12px] top-[44px]"
                >
                  <p
                    data-node-id="140:548"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                  >
                    Biblioteca de profesionales
                  </p>
                </div>
                <div
                  data-node-id="140:549"
                  data-name="FeatureChip"
                  className="absolute bg-[#c5deec] content-stretch flex flex-col h-[36px] items-center justify-center left-[220.84px] px-[16px] py-[8px] rounded-[12px] top-[44px]"
                >
                  <p
                    data-node-id="140:550"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                  >
                    Especialidades y roles
                  </p>
                </div>
                <div
                  data-node-id="140:551"
                  data-name="FeatureChip"
                  className="absolute bg-[#c5deec] content-stretch flex flex-col h-[36px] items-center justify-center left-0 px-[16px] py-[8px] rounded-[12px] top-[88px]"
                >
                  <p
                    data-node-id="140:552"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                  >
                    Gestión de cambios
                  </p>
                </div>
                <div
                  data-node-id="140:553"
                  data-name="FeatureChip"
                  className="absolute bg-[#c5deec] content-stretch flex flex-col h-[36px] items-center justify-center left-[172.52px] px-[16px] py-[8px] rounded-[12px] top-[88px]"
                >
                  <p
                    data-node-id="140:554"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                  >
                    Bloques y equipos
                  </p>
                </div>
                <div
                  data-node-id="140:555"
                  data-name="FeatureChip"
                  className="absolute bg-[#c5deec] content-stretch flex flex-col h-[36px] items-center justify-center left-0 px-[16px] py-[8px] rounded-[12px] top-[132px]"
                >
                  <p
                    data-node-id="140:556"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                  >
                    Visualización de horarios
                  </p>
                </div>
                <div
                  data-node-id="140:557"
                  data-name="FeatureChip"
                  className="absolute bg-[#c5deec] content-stretch flex flex-col h-[36px] items-center justify-center left-[208.25px] px-[16px] py-[8px] rounded-[12px] top-[132px]"
                >
                  <p
                    data-node-id="140:558"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                  >
                    Organización centralizada
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-node-id="140:559"
            data-name="Container"
            className="bg-[#3c6ea3] col-start-2 content-stretch flex flex-col h-[453.094px] items-start justify-self-stretch p-[24px] relative rounded-[16px] row-start-1 self-center shrink-0 figma-adaptive-height"
          >
            <div
              data-node-id="140:560"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:561"
                className="font-body leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap font-medium"
              >
                Vista del mes — Equipo de cirugía
              </p>
            </div>
            <div
              data-node-id="140:562"
              data-name="Container:margin"
              className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full"
            >
              <div
                data-node-id="140:563"
                data-name="Container"
                data-columns="7"
                style={{
                  gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
                }}
                className="gap-x-[4px] gap-y-[4px] grid grid-rows-[_24px] relative shrink-0 w-full figma-grid"
              >
                <div
                  data-node-id="140:564"
                  data-name="Container"
                  className="col-start-1 content-stretch flex flex-col items-center justify-self-stretch py-[4px] relative row-start-1 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:565"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap font-normal"
                  >
                    L
                  </p>
                </div>
                <div
                  data-node-id="140:566"
                  data-name="Container"
                  className="col-start-2 content-stretch flex flex-col items-center justify-self-stretch py-[4px] relative row-start-1 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:567"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap font-normal"
                  >
                    M
                  </p>
                </div>
                <div
                  data-node-id="140:568"
                  data-name="Container"
                  className="col-start-3 content-stretch flex flex-col items-center justify-self-stretch py-[4px] relative row-start-1 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:569"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap font-normal"
                  >
                    M
                  </p>
                </div>
                <div
                  data-node-id="140:570"
                  data-name="Container"
                  className="col-start-4 content-stretch flex flex-col items-center justify-self-stretch py-[4px] relative row-start-1 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:571"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap font-normal"
                  >
                    J
                  </p>
                </div>
                <div
                  data-node-id="140:572"
                  data-name="Container"
                  className="col-start-5 content-stretch flex flex-col items-center justify-self-stretch py-[4px] relative row-start-1 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:573"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap font-normal"
                  >
                    V
                  </p>
                </div>
                <div
                  data-node-id="140:574"
                  data-name="Container"
                  className="col-start-6 content-stretch flex flex-col items-center justify-self-stretch py-[4px] relative row-start-1 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:575"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap font-normal"
                  >
                    S
                  </p>
                </div>
                <div
                  data-node-id="140:576"
                  data-name="Container"
                  className="col-start-7 content-stretch flex flex-col items-center justify-self-stretch py-[4px] relative row-start-1 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:577"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap font-normal"
                  >
                    D
                  </p>
                </div>
              </div>
            </div>
            <div
              data-node-id="140:578"
              data-name="Container:margin"
              className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full"
            >
              <div
                data-node-id="140:579"
                data-name="Container"
                data-columns="7"
                style={{
                  gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
                }}
                className="gap-x-[4px] gap-y-[4px] grid grid-rows-[_____64.22px_64.22px_64.22px_64.22px_64.22px] relative shrink-0 w-full figma-grid"
              >
                <div
                  data-node-id="140:580"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-1 justify-self-stretch relative rounded-[10px] row-start-1 self-stretch shrink-0"
                />
                <div
                  data-node-id="140:581"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-2 justify-self-stretch relative rounded-[10px] row-start-1 self-stretch shrink-0"
                />
                <div
                  data-node-id="140:582"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-3 justify-self-stretch relative rounded-[10px] row-start-1 self-stretch shrink-0"
                />
                <div
                  data-node-id="140:583"
                  data-name="Container"
                  className="bg-[rgba(197,215,235,0.4)] col-start-4 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-1 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:584"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    1
                  </p>
                  <div
                    data-node-id="140:585"
                    data-name="Container"
                    className="absolute bg-[rgba(197,215,235,0.4)] left-[30.1px] rounded-[16777200px] size-[4px] top-[56.21px]"
                  />
                </div>
                <div
                  data-node-id="140:586"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-5 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-1 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:587"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    2
                  </p>
                </div>
                <div
                  data-node-id="140:588"
                  data-name="Container"
                  className="bg-[rgba(197,215,235,0.4)] col-start-6 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-1 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:589"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    3
                  </p>
                  <div
                    data-node-id="140:590"
                    data-name="Container"
                    className="absolute bg-[rgba(197,215,235,0.4)] left-[30.1px] rounded-[16777200px] size-[4px] top-[56.21px]"
                  />
                </div>
                <div
                  data-node-id="140:591"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-7 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-1 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:592"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    4
                  </p>
                </div>
                <div
                  data-node-id="140:593"
                  data-name="Container"
                  className="bg-[rgba(197,215,235,0.4)] col-start-1 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-2 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:594"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    5
                  </p>
                  <div
                    data-node-id="140:595"
                    data-name="Container"
                    className="absolute bg-[rgba(197,215,235,0.4)] left-[30.1px] rounded-[16777200px] size-[4px] top-[56.21px]"
                  />
                </div>
                <div
                  data-node-id="140:596"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-2 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-2 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:597"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    6
                  </p>
                </div>
                <div
                  data-node-id="140:598"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-3 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-2 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:599"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    7
                  </p>
                </div>
                <div
                  data-node-id="140:600"
                  data-name="Container"
                  className="bg-[rgba(197,215,235,0.4)] col-start-4 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-2 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:601"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    8
                  </p>
                  <div
                    data-node-id="140:602"
                    data-name="Container"
                    className="absolute bg-[rgba(197,215,235,0.4)] left-[30.1px] rounded-[16777200px] size-[4px] top-[56.21px]"
                  />
                </div>
                <div
                  data-node-id="140:603"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-5 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-2 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:604"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    9
                  </p>
                </div>
                <div
                  data-node-id="140:605"
                  data-name="Container"
                  className="bg-[rgba(197,215,235,0.4)] col-start-6 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-2 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:606"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    10
                  </p>
                  <div
                    data-node-id="140:607"
                    data-name="Container"
                    className="absolute bg-[rgba(197,215,235,0.4)] left-[30.1px] rounded-[16777200px] size-[4px] top-[56.21px]"
                  />
                </div>
                <div
                  data-node-id="140:608"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-7 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-2 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:609"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    11
                  </p>
                </div>
                <div
                  data-node-id="140:610"
                  data-name="Container"
                  className="bg-[rgba(197,215,235,0.4)] col-start-1 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-3 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:611"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    12
                  </p>
                  <div
                    data-node-id="140:612"
                    data-name="Container"
                    className="absolute bg-[rgba(197,215,235,0.4)] left-[30.1px] rounded-[16777200px] size-[4px] top-[56.21px]"
                  />
                </div>
                <div
                  data-node-id="140:613"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-2 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-3 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:614"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    13
                  </p>
                </div>
                <div
                  data-node-id="140:615"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-3 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-3 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:616"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    14
                  </p>
                </div>
                <div
                  data-node-id="140:617"
                  data-name="Container"
                  className="bg-[rgba(197,215,235,0.4)] col-start-4 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-3 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:618"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    15
                  </p>
                  <div
                    data-node-id="140:619"
                    data-name="Container"
                    className="absolute bg-[rgba(197,215,235,0.4)] left-[30.1px] rounded-[16777200px] size-[4px] top-[56.21px]"
                  />
                </div>
                <div
                  data-node-id="140:620"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-5 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-3 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:621"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    16
                  </p>
                </div>
                <div
                  data-node-id="140:622"
                  data-name="Container"
                  className="bg-[rgba(197,215,235,0.4)] col-start-6 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-3 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:623"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    17
                  </p>
                  <div
                    data-node-id="140:624"
                    data-name="Container"
                    className="absolute bg-[rgba(197,215,235,0.4)] left-[30.1px] rounded-[16777200px] size-[4px] top-[56.21px]"
                  />
                </div>
                <div
                  data-node-id="140:625"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-7 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-3 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:626"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    18
                  </p>
                </div>
                <div
                  data-node-id="140:627"
                  data-name="Container"
                  className="bg-[rgba(197,215,235,0.4)] col-start-1 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-4 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:628"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    19
                  </p>
                  <div
                    data-node-id="140:629"
                    data-name="Container"
                    className="absolute bg-[rgba(197,215,235,0.4)] left-[30.1px] rounded-[16777200px] size-[4px] top-[56.21px]"
                  />
                </div>
                <div
                  data-node-id="140:630"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-2 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-4 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:631"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    20
                  </p>
                </div>
                <div
                  data-node-id="140:632"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-3 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-4 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:633"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    21
                  </p>
                </div>
                <div
                  data-node-id="140:634"
                  data-name="Container"
                  className="bg-[rgba(197,215,235,0.4)] col-start-4 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-4 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:635"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    22
                  </p>
                  <div
                    data-node-id="140:636"
                    data-name="Container"
                    className="absolute bg-[rgba(197,215,235,0.4)] left-[30.1px] rounded-[16777200px] size-[4px] top-[56.21px]"
                  />
                </div>
                <div
                  data-node-id="140:637"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-5 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-4 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:638"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    23
                  </p>
                </div>
                <div
                  data-node-id="140:639"
                  data-name="Container"
                  className="bg-[rgba(197,215,235,0.4)] col-start-6 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-4 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:640"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    24
                  </p>
                  <div
                    data-node-id="140:641"
                    data-name="Container"
                    className="absolute bg-[rgba(197,215,235,0.4)] left-[30.1px] rounded-[16777200px] size-[4px] top-[56.21px]"
                  />
                </div>
                <div
                  data-node-id="140:642"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-7 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-4 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:643"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    25
                  </p>
                </div>
                <div
                  data-node-id="140:644"
                  data-name="Container"
                  className="bg-[rgba(197,215,235,0.4)] col-start-1 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-5 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:645"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    26
                  </p>
                  <div
                    data-node-id="140:646"
                    data-name="Container"
                    className="absolute bg-[rgba(197,215,235,0.4)] left-[30.1px] rounded-[16777200px] size-[4px] top-[56.21px]"
                  />
                </div>
                <div
                  data-node-id="140:647"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-2 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-5 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:648"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    27
                  </p>
                </div>
                <div
                  data-node-id="140:649"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-3 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-5 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:650"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    28
                  </p>
                </div>
                <div
                  data-node-id="140:651"
                  data-name="Container"
                  className="bg-[rgba(197,215,235,0.4)] col-start-4 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-5 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:652"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    29
                  </p>
                  <div
                    data-node-id="140:653"
                    data-name="Container"
                    className="absolute bg-[rgba(197,215,235,0.4)] left-[30.1px] rounded-[16777200px] size-[4px] top-[56.21px]"
                  />
                </div>
                <div
                  data-node-id="140:654"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-5 content-stretch flex flex-col items-center justify-center justify-self-stretch relative rounded-[10px] row-start-5 self-stretch shrink-0"
                >
                  <p
                    data-node-id="140:655"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-normal"
                  >
                    30
                  </p>
                </div>
                <div
                  data-node-id="140:656"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-6 justify-self-stretch relative rounded-[10px] row-start-5 self-stretch shrink-0"
                />
                <div
                  data-node-id="140:657"
                  data-name="Container"
                  className="bg-[rgba(255,255,255,0.05)] col-start-7 justify-self-stretch relative rounded-[10px] row-start-5 self-stretch shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarBenefits() {
  return (
    <section
      data-node-id="140:658"
      data-name="Container"
      id="beneficios"
      className="content-stretch flex flex-col items-start max-w-[1280px] px-[32px] py-[100px] relative shrink-0 w-full figma-shell figma-section calendar-benefits"
    >
      <div
        data-node-id="140:659"
        data-name="Container:margin"
        className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      >
        <div
          data-node-id="140:660"
          data-name="Container"
          className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-[672px]"
        >
          <div
            data-node-id="140:661"
            data-name="Container"
            className="h-[46.5px] relative shrink-0 w-full"
          >
            <div
              data-node-id="140:662"
              data-name="Tag"
              className="absolute bg-[#ebf6fd] h-[24px] left-1/2 rounded-[16777200px] top-[2.5px] w-[107.117px] -translate-x-1/2"
            >
              <p
                data-node-id="140:663"
                className="-translate-x-1/2 absolute font-ui leading-[16px] left-[54px] not-italic text-[#3c6ea3] text-[12px] text-center top-[4.5px] tracking-[1.2px] uppercase whitespace-nowrap font-semibold"
              >
                Beneficios
              </p>
            </div>
          </div>
          <h2
            data-node-id="140:664"
            data-name="Heading 2"
            className="content-stretch flex flex-col items-start relative shrink-0 w-full figma-heading"
          >
            <span
              data-node-id="140:665"
              data-name="Container"
              className="h-[60px] relative shrink-0 w-full block"
            >
              <span
                data-node-id="140:666"
                className="-translate-x-1/2 absolute font-display leading-[60px] left-[336.34px] not-italic text-[#0a2e56] text-[48px] text-center top-0 whitespace-nowrap font-normal block"
              >
                Menos coordinación manual.
              </span>
            </span>
            <span
              data-node-id="140:667"
              data-name="Text"
              className="content-stretch flex flex-col items-center relative shrink-0 w-full block"
            >
              <span
                data-node-id="140:668"
                className="font-display leading-[60px] not-italic relative shrink-0 text-[#3c6ea3] text-[48px] text-center whitespace-nowrap font-normal block"
              >
                Más claridad para el equipo.
              </span>
            </span>
          </h2>
        </div>
      </div>
      <div
        data-node-id="140:669"
        data-name="Container:margin"
        className="content-stretch flex flex-col items-start pt-[56px] relative shrink-0 w-full"
      >
        <div
          data-node-id="140:670"
          data-name="Container"
          data-columns="4"
          style={{
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gridTemplateRows: "minmax(225.44px, auto)",
          }}
          className="gap-x-[20px] gap-y-[20px] grid relative shrink-0 w-full figma-grid"
        >
          <div
            data-node-id="140:671"
            data-name="BenefitCard"
            className="bg-[#f7f9fc] border border-[#ebf6fd] border-solid col-start-1 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch p-[24px] relative rounded-[16px] row-start-1 self-stretch shrink-0"
          >
            <div
              data-node-id="140:672"
              data-name="Text"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:673"
                className="font-ui leading-[32px] not-italic relative shrink-0 text-[#0a2e56] text-[24px] whitespace-nowrap font-normal"
              >
                <CalendarDays className="ui-icon" aria-hidden="true" />
              </p>
            </div>
            <div
              data-node-id="140:674"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:675"
                className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-bold"
              >
                Planificación centralizada
              </p>
            </div>
            <div
              data-node-id="140:676"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:677"
                className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[212px] font-normal"
              >
                Toda la información de turnos en un solo lugar, accesible para
                todo el equipo.
              </p>
            </div>
          </div>
          <div
            data-node-id="140:678"
            data-name="BenefitCard"
            className="bg-[#f7f9fc] border border-[#ebf6fd] border-solid col-start-2 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch p-[24px] relative rounded-[16px] row-start-1 self-stretch shrink-0"
          >
            <div
              data-node-id="140:679"
              data-name="Text"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:680"
                className="font-ui leading-[32px] not-italic relative shrink-0 text-[#0a2e56] text-[24px] whitespace-nowrap font-normal"
              >
                <RefreshCw className="ui-icon" aria-hidden="true" />
              </p>
            </div>
            <div
              data-node-id="140:681"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:682"
                className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-bold"
              >
                Cambios sin confusión
              </p>
            </div>
            <div
              data-node-id="140:683"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:684"
                className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[212px] font-normal"
              >
                Gestión de cambios de turno con registro y notificación
                automática.
              </p>
            </div>
          </div>
          <div
            data-node-id="140:685"
            data-name="BenefitCard"
            className="bg-[#f7f9fc] border border-[#ebf6fd] border-solid col-start-3 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch p-[24px] relative rounded-[16px] row-start-1 self-stretch shrink-0"
          >
            <div
              data-node-id="140:686"
              data-name="Text"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:687"
                className="font-ui leading-[32px] not-italic relative shrink-0 text-[#0a2e56] text-[24px] whitespace-nowrap font-normal"
              >
                <Eye className="ui-icon" aria-hidden="true" />
              </p>
            </div>
            <div
              data-node-id="140:688"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:689"
                className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-bold"
              >
                Visibilidad total
              </p>
            </div>
            <div
              data-node-id="140:690"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:691"
                className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[212px] font-normal"
              >
                Vista clara de la planificación por equipos, especialidades y
                fechas.
              </p>
            </div>
          </div>
          <div
            data-node-id="140:692"
            data-name="BenefitCard"
            className="bg-[#f7f9fc] border border-[#ebf6fd] border-solid col-start-4 content-stretch flex flex-col gap-[12px] items-start justify-self-stretch p-[24px] relative rounded-[16px] row-start-1 self-stretch shrink-0"
          >
            <div
              data-node-id="140:693"
              data-name="Text"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:694"
                className="font-ui leading-[32px] not-italic relative shrink-0 text-[#0a2e56] text-[24px] whitespace-nowrap font-normal"
              >
                <Zap className="ui-icon" aria-hidden="true" />
              </p>
            </div>
            <div
              data-node-id="140:695"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:696"
                className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] w-[212px] font-bold"
              >
                Menos tiempo administrativo
              </p>
            </div>
            <div
              data-node-id="140:697"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:698"
                className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[212px] font-normal"
              >
                Reduce significativamente el tiempo dedicado a coordinación
                manual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarPlans() {
  return (
    <section
      data-node-id="140:699"
      data-name="Section"
      id="planes"
      className="bg-[#f0f4f8] content-stretch flex flex-col items-start py-[128px] relative shrink-0 w-full figma-section calendar-plans"
    >
      <div
        data-node-id="140:700"
        data-name="Container"
        className="content-stretch flex flex-col items-start max-w-[1280px] px-[32px] relative shrink-0 w-full figma-shell"
      >
        <div
          data-node-id="140:701"
          data-name="Container:margin"
          className="content-stretch flex flex-col items-center relative shrink-0 w-full"
        >
          <div
            data-node-id="140:702"
            data-name="Container"
            className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-[672px]"
          >
            <div
              data-node-id="140:703"
              data-name="Container"
              className="h-[46.5px] relative shrink-0 w-full"
            >
              <div
                data-node-id="140:704"
                data-name="Tag"
                className="absolute bg-[rgba(99,102,241,0.08)] h-[24px] left-1/2 rounded-[16777200px] top-[2.5px] w-[78.641px] -translate-x-1/2"
              >
                <p
                  data-node-id="140:705"
                  className="-translate-x-1/2 absolute font-ui leading-[16px] left-[39px] not-italic text-[#3c6ea3] text-[12px] text-center top-[4.5px] tracking-[1.2px] uppercase whitespace-nowrap font-semibold"
                >
                  Planes
                </p>
              </div>
            </div>
            <h2
              data-node-id="140:706"
              data-name="Heading 2"
              className="content-stretch flex flex-col items-center relative shrink-0 w-full figma-heading"
            >
              <span
                data-node-id="140:707"
                className="font-editorial leading-[0] not-italic relative shrink-0 text-[#0a2e56] text-[0px] text-center w-[672px] font-normal block"
              >
                <span className="font-display leading-[60px] text-[48px] font-semibold">
                  Encuentra el plan adecuado
                </span>
                <span className="font-display leading-[60px] text-[#3c6ea3] text-[48px] font-semibold">{` para tu equipo.`}</span>
              </span>
            </h2>
            <div
              data-node-id="140:708"
              data-name="Paragraph"
              className="content-stretch flex flex-col h-[40px] items-center pt-[16px] relative shrink-0 w-[672px]"
            >
              <p
                data-node-id="140:709"
                className="font-ui leading-[24px] not-italic relative shrink-0 text-[#5a6b82] text-[16px] text-center whitespace-nowrap font-normal"
              >
                Planes flexibles adaptados al tamaño y necesidades de tu
                organización.
              </p>
            </div>
          </div>
        </div>
        <div
          data-node-id="140:710"
          data-name="Container:margin"
          className="content-stretch flex flex-col items-start pt-[56px] relative shrink-0 w-full"
        >
          <div
            data-node-id="140:711"
            data-name="Container"
            data-columns="3"
            style={{
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gridTemplateRows: "minmax(503.47px, auto)",
            }}
            className="gap-x-[24px] gap-y-[24px] grid relative shrink-0 w-full figma-grid"
          >
            <article
              data-node-id="140:712"
              data-name="PricingCard"
              style={{
                minHeight: 503.46875,
              }}
              className="bg-white border border-[#dde4ee] border-solid col-start-1 content-stretch flex flex-col gap-[20px] items-start justify-self-stretch p-[32px] relative rounded-[16px] row-start-1 self-stretch shrink-0 figma-pricing-card"
            >
              <div
                data-node-id="140:713"
                data-name="Container"
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
              >
                <h3
                  data-node-id="140:714"
                  data-name="Heading 3"
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full figma-heading"
                >
                  <span
                    data-node-id="140:715"
                    className="font-display leading-[28px] not-italic relative shrink-0 text-[#0a2e56] text-[20px] whitespace-nowrap font-semibold block"
                  >
                    Plan Inicial
                  </span>
                </h3>
                <div
                  data-node-id="140:716"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[287px]"
                >
                  <p
                    data-node-id="140:717"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[287px] font-normal"
                  >
                    Para equipos pequeños que comienzan a centralizar su
                    planificación.
                  </p>
                </div>
              </div>
              <div
                data-node-id="140:718"
                data-name="Container"
                className="bg-[#f0f4f8] content-stretch flex flex-col items-start py-[16px] relative rounded-[12px] shrink-0 w-full"
              >
                <div
                  data-node-id="140:719"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-center relative shrink-0 w-full"
                >
                  <p
                    data-node-id="140:720"
                    className="font-body leading-[20px] relative shrink-0 text-[#5a6b82] text-[14px] text-center whitespace-nowrap font-medium"
                  >
                    Precio
                  </p>
                </div>
                <div
                  data-node-id="140:721"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col h-[36px] items-center pt-[4px] relative shrink-0 w-[287px]"
                >
                  <p
                    data-node-id="140:722"
                    className="font-display leading-[32px] not-italic relative shrink-0 text-[#0a2e56] text-[24px] text-center whitespace-nowrap font-semibold"
                  >
                    $20.000 CLP + IVA
                  </p>
                </div>
              </div>
              <div
                data-node-id="140:723"
                data-name="Container"
                className="content-stretch flex flex-[159.969_0_0] flex-col gap-[8px] items-start min-h-px relative w-full"
              >
                <div
                  data-node-id="140:724"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:725"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:726"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#3c6ea3] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:727"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:728"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                    >
                      1 acceso a coordinador
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:729"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:730"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:731"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#3c6ea3] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:732"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:733"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                    >
                      20 profesionales visualizadores ó
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:734"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:735"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:736"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#3c6ea3] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:737"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:738"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                    >
                      10 profesionales activos
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:739"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:740"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:741"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#3c6ea3] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:742"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:743"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                    >
                      Patrones de turno
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:744"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:745"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:746"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#3c6ea3] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:747"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:748"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                    >
                      Soporte por email
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-node-id="140:749"
                data-name="Button:margin"
                className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0"
              >
                <a
                  data-node-id="140:750"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
                  }}
                  data-name="Button"
                  href="contacto.html?solucion=calendar"
                  className="content-stretch flex flex-col items-center justify-center py-[12px] relative rounded-[12px] shrink-0 w-[287px] figma-link"
                >
                  <p
                    data-node-id="140:751"
                    className="font-ui leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap font-medium"
                  >
                    Solicitar cotización
                  </p>
                </a>
              </div>
            </article>
            <article
              data-node-id="140:752"
              data-name="PricingCard"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
                minHeight: 503.46875,
              }}
              className="col-start-2 content-stretch flex flex-col gap-[20px] items-start justify-self-stretch p-[32px] relative rounded-[16px] row-start-1 self-stretch shrink-0 figma-pricing-card"
            >
              <div
                data-node-id="140:753"
                data-name="Container"
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
              >
                <h3
                  data-node-id="140:754"
                  data-name="Heading 3"
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full figma-heading"
                >
                  <span
                    data-node-id="140:755"
                    className="font-display leading-[28px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap font-semibold block"
                  >
                    Plan Equipo
                  </span>
                </h3>
                <div
                  data-node-id="140:756"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[289px]"
                >
                  <p
                    data-node-id="140:757"
                    className="font-body leading-[22.75px] relative shrink-0 text-[14px] text-white w-[289px] font-normal"
                  >
                    Para unidades que requieren gestión avanzada de turnos y
                    equipos.
                  </p>
                </div>
              </div>
              <div
                data-node-id="140:758"
                data-name="Container"
                className="bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col items-start py-[16px] relative rounded-[12px] shrink-0 w-full"
              >
                <div
                  data-node-id="140:759"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-center relative shrink-0 w-full"
                >
                  <p
                    data-node-id="140:760"
                    className="font-body leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.4)] text-center whitespace-nowrap font-medium"
                  >
                    Precio
                  </p>
                </div>
                <div
                  data-node-id="140:761"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col h-[36px] items-center pt-[4px] relative shrink-0 w-[289px]"
                >
                  <p
                    data-node-id="140:762"
                    className="font-display leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap font-semibold"
                  >
                    $40.000 CLP + IVA
                  </p>
                </div>
              </div>
              <div
                data-node-id="140:763"
                data-name="Container"
                className="content-stretch flex flex-[161.969_0_0] flex-col gap-[8px] items-start min-h-px relative w-full"
              >
                <div
                  data-node-id="140:764"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:765"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:766"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#c5d7eb] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:767"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:768"
                      className="font-body leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap font-normal"
                    >
                      2 accesos a coordinadores
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:769"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:770"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:771"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#c5d7eb] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:772"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:773"
                      className="font-body leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap font-normal"
                    >
                      40 profesionales visualizadores ó
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:774"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:775"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:776"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#c5d7eb] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:777"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:778"
                      className="font-body leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap font-normal"
                    >
                      30 profesionales activos
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:779"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:780"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:781"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#c5d7eb] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:782"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:783"
                      className="font-body leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap font-normal"
                    >
                      Biblioteca de profesionales
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:784"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:785"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:786"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#c5d7eb] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:787"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:788"
                      className="font-body leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] whitespace-nowrap font-normal"
                    >
                      Soporte prioritario
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-node-id="140:789"
                data-name="Button:margin"
                className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0"
              >
                <a
                  data-node-id="140:790"
                  data-name="Button"
                  href="contacto.html?solucion=calendar"
                  className="bg-[#3c6ea3] content-stretch flex flex-col items-center justify-center py-[12px] relative rounded-[12px] shrink-0 w-[289px] figma-link"
                >
                  <p
                    data-node-id="140:791"
                    className="font-ui leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap font-medium"
                  >
                    Solicitar cotización
                  </p>
                </a>
              </div>
              <div
                data-node-id="140:792"
                data-name="Container"
                className="absolute bg-[#3c6ea3] content-stretch flex flex-col items-start left-1/2 px-[16px] py-[4px] rounded-[16777200px] top-[-12px] -translate-x-1/2"
              >
                <p
                  data-node-id="140:793"
                  className="font-ui leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap font-semibold"
                >
                  Recomendado
                </p>
              </div>
            </article>
            <article
              data-node-id="140:794"
              data-name="PricingCard"
              style={{
                minHeight: 503.46875,
              }}
              className="bg-white border border-[#dde4ee] border-solid col-start-3 content-stretch flex flex-col gap-[20px] items-start justify-self-stretch p-[32px] relative rounded-[16px] row-start-1 self-stretch shrink-0 figma-pricing-card"
            >
              <div
                data-node-id="140:795"
                data-name="Container"
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
              >
                <h3
                  data-node-id="140:796"
                  data-name="Heading 3"
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full figma-heading"
                >
                  <span
                    data-node-id="140:797"
                    className="font-display leading-[28px] not-italic relative shrink-0 text-[#0a2e56] text-[20px] whitespace-nowrap font-semibold block"
                  >
                    Plan Empresa
                  </span>
                </h3>
                <div
                  data-node-id="140:798"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[287px]"
                >
                  <p
                    data-node-id="140:799"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[287px] font-normal"
                  >
                    Para instituciones de salud con múltiples unidades y
                    equipos.
                  </p>
                </div>
              </div>
              <div
                data-node-id="140:800"
                data-name="Container"
                className="bg-[#f0f4f8] content-stretch flex flex-col items-start py-[16px] relative rounded-[12px] shrink-0 w-full"
              >
                <div
                  data-node-id="140:801"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-center relative shrink-0 w-full"
                >
                  <p
                    data-node-id="140:802"
                    className="font-body leading-[20px] relative shrink-0 text-[#5a6b82] text-[14px] text-center whitespace-nowrap font-medium"
                  >
                    Cotizar
                  </p>
                </div>
                <div
                  data-node-id="140:803"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col h-[36px] items-center pt-[4px] relative shrink-0 w-[287px]"
                >
                  <p
                    data-node-id="140:804"
                    className="font-display leading-[32px] not-italic relative shrink-0 text-[#0a2e56] text-[24px] text-center whitespace-nowrap font-semibold"
                  >
                    Plan personalizado
                  </p>
                </div>
              </div>
              <div
                data-node-id="140:805"
                data-name="Container"
                className="content-stretch flex flex-[159.969_0_0] flex-col gap-[8px] items-start min-h-px relative w-full"
              >
                <div
                  data-node-id="140:806"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:807"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:808"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#3c6ea3] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:809"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:810"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                    >
                      Más de 50 profesionales activos ó
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:811"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:812"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:813"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#3c6ea3] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:814"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:815"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                    >{`3+ unidades/ servicios `}</p>
                  </div>
                </div>
                <div
                  data-node-id="140:816"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:817"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:818"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#3c6ea3] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:819"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:820"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                    >
                      Biblioteca de profesionales
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:821"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:822"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:823"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#3c6ea3] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:824"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:825"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                    >
                      Onboarding dedicado
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:826"
                  data-name="Container"
                  className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:827"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:828"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#3c6ea3] text-[16px] whitespace-nowrap font-normal"
                    >
                      <Check className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                  <div
                    data-node-id="140:829"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:830"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                    >
                      SLA garantizado
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-node-id="140:831"
                data-name="Button:margin"
                className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0"
              >
                <a
                  data-node-id="140:832"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
                  }}
                  data-name="Button"
                  href="contacto.html?solucion=calendar"
                  className="content-stretch flex flex-col items-center justify-center py-[12px] relative rounded-[12px] shrink-0 w-[287px] figma-link"
                >
                  <p
                    data-node-id="140:833"
                    className="font-ui leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap font-medium"
                  >
                    Solicitar cotización
                  </p>
                </a>
              </div>
            </article>
          </div>
        </div>
        <div
          data-node-id="140:834"
          data-name="Paragraph"
          className="content-stretch flex flex-col h-[52px] items-center pt-[32px] relative shrink-0 w-[1107px]"
        >
          <p
            data-node-id="140:835"
            className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] text-center whitespace-nowrap font-normal"
          >
            * Los precios se definen según el tamaño y requerimientos de cada
            organización. Solicita una cotización personalizada.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function CalendarPage() {
  return (
    <div className="figma-page calendar-page">
      <SiteHeader activePage="calendar" />
      <main>
        <CalendarHero />
        <CalendarProblem />
        <CalendarSolution />
        <CalendarBenefits />
        <CalendarPlans />
      </main>
      <SiteFooter />
    </div>
  );
}
