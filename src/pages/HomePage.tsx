import CalendarDays from "lucide-react/dist/esm/icons/calendar-days.js";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right.js";
import Brain from "lucide-react/dist/esm/icons/brain.js";
import ChartNoAxesColumnIncreasing from "lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js";
import Check from "lucide-react/dist/esm/icons/check.js";
import ClipboardList from "lucide-react/dist/esm/icons/clipboard-list.js";
import Link from "lucide-react/dist/esm/icons/link.js";
import UserRound from "lucide-react/dist/esm/icons/user-round.js";
import Zap from "lucide-react/dist/esm/icons/zap.js";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

// Implemented from the FINAL page in Figma. data-node-id attributes retain
// the connection to the designer's sections, typography, and asset layers.
function HomeHero() {
  return (
    <section
      data-node-id="140:7"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
      }}
      data-name="Section"
      id="inicio"
      className="h-[737px] min-h-[732px] overflow-clip relative shrink-0 w-full figma-adaptive-height figma-section home-hero"
    >
      <div
        data-node-id="140:8"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1171 737' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -93.137 -93.137 0 819.7 294.8)'><stop stop-color='rgba(20,184,166,0.125)' offset='0'/><stop stop-color='rgba(20,184,166,0)' offset='0.6'/></radialGradient></defs></svg>\"), url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1171 737' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -110.69 -110.69 0 234.2 589.6)'><stop stop-color='rgba(99,102,241,0.082)' offset='0'/><stop stop-color='rgba(99,102,241,0)' offset='0.5'/></radialGradient></defs></svg>\")",
        }}
        data-name="Container"
        className="absolute h-[737px] left-0 opacity-30 top-0 w-full figma-adaptive-height"
      />
      <div
        data-node-id="140:9"
        data-name="Container"
        className="absolute content-stretch flex flex-col h-[737px] items-start left-0 overflow-clip top-0 w-full figma-adaptive-height"
      >
        <div
          data-node-id="140:10"
          data-name="Image (Equipo de salud colaborando)"
          className="h-[737px] opacity-20 relative shrink-0 w-full figma-adaptive-height"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[91.05%] left-[-0.91%] max-w-none top-[8.96%] w-[101.83%]"
              src="/figma/home/imgImageEquipoDeSaludColaborando.webp"
              data-figma-asset="home/imgImageEquipoDeSaludColaborando"
              decoding="async"
            />
          </div>
        </div>
      </div>
      <div
        data-node-id="140:11"
        data-name="Container"
        className="content-stretch flex flex-col items-start max-w-[1280px] px-[32px] py-[160px] w-full figma-shell"
      >
        <div
          data-node-id="140:12"
          data-name="Container"
          className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-[672px]"
        >
          <div
            data-node-id="140:13"
            data-name="Container"
            className="h-[61.5px] relative shrink-0 w-full"
          >
            <div
              data-node-id="140:14"
              data-name="Container"
              className="absolute bg-[rgba(20,184,166,0.15)] content-stretch flex gap-[8px] h-[28px] items-center left-0 px-[12px] py-[6px] rounded-[16777200px] top-[1.5px]"
            >
              <div
                data-node-id="140:15"
                data-name="Text"
                className="bg-[#00d5be] opacity-[0.72] relative rounded-[16777200px] shrink-0 size-[6px]"
              />
              <p
                data-node-id="140:16"
                className="font-ui leading-[16px] not-italic relative shrink-0 text-[#5eead4] text-[12px] whitespace-nowrap font-medium"
              >
                Ecosistema tecnológico para equipos de salud
              </p>
            </div>
          </div>
          <h1
            data-node-id="140:17"
            data-name="Heading 1"
            className="content-stretch flex flex-col items-start relative shrink-0 w-full figma-heading"
          >
            <span
              data-node-id="140:18"
              data-name="Container"
              className="h-[72px] relative shrink-0 w-full block"
            >
              <span
                data-node-id="140:19"
                className="absolute font-display leading-[72px] left-0 not-italic text-[72px] text-white top-[0.5px] whitespace-nowrap font-normal block"
              >
                Información disponible
              </span>
            </span>
            <span
              data-node-id="140:20"
              data-name="Text"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full block"
            >
              <span
                data-node-id="140:21"
                className="font-display leading-[72px] not-italic relative shrink-0 text-[#5eead4] text-[72px] whitespace-nowrap font-normal block"
              >
                al instante
              </span>
            </span>
          </h1>
          <div
            data-node-id="140:22"
            data-name="Paragraph:margin"
            className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0"
          >
            <p
              data-node-id="140:23"
              className="font-body leading-[32.5px] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.65)] w-[576px] font-normal"
            >{`Hando desarrolla soluciones tecnológicas de fácil uso para el análisis de datos y la coordinación clínica. `}</p>
          </div>
          <div
            data-node-id="140:24"
            data-name="Container"
            className="content-stretch flex gap-[12px] h-[90px] items-start pt-[40px] relative shrink-0 w-[672px]"
          >
            <a
              data-node-id="140:25"
              data-name="Button"
              href="#soluciones"
              className="bg-[#3d869c] content-stretch flex flex-col h-full items-center justify-center px-[28px] py-[14px] relative rounded-[12px] shrink-0 figma-link"
            >
              <p
                data-node-id="140:26"
                className="font-body leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap font-medium"
              >
                Conoce nuestras soluciones
              </p>
            </a>
            <a
              data-node-id="140:27"
              data-name="Button"
              href="#que-es"
              className="border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col h-full items-center justify-center px-[28px] py-[14px] relative rounded-[12px] shrink-0 figma-link"
            >
              <p
                data-node-id="140:28"
                className="font-body leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap font-medium"
              >
                Conoce Hando
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutHando() {
  return (
    <section
      data-node-id="140:29"
      data-name="Container"
      id="que-es"
      className="content-stretch flex flex-col items-start max-w-[1280px] px-[32px] py-[100px] relative shrink-0 w-full figma-shell figma-section about-hando"
    >
      <div
        data-node-id="140:30"
        data-name="Container"
        data-columns="2"
        style={{
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gridTemplateRows: "minmax(620.50px, auto)",
        }}
        className="gap-x-[64px] gap-y-[64px] grid relative shrink-0 w-full figma-grid"
      >
        <div
          data-node-id="140:31"
          data-name="Container"
          className="col-start-1 content-stretch flex flex-col h-[621px] items-start justify-self-start relative row-start-1 self-center shrink-0 w-[551px] figma-adaptive-height"
        >
          <div
            data-node-id="140:32"
            data-name="Container"
            className="h-[46.5px] relative shrink-0 w-full"
          >
            <div
              data-node-id="140:33"
              data-name="HomeSectionTag"
              className="absolute bg-[rgba(20,184,166,0.08)] h-[24px] left-0 rounded-[16777200px] top-[2.5px] w-[129.563px]"
            >
              <p
                data-node-id="140:34"
                className="absolute font-ui leading-[16px] left-[12px] not-italic text-[#3d869c] text-[12px] top-[4.5px] tracking-[1.2px] uppercase whitespace-nowrap font-semibold"
              >
                Qué es Hando
              </p>
            </div>
          </div>
          <h2
            data-node-id="140:35"
            data-name="Heading 2"
            className="content-stretch flex flex-col items-start relative shrink-0 w-full figma-heading"
          >
            <span
              data-node-id="140:36"
              className="font-display leading-[0] not-italic relative shrink-0 text-[#0a2e56] text-[0px] w-[551px] font-normal block"
            >
              <span className="leading-[60px] text-[48px]">{`Tecnología `}</span>
              <span className="leading-[60px] text-[48px]">que fortalece</span>
              <span className="leading-[60px] text-[#3d869c] text-[48px]">{` el desempeño de tu equipo`}</span>
            </span>
          </h2>
          <div
            data-node-id="140:37"
            data-name="Paragraph"
            className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full"
          >
            <p
              data-node-id="140:38"
              className="font-body leading-[26px] relative shrink-0 text-[#5a6b82] text-[16px] w-[522px] font-normal"
            >
              Hando nace de una observación concreta: los equipos de salud
              operan con información fragmentada, procesos desconectados y una
              dependencia excesiva de canales informales para coordinar tareas
              críticas.
            </p>
          </div>
          <div
            data-node-id="140:39"
            data-name="Paragraph"
            className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full"
          >
            <p
              data-node-id="140:40"
              className="font-body leading-[26px] relative shrink-0 text-[#5a6b82] text-[16px] w-[522px] font-normal"
            >
              Desarrollamos soluciones que centralizan, organizan y hacen fluir
              la información entre personas, equipos y procesos — reduciendo la
              fricción y aumentando la seguridad en cada etapa.
            </p>
          </div>
          <div
            data-node-id="140:41"
            data-name="Container:margin"
            className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-full"
          >
            <div
              data-node-id="140:42"
              data-name="Container"
              data-columns="2"
              style={{
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gridTemplateRows: "minmax(80px, auto) minmax(80px, auto)",
              }}
              className="gap-x-[24px] gap-y-[24px] grid relative shrink-0 w-full figma-grid"
            >
              <div
                data-node-id="140:43"
                data-name="Container"
                className="bg-[#f0f4f8] col-start-1 content-stretch flex flex-col items-start justify-self-stretch p-[16px] relative rounded-[12px] row-start-1 self-stretch shrink-0"
              >
                <div
                  data-node-id="140:44"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                >
                  <p
                    data-node-id="140:45"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] whitespace-nowrap font-normal"
                  >
                    Coordinación
                  </p>
                </div>
                <div
                  data-node-id="140:46"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col h-[32px] items-start pt-[4px] relative shrink-0 w-[216.75px]"
                >
                  <p
                    data-node-id="140:47"
                    className="font-display leading-[32px] not-italic relative shrink-0 text-[#0a2e56] text-[24px] whitespace-nowrap font-semibold"
                  >
                    Centralizada
                  </p>
                </div>
              </div>
              <div
                data-node-id="140:48"
                data-name="Container"
                className="bg-[#f0f4f8] col-start-2 content-stretch flex flex-col items-start justify-self-stretch p-[16px] relative rounded-[12px] row-start-1 self-stretch shrink-0"
              >
                <div
                  data-node-id="140:49"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                >
                  <p
                    data-node-id="140:50"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] whitespace-nowrap font-normal"
                  >
                    Continuidad
                  </p>
                </div>
                <div
                  data-node-id="140:51"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col h-[32px] items-start pt-[4px] relative shrink-0 w-[216.75px]"
                >
                  <p
                    data-node-id="140:52"
                    className="font-display leading-[32px] not-italic relative shrink-0 text-[#0a2e56] text-[24px] whitespace-nowrap font-semibold"
                  >
                    Garantizada
                  </p>
                </div>
              </div>
              <div
                data-node-id="140:53"
                data-name="Container"
                className="bg-[#f0f4f8] col-start-1 content-stretch flex flex-col items-start justify-self-stretch p-[16px] relative rounded-[12px] row-start-2 self-stretch shrink-0"
              >
                <div
                  data-node-id="140:54"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                >
                  <p
                    data-node-id="140:55"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] whitespace-nowrap font-normal"
                  >
                    Información
                  </p>
                </div>
                <div
                  data-node-id="140:56"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col h-[32px] items-start pt-[4px] relative shrink-0 w-[216.75px]"
                >
                  <p
                    data-node-id="140:57"
                    className="font-display leading-[32px] not-italic relative shrink-0 text-[#0a2e56] text-[24px] whitespace-nowrap font-semibold"
                  >
                    Estructurada
                  </p>
                </div>
              </div>
              <div
                data-node-id="140:58"
                data-name="Container"
                className="bg-[#f0f4f8] col-start-2 content-stretch flex flex-col items-start justify-self-stretch p-[16px] relative rounded-[12px] row-start-2 self-stretch shrink-0"
              >
                <div
                  data-node-id="140:59"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                >
                  <p
                    data-node-id="140:60"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] whitespace-nowrap font-normal"
                  >
                    Seguridad
                  </p>
                </div>
                <div
                  data-node-id="140:61"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col h-[32px] items-start pt-[4px] relative shrink-0 w-[216.75px]"
                >
                  <p
                    data-node-id="140:62"
                    className="font-display leading-[32px] not-italic relative shrink-0 text-[#0a2e56] text-[24px] whitespace-nowrap font-semibold"
                  >
                    Fundamental
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-node-id="140:63"
          data-name="Container"
          className="col-start-2 content-stretch flex flex-col h-[391.125px] items-start justify-self-stretch relative row-start-1 self-center shrink-0 figma-adaptive-height"
        >
          <div
            data-node-id="140:64"
            data-name="Container"
            style={{
              aspectRatio: "521.5 / 391.125",
            }}
            className="bg-[#eef2f7] content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full figma-adaptive-height figma-composition w-full"
          >
            <div
              data-node-id="140:67"
              data-name="aee4635f-1faa-4152-99a1-e250b02f4dec 1"
              style={{
                left: "0%",
                top: "0%",
                width: "101.62991371045062%",
                height: "169.2553531479706%",
              }}
              className="shrink-0 figma-adaptive-height absolute"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  className="absolute h-[98.19%] left-[0.12%] max-w-none top-[-30.91%] w-[98.15%]"
                  src="/figma/home/imgAee4635F1Faa415299A1E250B02F4Dec1.webp"
                  data-figma-asset="home/imgAee4635F1Faa415299A1E250B02F4Dec1"
                  alt="Estetoscopio y atención clínica"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
          <div
            data-node-id="140:68"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
            }}
            data-name="Container"
            className="absolute content-stretch drop-shadow-[0px_20px_12.5px_rgba(0,0,0,0.1),0px_8px_5px_rgba(0,0,0,0.1)] flex flex-col items-start left-[-20px] p-[20px] rounded-[16px] top-[315.13px] w-[202.367px]"
          >
            <div
              data-node-id="140:69"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:70"
                className="font-editorial leading-[36px] not-italic relative shrink-0 text-[30px] text-white whitespace-nowrap font-normal"
              >
                2 soluciones
              </p>
            </div>
            <div
              data-node-id="140:71"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0 w-[162px]"
            >
              <p
                data-node-id="140:72"
                className="font-editorial leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[162px] font-normal"
              >
                4 proyectos en desarrollo en nuestro ecosistema
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HandoVision() {
  return (
    <section
      data-node-id="140:73"
      data-name="Section"
      id="vision"
      className="bg-[#f0f4f8] content-stretch flex flex-col items-start py-[100px] relative shrink-0 w-full figma-section hando-vision"
    >
      <div
        data-node-id="140:74"
        data-name="Container"
        className="content-stretch flex flex-col items-start max-w-[1280px] px-[32px] relative shrink-0 w-full figma-shell"
      >
        <div
          data-node-id="140:75"
          data-name="Container:margin"
          className="content-stretch flex flex-col items-center relative shrink-0 w-full"
        >
          <div
            data-node-id="140:76"
            data-name="Container"
            className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full"
          >
            <div
              data-node-id="140:77"
              data-name="Container"
              className="h-[46.5px] relative shrink-0 w-full"
            >
              <div
                data-node-id="140:78"
                data-name="HomeSectionTag"
                className="absolute bg-[rgba(20,184,166,0.08)] h-[24px] left-1/2 rounded-[16777200px] top-[-0.5px] w-[163.898px] -translate-x-1/2"
              >
                <p
                  data-node-id="140:79"
                  className="-translate-x-1/2 absolute font-ui leading-[16px] left-[82px] not-italic text-[#3d869c] text-[12px] text-center top-[4.5px] tracking-[1.2px] uppercase whitespace-nowrap font-semibold"
                >
                  nuestra visión
                </p>
              </div>
            </div>
            <h2
              data-node-id="140:80"
              data-name="Heading 2"
              className="content-stretch flex flex-col items-center relative shrink-0 w-full figma-heading"
            >
              <span
                data-node-id="140:81"
                className="font-display leading-[0] not-italic relative shrink-0 text-[#0a2e56] text-[0px] text-center w-[887px] whitespace-pre-wrap font-normal block"
              >
                <span className="mb-0 text-[72px] block">
                  <span className="leading-[72px]">T</span>
                  <span className="font-display leading-[72px] not-italic font-normal">{`ecnología `}</span>
                  <span className="leading-[72px]">al servicio</span>
                  <span className="font-display leading-[72px] not-italic font-normal">
                    ,
                  </span>
                  <span className="font-display leading-[72px] not-italic text-[#3d869c] font-normal">{` `}</span>
                </span>
                <span className="leading-[72px] text-[#3d869c] text-[72px] block">
                  de las personas.
                </span>
              </span>
            </h2>
            <div
              data-node-id="140:82"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-center pt-[24px] relative shrink-0 w-[768px]"
            >
              <p
                data-node-id="140:83"
                className="font-body leading-[26px] relative shrink-0 text-[#5a6b82] text-[16px] text-center w-full font-normal"
              >
                Creemos que el valor de la tecnología se mide por su impacto en
                las personas. Cada solución que desarrollamos parte de un
                problema real y busca mejorar la manera en que los equipos
                coordinan, comunican y toman decisiones. Todo desarrollado con
                las personas como enfoque central.
              </p>
            </div>
          </div>
        </div>
        <div
          data-node-id="140:84"
          data-name="Container"
          className="content-stretch flex h-[156px] items-center justify-center pt-[64px] relative shrink-0 w-[1107px]"
        >
          <div
            data-node-id="140:85"
            data-name="Container"
            className="content-stretch flex items-center relative shrink-0"
          >
            <div
              data-node-id="140:86"
              data-name="Container"
              className="content-stretch flex flex-col items-center relative shrink-0"
            >
              <div
                data-node-id="140:87"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
                }}
                data-name="Container"
                className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[64px]"
              >
                <p
                  data-node-id="140:88"
                  className="font-editorial leading-[32px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap font-normal"
                >
                  <UserRound className="ui-icon" aria-hidden="true" />
                </p>
              </div>
              <div
                data-node-id="140:89"
                data-name="Paragraph:margin"
                className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0"
              >
                <p
                  data-node-id="140:90"
                  className="font-ui leading-[20px] not-italic relative shrink-0 text-[#0a2e56] text-[14px] text-center whitespace-nowrap font-semibold"
                >
                  Personas
                </p>
              </div>
            </div>
            <div
              data-node-id="140:91"
              data-name="Container:margin"
              className="content-stretch flex items-start px-[16px] relative shrink-0"
            >
              <div
                data-node-id="140:92"
                data-name="Container"
                className="bg-[#dde4ee] h-px relative shrink-0 w-[64px]"
              />
            </div>
          </div>
          <div
            data-node-id="140:93"
            data-name="Container"
            className="content-stretch flex items-center relative shrink-0"
          >
            <div
              data-node-id="140:94"
              data-name="Container"
              className="content-stretch flex flex-col items-center relative shrink-0"
            >
              <div
                data-node-id="140:95"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
                }}
                data-name="Container"
                className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[64px]"
              >
                <p
                  data-node-id="140:96"
                  className="font-editorial leading-[32px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap font-normal"
                >
                  <ClipboardList className="ui-icon" aria-hidden="true" />
                </p>
              </div>
              <div
                data-node-id="140:97"
                data-name="Paragraph:margin"
                className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0"
              >
                <p
                  data-node-id="140:98"
                  className="font-ui leading-[20px] not-italic relative shrink-0 text-[#0a2e56] text-[14px] text-center whitespace-nowrap font-semibold"
                >
                  Información
                </p>
              </div>
            </div>
            <div
              data-node-id="140:99"
              data-name="Container:margin"
              className="content-stretch flex items-start px-[16px] relative shrink-0"
            >
              <div
                data-node-id="140:100"
                data-name="Container"
                className="bg-[#dde4ee] h-px relative shrink-0 w-[64px]"
              />
            </div>
          </div>
          <div
            data-node-id="140:101"
            data-name="Container"
            className="content-stretch flex items-center relative shrink-0"
          >
            <div
              data-node-id="140:102"
              data-name="Container"
              className="content-stretch flex flex-col items-center relative shrink-0"
            >
              <div
                data-node-id="140:103"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
                }}
                data-name="Container"
                className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[64px]"
              >
                <p
                  data-node-id="140:104"
                  className="font-editorial leading-[32px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap font-normal"
                >
                  <Link className="ui-icon" aria-hidden="true" />
                </p>
              </div>
              <div
                data-node-id="140:105"
                data-name="Paragraph:margin"
                className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0"
              >
                <p
                  data-node-id="140:106"
                  className="font-ui leading-[20px] not-italic relative shrink-0 text-[#0a2e56] text-[14px] text-center whitespace-nowrap font-semibold"
                >
                  Coordinación
                </p>
              </div>
            </div>
            <div
              data-node-id="140:107"
              data-name="Container:margin"
              className="content-stretch flex items-start px-[16px] relative shrink-0"
            >
              <div
                data-node-id="140:108"
                data-name="Container"
                className="bg-[#dde4ee] h-px relative shrink-0 w-[64px]"
              />
            </div>
          </div>
          <div
            data-node-id="140:109"
            data-name="Container"
            className="content-stretch flex flex-col items-center relative shrink-0"
          >
            <div
              data-node-id="140:110"
              data-name="Container"
              className="bg-[#3d869c] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[64px]"
            >
              <p
                data-node-id="140:111"
                style={{
                  fontVariationSettings: '"CTGR" 0, "wdth" 100',
                }}
                className="font-editorial leading-[32px] relative shrink-0 text-[24px] text-white whitespace-nowrap font-normal"
              >
                <Check className="ui-icon" aria-hidden="true" />
              </p>
            </div>
            <div
              data-node-id="140:112"
              data-name="Paragraph:margin"
              className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0"
            >
              <p
                data-node-id="140:113"
                className="font-ui leading-[20px] not-italic relative shrink-0 text-[#0a2e56] text-[14px] text-center whitespace-nowrap font-semibold"
              >
                Continuidad
              </p>
            </div>
          </div>
        </div>
        <div
          data-node-id="140:114"
          data-name="Container:margin"
          className="content-stretch flex flex-col items-start pt-[80px] relative shrink-0 w-full"
        >
          <div
            data-node-id="140:115"
            data-name="Container"
            data-columns="2"
            style={{
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gridTemplateRows: "minmax(343.75px, auto)",
            }}
            className="gap-x-[32px] gap-y-[32px] grid relative shrink-0 w-full figma-grid"
          >
            <div
              data-node-id="140:116"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
              }}
              data-name="Container"
              className="col-start-1 content-stretch flex flex-col items-start justify-self-stretch p-[32px] relative rounded-[16px] row-start-1 self-stretch shrink-0"
            >
              <div
                data-node-id="140:117"
                data-name="Paragraph"
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
              >
                <p
                  data-node-id="140:118"
                  className="font-body leading-[22.75px] relative shrink-0 text-[#3d869c] text-[14px] whitespace-nowrap font-normal"
                >
                  Nuestra visión
                </p>
              </div>
              <h3
                data-node-id="140:119"
                data-name="Heading 3"
                className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-[473.5px] figma-heading"
              >
                <span
                  data-node-id="140:120"
                  className="font-display leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-[474px] font-semibold block"
                >
                  Un ecosistema de salud donde la información fluye sin
                  fricción.
                </span>
              </h3>
              <div
                data-node-id="140:121"
                data-name="Paragraph"
                className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-[473.5px]"
              >
                <p
                  data-node-id="140:122"
                  className="font-body leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.65)] w-[474px] font-normal"
                >
                  Buscamos transformar la forma en que los equipos de salud
                  coordinan y comparten información. Una visión donde cada
                  proceso, cada decisión y cada transición de cuidado esté
                  respaldada por información clara, oportuna y confiable.
                </p>
              </div>
            </div>
            <div
              data-node-id="140:123"
              data-name="Container"
              className="bg-[#f7f9fc] border border-[#dde4ee] border-solid col-start-2 content-stretch flex flex-col items-start justify-self-stretch p-[32px] relative rounded-[16px] row-start-1 self-stretch shrink-0"
            >
              <div
                data-node-id="140:124"
                data-name="Paragraph"
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
              >
                <p
                  data-node-id="140:125"
                  className="font-body leading-[22.75px] relative shrink-0 text-[#3d869c] text-[14px] whitespace-nowrap font-normal"
                >
                  Qué nos mueve
                </p>
              </div>
              <h3
                data-node-id="140:126"
                data-name="Heading 3"
                className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-[471.5px] figma-heading"
              >
                <span
                  data-node-id="140:127"
                  className="font-display leading-[32px] not-italic relative shrink-0 text-[#0a2e56] text-[24px] w-[472px] font-semibold block"
                >
                  Problemas reales que exigen soluciones reales.
                </span>
              </h3>
              <div
                data-node-id="140:128"
                data-name="Container"
                className="content-stretch flex flex-col gap-[12px] h-[183px] items-start pt-[20px] relative shrink-0 w-[471.5px] figma-adaptive-height"
              >
                <div
                  data-node-id="140:129"
                  data-name="Container"
                  className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:130"
                    data-name="Container:margin"
                    className="content-stretch flex items-start pt-[8px] relative shrink-0"
                  >
                    <div
                      data-node-id="140:131"
                      data-name="Container"
                      className="bg-[#3d869c] relative rounded-[16777200px] shrink-0 size-[6px]"
                    />
                  </div>
                  <div
                    data-node-id="140:132"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:133"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] whitespace-nowrap font-normal"
                    >
                      Información fragmentada entre sistemas y personas
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:134"
                  data-name="Container"
                  className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:135"
                    data-name="Container:margin"
                    className="content-stretch flex items-start pt-[8px] relative shrink-0"
                  >
                    <div
                      data-node-id="140:136"
                      data-name="Container"
                      className="bg-[#3d869c] relative rounded-[16777200px] shrink-0 size-[6px]"
                    />
                  </div>
                  <div
                    data-node-id="140:137"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:138"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] whitespace-nowrap font-normal"
                    >
                      Procesos desconectados que generan errores
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:139"
                  data-name="Container"
                  className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:140"
                    data-name="Container:margin"
                    className="content-stretch flex items-start pt-[8px] relative shrink-0"
                  >
                    <div
                      data-node-id="140:141"
                      data-name="Container"
                      className="bg-[#3d869c] relative rounded-[16777200px] shrink-0 size-[6px]"
                    />
                  </div>
                  <div
                    data-node-id="140:142"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:143"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] whitespace-nowrap font-normal"
                    >
                      Dependencia de canales informales para decisiones críticas
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:144"
                  data-name="Container"
                  className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:145"
                    data-name="Container:margin"
                    className="content-stretch flex items-start pt-[8px] relative shrink-0"
                  >
                    <div
                      data-node-id="140:146"
                      data-name="Container"
                      className="bg-[#3d869c] relative rounded-[16777200px] shrink-0 size-[6px]"
                    />
                  </div>
                  <div
                    data-node-id="140:147"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:148"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] whitespace-nowrap font-normal"
                    >
                      Pérdida de continuidad en los cuidados
                    </p>
                  </div>
                </div>
                <div
                  data-node-id="140:149"
                  data-name="Container"
                  className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full"
                >
                  <div
                    data-node-id="140:150"
                    data-name="Container:margin"
                    className="content-stretch flex items-start pt-[8px] relative shrink-0"
                  >
                    <div
                      data-node-id="140:151"
                      data-name="Container"
                      className="bg-[#3d869c] relative rounded-[16777200px] shrink-0 size-[6px]"
                    />
                  </div>
                  <div
                    data-node-id="140:152"
                    data-name="Paragraph"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:153"
                      className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] whitespace-nowrap font-normal"
                    >
                      Sobrecarga de coordinación en los equipos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HandoIntelligence() {
  return (
    <section
      data-node-id="140:154"
      data-name="Container"
      id="ia"
      className="content-stretch flex flex-col items-start max-w-[1280px] px-[32px] py-[100px] relative shrink-0 w-full figma-shell figma-section hando-intelligence"
    >
      <div
        data-node-id="140:155"
        data-name="Container"
        data-columns="2"
        style={{
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gridTemplateRows: "minmax(557px, auto)",
        }}
        className="gap-x-[64px] gap-y-[64px] grid relative shrink-0 w-full figma-grid"
      >
        <div
          data-node-id="140:156"
          data-name="Container"
          className="col-start-1 content-stretch flex flex-col h-[521.5px] items-start justify-self-stretch relative row-start-1 self-center shrink-0 figma-adaptive-height"
        >
          <div
            data-node-id="140:157"
            data-name="Container"
            style={{
              aspectRatio: "521.5 / 521.5",
            }}
            className="bg-[#eef2f7] content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full figma-adaptive-height figma-composition w-full"
          >
            <div
              data-node-id="140:158"
              data-name="Image (Inteligencia artificial aplicada a salud)"
              style={{
                left: "0%",
                top: "0%",
                width: "100%",
                height: "100%",
              }}
              className="shrink-0 figma-adaptive-height absolute"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute h-full left-[-54.3%] max-w-none top-[0.08%] w-[177.68%]"
                  src="/figma/home/imgImageEquipoDeSaludColaborando.webp"
                  data-figma-asset="home/imgImageEquipoDeSaludColaborando"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
          <div
            data-node-id="140:159"
            data-name="Container"
            className="absolute bg-white border border-[#dde4ee] border-solid content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex flex-col items-start left-[345.95px] p-[16px] rounded-[12px] top-[24px] w-[195.547px]"
          >
            <div
              data-node-id="140:160"
              data-name="Container"
              className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
            >
              <div
                data-node-id="140:161"
                data-name="Container"
                className="bg-[#00d492] relative rounded-[16777200px] shrink-0 size-[8px]"
              />
              <div
                data-node-id="140:162"
                data-name="Paragraph"
                className="content-stretch flex flex-col items-start relative shrink-0"
              >
                <p
                  data-node-id="140:163"
                  className="font-ui leading-[16px] not-italic relative shrink-0 text-[#0a2e56] text-[12px] whitespace-nowrap font-semibold"
                >
                  IA integrada
                </p>
              </div>
            </div>
            <div
              data-node-id="140:164"
              data-name="Paragraph"
              className="content-stretch flex flex-col h-[20px] items-start pt-[4px] relative shrink-0 w-[161.547px]"
            >
              <p
                data-node-id="140:165"
                className="font-ui leading-[16px] not-italic relative shrink-0 text-[#5a6b82] text-[12px] whitespace-nowrap font-normal"
              >
                Automatización de procesos
              </p>
            </div>
          </div>
        </div>
        <div
          data-node-id="140:166"
          data-name="Container"
          className="col-start-2 content-stretch flex flex-col h-[557px] items-start justify-self-stretch relative row-start-1 self-center shrink-0 figma-adaptive-height"
        >
          <div
            data-node-id="140:167"
            data-name="Container"
            className="h-[46.5px] relative shrink-0 w-full"
          >
            <div
              data-node-id="140:168"
              data-name="HomeSectionTag"
              className="absolute bg-[rgba(20,184,166,0.08)] h-[24px] left-0 rounded-[16777200px] top-[2.5px] w-[146.43px]"
            >
              <p
                data-node-id="140:169"
                className="absolute font-body leading-[22.75px] left-[24.5px] text-[#3d869c] text-[14px] top-[0.75px] whitespace-nowrap font-normal"
              >
                Tecnología e IA
              </p>
            </div>
          </div>
          <h2
            data-node-id="140:170"
            data-name="Heading 2"
            className="content-stretch flex flex-col items-start relative shrink-0 w-full figma-heading"
          >
            <span
              data-node-id="140:171"
              className="font-display leading-[0] not-italic relative shrink-0 text-[#0a2e56] text-[0px] w-[522px] font-normal block"
            >
              <span className="leading-[60px] text-[48px]">
                Inteligencia artificial
              </span>
              <span className="leading-[60px] text-[#3d869c] text-[48px]">{` al servicio del equipo.`}</span>
            </span>
          </h2>
          <div
            data-node-id="140:172"
            data-name="Paragraph"
            className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-[521.5px]"
          >
            <p
              data-node-id="140:173"
              className="font-body leading-[26px] relative shrink-0 text-[#5a6b82] text-[16px] w-[522px] font-normal"
            >
              La inteligencia artificial en Hando no es un elemento de marketing
              — es una herramienta integrada a los procesos que hace más
              eficiente el trabajo de las personas.
            </p>
          </div>
          <div
            data-node-id="140:174"
            data-name="Container"
            className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] relative shrink-0 w-full"
          >
            <div
              data-node-id="140:175"
              data-name="FeatureBlock"
              className="content-stretch flex gap-[16px] items-start relative shrink-0"
            >
              <div
                data-node-id="140:176"
                data-name="Container:margin"
                className="content-stretch flex items-start pt-[2px] relative shrink-0"
              >
                <div
                  data-node-id="140:177"
                  data-name="Container"
                  className="bg-[rgba(20,184,166,0.08)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]"
                >
                  <p
                    data-node-id="140:178"
                    className="font-ui leading-[28px] not-italic relative shrink-0 text-[#0a2e56] text-[18px] whitespace-nowrap font-normal"
                  >
                    <Zap className="ui-icon" aria-hidden="true" />
                  </p>
                </div>
              </div>
              <div
                data-node-id="140:179"
                data-name="Container"
                className="content-stretch flex flex-col items-start relative shrink-0 w-[465.5px]"
              >
                <div
                  data-node-id="140:180"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                >
                  <p
                    data-node-id="140:181"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-bold"
                  >
                    Automatización de tareas repetitivas
                  </p>
                </div>
                <div
                  data-node-id="140:182"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-[465.5px]"
                >
                  <p
                    data-node-id="140:183"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[466px] font-normal"
                  >
                    Reducimos la carga de procesos manuales para que los equipos
                    puedan enfocarse en lo que importa.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-node-id="140:184"
              data-name="FeatureBlock"
              className="content-stretch flex gap-[16px] items-start relative shrink-0"
            >
              <div
                data-node-id="140:185"
                data-name="Container:margin"
                className="content-stretch flex items-start pt-[2px] relative shrink-0"
              >
                <div
                  data-node-id="140:186"
                  data-name="Container"
                  className="bg-[rgba(20,184,166,0.08)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]"
                >
                  <p
                    data-node-id="140:187"
                    className="font-ui leading-[28px] not-italic relative shrink-0 text-[#0a2e56] text-[18px] whitespace-nowrap font-normal"
                  >
                    <Brain className="ui-icon" aria-hidden="true" />
                  </p>
                </div>
              </div>
              <div
                data-node-id="140:188"
                data-name="Container"
                className="content-stretch flex flex-col items-start relative shrink-0 w-[465.5px]"
              >
                <div
                  data-node-id="140:189"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                >
                  <p
                    data-node-id="140:190"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-bold"
                  >
                    Organización inteligente de información
                  </p>
                </div>
                <div
                  data-node-id="140:191"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-[465.5px]"
                >
                  <p
                    data-node-id="140:192"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[466px] font-normal"
                  >
                    Identificamos y estructuramos información relevante de forma
                    automática, sin intervención manual.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-node-id="140:193"
              data-name="FeatureBlock"
              className="content-stretch flex gap-[16px] items-start relative shrink-0"
            >
              <div
                data-node-id="140:194"
                data-name="Container:margin"
                className="content-stretch flex items-start pt-[2px] relative shrink-0"
              >
                <div
                  data-node-id="140:195"
                  data-name="Container"
                  className="bg-[rgba(20,184,166,0.08)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]"
                >
                  <p
                    data-node-id="140:196"
                    className="font-ui leading-[28px] not-italic relative shrink-0 text-[#0a2e56] text-[18px] whitespace-nowrap font-normal"
                  >
                    <ChartNoAxesColumnIncreasing
                      className="ui-icon"
                      aria-hidden="true"
                    />
                  </p>
                </div>
              </div>
              <div
                data-node-id="140:197"
                data-name="Container"
                className="content-stretch flex flex-col items-start relative shrink-0 w-[465.5px]"
              >
                <div
                  data-node-id="140:198"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                >
                  <p
                    data-node-id="140:199"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-bold"
                  >
                    Apoyo a la toma de decisiones
                  </p>
                </div>
                <div
                  data-node-id="140:200"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-[465.5px]"
                >
                  <p
                    data-node-id="140:201"
                    className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] w-[466px] font-normal"
                  >
                    Información disponible en el momento adecuado, para que las
                    decisiones sean más rápidas y seguras.
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

function HandoSolutions() {
  return (
    <section
      data-node-id="140:202"
      data-name="Section"
      id="soluciones"
      className="content-stretch flex flex-col items-start py-[100px] relative shrink-0 w-full figma-section hando-solutions"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src="/figma/home/imgSection.webp"
        data-figma-asset="home/imgSection"
        loading="lazy"
        decoding="async"
      />
      <div
        data-node-id="140:203"
        data-name="Container"
        className="content-stretch flex flex-col items-start max-w-[1280px] px-[32px] relative shrink-0 w-full figma-shell"
      >
        <div
          data-node-id="140:204"
          data-name="Container:margin"
          className="content-stretch flex flex-col items-center relative shrink-0 w-full"
        >
          <div
            data-node-id="140:205"
            data-name="Container"
            className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-[672px]"
          >
            <div
              data-node-id="140:206"
              data-name="Container"
              className="h-[46.5px] relative shrink-0 w-full"
            >
              <div
                data-node-id="140:207"
                data-name="HomeSectionTag"
                className="absolute bg-[rgba(20,184,166,0.08)] h-[24px] left-1/2 rounded-[16777200px] top-[2.5px] w-[170.063px] -translate-x-1/2"
              >
                <p
                  data-node-id="140:208"
                  className="-translate-x-1/2 absolute font-ui leading-[16px] left-[85.5px] not-italic text-[#3d869c] text-[12px] text-center top-[4.5px] tracking-[1.2px] uppercase whitespace-nowrap font-semibold"
                >
                  Ecosistema Hando
                </p>
              </div>
            </div>
            <h2
              data-node-id="140:209"
              data-name="Heading 2"
              className="content-stretch flex flex-col items-center relative shrink-0 w-full figma-heading"
            >
              <span
                data-node-id="140:210"
                className="font-editorial leading-[0] not-italic relative shrink-0 text-[#0a2e56] text-[0px] text-center whitespace-nowrap font-normal block"
              >
                <span className="font-display leading-[60px] text-[48px] font-normal">
                  Dos soluciones,
                </span>
                <span className="font-display italic leading-[60px] text-[#3d869c] text-[48px] font-normal italic">{` `}</span>
                <span className="font-display leading-[60px] text-[#3d869c] text-[48px] font-bold">
                  un ecosistema.
                </span>
              </span>
            </h2>
            <div
              data-node-id="140:211"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-center pt-[16px] relative shrink-0 w-[672px]"
            >
              <p
                data-node-id="140:212"
                className="font-ui leading-[24px] not-italic relative shrink-0 text-[#5a6b82] text-[16px] text-center w-[672px] font-normal"
              >
                Cada producto de Hando aborda un área específica del ecosistema
                de salud, con identidad propia y propósito claro.
              </p>
            </div>
          </div>
        </div>
        <div
          data-node-id="140:213"
          data-name="Container:margin"
          className="content-stretch flex flex-col items-start pt-[56px] relative shrink-0 w-full"
        >
          <div
            data-node-id="140:214"
            data-name="Container"
            data-columns="2"
            style={{
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gridTemplateRows: "minmax(285.09px, auto)",
            }}
            className="gap-x-[24px] gap-y-[24px] grid relative shrink-0 w-full figma-grid"
          >
            <div
              data-node-id="140:215"
              data-name="Container"
              className="col-start-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip p-[32px] relative rounded-[16px] row-start-1 self-stretch shrink-0"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
                src="/figma/home/imgContainer.webp"
                data-figma-asset="home/imgContainer"
                loading="lazy"
                decoding="async"
              />
              <div
                data-node-id="140:216"
                data-name="Container"
                className="content-stretch flex h-[72px] items-center justify-between pb-[24px] relative shrink-0 w-[477.5px]"
              >
                <div
                  data-node-id="140:217"
                  className="relative shrink-0 size-[48px]"
                >
                  <img
                    alt=""
                    src="/figma/home/imgGroup83.svg"
                    data-figma-asset="home/imgGroup83"
                    className="absolute block inset-0 max-w-none  figma-svg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div
                  data-node-id="140:227"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
                  }}
                  data-name="Container"
                  className="content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[16777200px] shrink-0"
                >
                  <p
                    data-node-id="140:228"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[#c5d7eb] text-[12px] whitespace-nowrap font-medium"
                  >
                    Hando Calendar
                  </p>
                </div>
              </div>
              <h3
                data-node-id="140:229"
                data-name="Heading 3"
                className="content-stretch flex flex-col h-[44px] items-start pb-[12px] relative shrink-0 w-[477.5px] figma-heading"
              >
                <span
                  data-node-id="140:230"
                  className="font-display leading-[32px] not-italic relative shrink-0 text-[#0a2e56] text-[24px] whitespace-nowrap font-semibold block"
                >
                  Planificación de turnos
                </span>
              </h3>
              <div
                data-node-id="140:231"
                data-name="Paragraph:margin"
                className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full"
              >
                <p
                  data-node-id="140:232"
                  className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] w-[478px] font-normal"
                >
                  Plataforma para la planificación, coordinación y gestión de
                  turnos y equipos profesionales en el sector salud.
                </p>
              </div>
              <div
                data-node-id="140:233"
                data-name="Container:align"
                className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px relative w-full"
              >
                <a
                  data-node-id="140:234"
                  data-name="Container"
                  href="calendar.html"
                  className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0 w-full figma-link"
                >
                  <div
                    data-node-id="140:235"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:236"
                      className="font-ui leading-[20px] not-italic relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-medium"
                    >
                      Conocer solución
                    </p>
                  </div>
                  <div
                    data-node-id="140:237"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:238"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#0a2e56] text-[16px] whitespace-nowrap font-normal"
                    >
                      <ArrowRight className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                </a>
              </div>
              <div
                data-node-id="140:239"
                data-name="Container"
                className="absolute content-stretch flex flex-col items-start left-[381.5px] opacity-5 size-[160px] top-[125.09px]"
              >
                <div
                  data-node-id="140:240"
                  data-name="Icon"
                  className="h-[160px] overflow-clip relative shrink-0 w-full"
                >
                  <CalendarDays size={160} aria-hidden="true" />
                </div>
              </div>
            </div>
            <div
              data-node-id="140:246"
              data-name="Container"
              className="border border-[#dde4ee] border-solid col-start-2 content-stretch flex flex-col items-start justify-self-stretch overflow-clip p-[32px] relative rounded-[16px] row-start-1 self-stretch shrink-0"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full"
                src="/figma/home/imgContainer1.webp"
                data-figma-asset="home/imgContainer1"
                loading="lazy"
                decoding="async"
              />
              <div
                data-node-id="140:247"
                data-name="Container"
                className="content-stretch flex h-[72px] items-center justify-between pb-[24px] relative shrink-0 w-[475.5px]"
              >
                <div
                  data-node-id="140:248"
                  className="relative shrink-0 size-[48px]"
                >
                  <img
                    alt=""
                    src="/figma/home/imgGroup84.svg"
                    data-figma-asset="home/imgGroup84"
                    className="absolute block inset-0 max-w-none  figma-svg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div
                  data-node-id="140:258"
                  data-name="Container"
                  className="bg-[#ccdacf] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[16777200px] shrink-0"
                >
                  <p
                    data-node-id="140:259"
                    className="font-ui leading-[16px] not-italic relative shrink-0 text-[#465846] text-[12px] whitespace-nowrap font-medium"
                  >
                    Hando Science
                  </p>
                </div>
              </div>
              <h3
                data-node-id="140:260"
                data-name="Heading 3"
                className="content-stretch flex flex-col h-[44px] items-start pb-[12px] relative shrink-0 w-[475.5px] figma-heading"
              >
                <span
                  data-node-id="140:261"
                  className="font-display leading-[32px] not-italic relative shrink-0 text-[#0a2e56] text-[24px] whitespace-nowrap font-semibold block"
                >
                  Análisis de datos
                </span>
              </h3>
              <div
                data-node-id="140:262"
                data-name="Paragraph:margin"
                className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full"
              >
                <p
                  data-node-id="140:263"
                  className="font-ui leading-[22.75px] not-italic relative shrink-0 text-[#0a2e56] text-[14px] w-[476px] font-normal"
                >
                  Solución tecnológica orientada al ámbito científico y de
                  investigación asociado al sector salud.
                </p>
              </div>
              <div
                data-node-id="140:264"
                data-name="Container:align"
                className="content-stretch flex flex-[1_0_0] flex-col items-start justify-end min-h-px relative w-full"
              >
                <a
                  data-node-id="140:265"
                  data-name="Container"
                  href="science.html"
                  className="content-stretch flex gap-[8px] h-[26px] items-center relative shrink-0 w-full figma-link"
                >
                  <div
                    data-node-id="140:266"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:267"
                      className="font-ui leading-[20px] not-italic relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-medium"
                    >
                      Conocer solución
                    </p>
                  </div>
                  <div
                    data-node-id="140:268"
                    data-name="Text"
                    className="content-stretch flex flex-col items-start relative shrink-0"
                  >
                    <p
                      data-node-id="140:269"
                      className="font-ui leading-[25.6px] not-italic relative shrink-0 text-[#0a2e56] text-[16px] whitespace-nowrap font-normal"
                    >
                      <ArrowRight className="ui-icon" aria-hidden="true" />
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeCallToAction() {
  return (
    <section
      data-node-id="140:270"
      data-name="Container"
      id="conversemos"
      className="content-stretch flex flex-col h-[546px] items-center justify-center max-w-[1280px] px-[32px] py-[100px] relative shrink-0 w-full figma-adaptive-height figma-shell figma-section home-call-to-action"
    >
      <div
        data-node-id="140:271"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
        }}
        data-name="Container"
        className="content-stretch flex flex-col items-start p-[64px] relative rounded-[24px] shrink-0 w-full"
      >
        <h2
          data-node-id="140:272"
          data-name="Heading 2"
          className="content-stretch flex flex-col items-center relative shrink-0 w-full figma-heading"
        >
          <span
            data-node-id="140:273"
            className="font-display leading-[60px] not-italic relative shrink-0 text-[48px] text-center text-white whitespace-nowrap font-normal block"
          >
            ¿Listo para mejorar la coordinación de tu equipo?
          </span>
        </h2>
        <div
          data-node-id="140:274"
          data-name="Paragraph:margin"
          className="content-stretch flex flex-col items-center pb-[32px] pt-[16px] relative shrink-0 w-full"
        >
          <p
            data-node-id="140:275"
            className="font-body leading-[26px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] text-center w-[576px] font-normal"
          >
            Cuéntanos sobre tu organización y encontraremos la solución adecuada
            dentro del ecosistema Hando.
          </p>
        </div>
        <div
          data-node-id="140:276"
          data-name="Container"
          className="h-[57.594px] relative shrink-0 w-full"
        >
          <a
            data-node-id="140:277"
            data-name="Button"
            href="contacto.html"
            className="absolute bg-[#3d869c] h-[57.594px] left-[384.83px] rounded-[12px] top-0 w-[209.336px] figma-link"
          >
            <p
              data-node-id="140:278"
              className="-translate-x-1/2 absolute font-body leading-[20px] left-[104.17px] text-[14px] text-center text-white top-[18.66px] whitespace-nowrap font-medium"
            >
              Solicitar cotización
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

function HandoBackers() {
  return (
    <section
      data-node-id="140:279"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
      }}
      data-name="Container"
      id="respaldo"
      className="content-stretch flex flex-col h-[297px] items-center justify-center max-w-[1280px] px-[32px] py-[112px] relative shrink-0 w-full figma-adaptive-height figma-shell figma-section hando-backers"
    >
      <div
        data-node-id="140:280"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
        }}
        data-name="Container"
        className="content-stretch flex flex-col gap-[20px] h-[297px] items-center justify-center p-[64px] relative rounded-[24px] shrink-0 w-full figma-adaptive-height"
      >
        <h2
          data-node-id="140:281"
          data-name="Heading 2"
          className="content-stretch flex flex-col items-center relative shrink-0 w-full figma-heading"
        >
          <span
            data-node-id="140:282"
            className="font-display leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap font-semibold block"
          >
            Respaldo
          </span>
        </h2>
        <div
          data-node-id="140:283"
          data-name="image 1"
          className="h-[83px] relative shrink-0 w-[267px]"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              className="absolute h-[180.7%] left-0 max-w-none top-[-39.74%] w-full"
              src="/figma/home/imgImage1.webp"
              data-figma-asset="home/imgImage1"
              alt="Start-Up Chile"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div
          data-node-id="140:284"
          data-name="uddventures 1"
          className="h-[37.085px] relative shrink-0 w-[229px]"
        >
          <img
            src="/figma/home/imgUddventures1.svg"
            data-figma-asset="home/imgUddventures1"
            className="absolute block inset-0 max-w-none  figma-svg"
            alt="UDD Ventures"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="figma-page home-page">
      <SiteHeader activePage="home" />
      <main>
        <HomeHero />
        <AboutHando />
        <HandoVision />
        <HandoIntelligence />
        <HandoSolutions />
        <HomeCallToAction />
        <HandoBackers />
      </main>
      <SiteFooter />
    </div>
  );
}
