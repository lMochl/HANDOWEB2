import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { InstagramIcon, LinkedInIcon } from "../components/SocialIcons";
import { handleContactSubmit } from "../components/contactSubmission";

// Implemented from the FINAL page in Figma. data-node-id attributes retain
// the connection to the designer's sections, typography, and asset layers.
function ContactHero() {
  return (
    <section
      data-node-id="140:1593"
      data-name="Section"
      id="inicio"
      className="bg-[#f0f4f8] content-stretch flex flex-col items-start pb-[80px] pt-[128px] relative shrink-0 w-full figma-section contact-hero"
    >
      <div
        data-node-id="140:1594"
        data-name="Container"
        className="content-stretch flex flex-col items-start max-w-[1280px] px-[32px] relative shrink-0 w-full figma-shell"
      >
        <div
          data-node-id="140:1595"
          data-name="Container"
          className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-[672px]"
        >
          <div
            data-node-id="140:1596"
            data-name="Container"
            className="h-[46.5px] relative shrink-0 w-full"
          >
            <div
              data-node-id="140:1597"
              data-name="Text"
              className="absolute bg-[rgba(20,184,166,0.08)] h-[24px] left-0 rounded-[16777200px] top-[2.5px] w-[101.516px]"
            >
              <p
                data-node-id="140:1598"
                className="absolute font-ui leading-[16px] left-[12px] not-italic text-[#14b8a6] text-[12px] top-[4.5px] tracking-[1.2px] uppercase whitespace-nowrap font-semibold"
              >
                Contacto
              </p>
            </div>
          </div>
          <h1
            data-node-id="140:1599"
            data-name="Heading 1"
            className="content-stretch flex flex-col items-start relative shrink-0 w-full figma-heading"
          >
            <span
              data-node-id="140:1600"
              className="font-display leading-[72px] not-italic relative shrink-0 text-[#0a2e56] text-[72px] whitespace-nowrap font-normal block"
            >
              Hablemos.
            </span>
          </h1>
          <div
            data-node-id="140:1601"
            data-name="Paragraph"
            className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full"
          >
            <p
              data-node-id="140:1602"
              className="font-body leading-[26px] relative shrink-0 text-[#5a6b82] text-[16px] w-[672px] font-normal"
            >
              Cuéntanos sobre tu organización y lo que necesitas. Encontraremos
              la solución adecuada dentro del ecosistema Hando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactContent() {
  const initialSolution = new URLSearchParams(window.location.search).get(
    "solucion",
  );
  const initialSolutionValue: string =
    initialSolution === "calendar"
      ? "Hando Calendar"
      : initialSolution === "science"
        ? "Hando Science"
        : "";
  return (
    <section
      data-node-id="140:1603"
      data-name="Container"
      id="contacto"
      className="content-stretch flex flex-col items-start max-w-[1280px] px-[32px] py-[96px] relative shrink-0 w-full figma-shell figma-section contact-content"
    >
      <div
        data-node-id="140:1604"
        data-name="Container"
        data-columns="3"
        style={{
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gridTemplateRows: "minmax(605px, auto)",
        }}
        className="gap-x-[48px] gap-y-[48px] grid relative shrink-0 w-full figma-grid"
      >
        <form
          data-node-id="140:1605"
          data-name="Container"
          className="col-[1/span_2] content-stretch flex flex-col gap-[20px] items-start justify-self-stretch relative row-start-1 self-stretch shrink-0"
          onSubmit={handleContactSubmit}
          noValidate
        >
          <div
            data-node-id="140:1606"
            data-name="Container"
            data-columns="2"
            style={{
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gridTemplateRows: "minmax(73px, auto)",
            }}
            className="gap-x-[20px] gap-y-[20px] grid relative shrink-0 w-full figma-grid"
          >
            <div
              data-node-id="140:1607"
              data-name="InputField"
              className="col-start-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-start-1 self-stretch shrink-0"
            >
              <label
                data-node-id="140:1608"
                data-name="Label"
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                htmlFor="nombre"
              >
                <p
                  data-node-id="140:1609"
                  className="font-body leading-[0] relative shrink-0 text-[#0a2e56] text-[0px] whitespace-nowrap font-normal"
                >
                  <span className="leading-[22.75px] text-[14px]">Nombre</span>
                  <span className="leading-[22.75px] text-[#14b8a6] text-[14px]">{` *`}</span>
                </p>
              </label>
              <input
                data-node-id="140:1610"
                data-name="Text Input"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                type="text"
                autoComplete="given-name"
                required
                className="bg-[#f0f4f8] border-[#c5d7eb] border-[1.5px] border-solid content-stretch flex flex-col h-[47px] items-start justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full font-ui text-[14px] text-[#0a2e56] figma-input"
              />
            </div>
            <div
              data-node-id="140:1612"
              data-name="InputField"
              className="col-start-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-start-1 self-stretch shrink-0"
            >
              <label
                data-node-id="140:1613"
                data-name="Label"
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                htmlFor="apellido"
              >
                <p
                  data-node-id="140:1614"
                  className="font-body leading-[0] relative shrink-0 text-[#0a2e56] text-[0px] whitespace-nowrap font-normal"
                >
                  <span className="leading-[22.75px] text-[14px]">
                    Apellido
                  </span>
                  <span className="leading-[22.75px] text-[#14b8a6] text-[14px]">{` *`}</span>
                </p>
              </label>
              <input
                data-node-id="140:1615"
                data-name="Text Input"
                id="apellido"
                name="apellido"
                placeholder="Tu apellido"
                type="text"
                autoComplete="family-name"
                required
                className="bg-[#f0f4f8] border-[#c5d7eb] border-[1.5px] border-solid content-stretch flex flex-col h-[47px] items-start justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full font-ui text-[14px] text-[#0a2e56] figma-input"
              />
            </div>
          </div>
          <div
            data-node-id="140:1617"
            data-name="Container"
            data-columns="2"
            style={{
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gridTemplateRows: "minmax(73px, auto)",
            }}
            className="gap-x-[20px] gap-y-[20px] grid relative shrink-0 w-full figma-grid"
          >
            <div
              data-node-id="140:1618"
              data-name="InputField"
              className="col-start-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-start-1 self-stretch shrink-0"
            >
              <label
                data-node-id="140:1619"
                data-name="Label"
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                htmlFor="organizacion"
              >
                <p
                  data-node-id="140:1620"
                  className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                >
                  Organización
                </p>
              </label>
              <input
                data-node-id="140:1621"
                data-name="Text Input"
                id="organizacion"
                name="organizacion"
                placeholder="Nombre de tu institución u organización"
                type="text"
                autoComplete="organization"
                className="bg-[#f0f4f8] border-[#c5d7eb] border-[1.5px] border-solid content-stretch flex flex-col h-[47px] items-start justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full font-ui text-[14px] text-[#0a2e56] figma-input"
              />
            </div>
            <div
              data-node-id="140:1623"
              data-name="InputField"
              className="col-start-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-start-1 self-stretch shrink-0"
            >
              <label
                data-node-id="140:1624"
                data-name="Label"
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                htmlFor="cargo"
              >
                <p
                  data-node-id="140:1625"
                  className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                >
                  Cargo
                </p>
              </label>
              <input
                data-node-id="140:1626"
                data-name="Text Input"
                id="cargo"
                name="cargo"
                placeholder="Tu rol o cargo"
                type="text"
                autoComplete="organization-title"
                className="bg-[#f0f4f8] border-[#c5d7eb] border-[1.5px] border-solid content-stretch flex flex-col h-[47px] items-start justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full font-ui text-[14px] text-[#0a2e56] figma-input"
              />
            </div>
          </div>
          <div
            data-node-id="140:1628"
            data-name="Container"
            data-columns="2"
            style={{
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gridTemplateRows: "minmax(73px, auto)",
            }}
            className="gap-x-[20px] gap-y-[20px] grid relative shrink-0 w-full figma-grid"
          >
            <div
              data-node-id="140:1629"
              data-name="InputField"
              className="col-start-1 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-start-1 self-stretch shrink-0"
            >
              <label
                data-node-id="140:1630"
                data-name="Label"
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                htmlFor="email"
              >
                <p
                  data-node-id="140:1631"
                  className="font-body leading-[0] relative shrink-0 text-[#0a2e56] text-[0px] whitespace-nowrap font-normal"
                >
                  <span className="leading-[22.75px] text-[14px]">Email</span>
                  <span className="leading-[22.75px] text-[#14b8a6] text-[14px]">{` *`}</span>
                </p>
              </label>
              <input
                data-node-id="140:1632"
                data-name="Email Input"
                id="email"
                name="email"
                placeholder="tu@correo.com"
                type="email"
                autoComplete="email"
                required
                className="bg-[#f0f4f8] border-[#c5d7eb] border-[1.5px] border-solid content-stretch flex flex-col h-[47px] items-start justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full font-ui text-[14px] text-[#0a2e56] figma-input"
              />
            </div>
            <div
              data-node-id="140:1634"
              data-name="InputField"
              className="col-start-2 content-stretch flex flex-col gap-[6px] items-start justify-self-stretch relative row-start-1 self-stretch shrink-0"
            >
              <label
                data-node-id="140:1635"
                data-name="Label"
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                htmlFor="telefono"
              >
                <p
                  data-node-id="140:1636"
                  className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
                >
                  Teléfono
                </p>
              </label>
              <input
                data-node-id="140:1637"
                data-name="Phone Input"
                id="telefono"
                name="telefono"
                placeholder="+56 9 XXXX XXXX"
                type="tel"
                autoComplete="tel"
                className="bg-[#f0f4f8] border-[#c5d7eb] border-[1.5px] border-solid content-stretch flex flex-col h-[47px] items-start justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full font-ui text-[14px] text-[#0a2e56] figma-input"
              />
            </div>
          </div>
          <div
            data-node-id="140:1639"
            data-name="Container"
            className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full"
          >
            <div
              data-node-id="140:1640"
              data-name="Label"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:1641"
                className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
              >
                Solución de interés
              </p>
            </div>
            <div
              data-node-id="140:1642"
              data-name="Container"
              data-columns="4"
              style={{
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gridTemplateRows: "minmax(47px, auto)",
              }}
              className="gap-x-[8px] gap-y-[8px] inline-grid relative shrink-0 figma-grid"
            >
              <label
                data-node-id="140:1643"
                data-name="Button"
                className="bg-[#f0f4f8] border-[#c5d7eb] border-[1.5px] border-solid col-start-1 content-stretch flex flex-col items-center justify-center justify-self-stretch px-[16px] py-[12px] relative rounded-[12px] row-start-1 self-stretch shrink-0 figma-radio"
              >
                <input
                  type="radio"
                  name="solucion"
                  value="Hando Calendar"
                  defaultChecked={initialSolutionValue === "Hando Calendar"}
                  className="sr-only"
                />
                <p
                  data-node-id="140:1644"
                  className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] text-center whitespace-nowrap font-bold"
                >
                  Hando Calendar
                </p>
              </label>
              <label
                data-node-id="140:1645"
                data-name="Button"
                className="bg-[#f0f4f8] border-[#c5d7eb] border-[1.5px] border-solid col-start-2 content-stretch flex flex-col items-center justify-center justify-self-stretch px-[16px] py-[12px] relative rounded-[12px] row-start-1 self-stretch shrink-0 figma-radio"
              >
                <input
                  type="radio"
                  name="solucion"
                  value="Hando Science"
                  defaultChecked={initialSolutionValue === "Hando Science"}
                  className="sr-only"
                />
                <p
                  data-node-id="140:1646"
                  className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] text-center whitespace-nowrap font-bold"
                >
                  Hando Science
                </p>
              </label>
              <label
                data-node-id="140:1647"
                data-name="Button"
                className="bg-[#f0f4f8] border-[#c5d7eb] border-[1.5px] border-solid col-start-3 content-stretch flex flex-col items-center justify-center justify-self-stretch px-[16px] py-[12px] relative rounded-[12px] row-start-1 self-stretch shrink-0 figma-radio"
              >
                <input
                  type="radio"
                  name="solucion"
                  value="Hando (ecosistema)"
                  defaultChecked={initialSolutionValue === "Hando (ecosistema)"}
                  className="sr-only"
                />
                <p
                  data-node-id="140:1648"
                  className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] text-center whitespace-nowrap font-bold"
                >
                  Hando (ecosistema)
                </p>
              </label>
              <label
                data-node-id="140:1649"
                data-name="Button"
                className="bg-[#f0f4f8] border-[#c5d7eb] border-[1.5px] border-solid col-start-4 content-stretch flex flex-col items-center justify-center justify-self-stretch px-[16px] py-[12px] relative rounded-[12px] row-start-1 self-stretch shrink-0 figma-radio"
              >
                <input
                  type="radio"
                  name="solucion"
                  value="Otro"
                  defaultChecked={initialSolutionValue === "Otro"}
                  className="sr-only"
                />
                <p
                  data-node-id="140:1650"
                  className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] text-center whitespace-nowrap font-bold"
                >
                  Otro
                </p>
              </label>
            </div>
          </div>
          <div
            data-node-id="140:1651"
            data-name="Container"
            className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full"
          >
            <label
              data-node-id="140:1652"
              data-name="Label"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
              htmlFor="mensaje"
            >
              <p
                data-node-id="140:1653"
                className="font-body leading-[22.75px] relative shrink-0 text-[#0a2e56] text-[14px] whitespace-nowrap font-normal"
              >
                ¿Cómo podemos ayudarte?
              </p>
            </label>
            <textarea
              data-node-id="140:1654"
              data-name="Text Area"
              id="mensaje"
              name="mensaje"
              placeholder="Cuéntanos brevemente sobre tu equipo, organización y lo que estás buscando..."
              className="bg-[#f0f4f8] border-[#c5d7eb] border-[1.5px] border-solid content-stretch flex flex-col h-[127px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full font-body text-[14px] leading-[22.75px] text-[#0a2e56] figma-input resize-y"
            ></textarea>
          </div>
          <div
            data-node-id="140:1656"
            data-name="Button:margin"
            className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full"
          >
            <button
              data-node-id="140:1657"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
              }}
              data-name="Button"
              className="content-stretch flex flex-col h-[52px] items-center justify-center px-[32px] py-[16px] relative rounded-[12px] shrink-0 w-full"
              type="submit"
              aria-description="Abre tu aplicación de correo con la solicitud preparada para revisar y enviar."
            >
              <span
                data-node-id="140:1658"
                className="font-body leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap font-medium"
              >
                Enviar solicitud
              </span>
            </button>
          </div>
        </form>
        <div
          data-node-id="140:1659"
          data-name="Container"
          className="col-start-3 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-start-1 self-stretch shrink-0"
        >
          <div
            data-node-id="140:1660"
            data-name="Container"
            className="bg-[#f0f4f8] border border-[#c5d7eb] border-solid content-stretch flex flex-col h-[158px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full"
          >
            <div
              data-node-id="140:1661"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:1662"
                className="font-body leading-[22.75px] relative shrink-0 text-[#14b8a6] text-[14px] whitespace-nowrap font-normal"
              >
                Canales de contacto
              </p>
            </div>
            <div
              data-node-id="140:1663"
              data-name="Container"
              className="content-stretch flex flex-col h-[168px] items-start pt-[16px] relative shrink-0 w-full"
            >
              <div
                data-node-id="140:1664"
                data-name="Container"
                className="content-stretch flex flex-col items-start relative shrink-0 w-full"
              >
                <div
                  data-node-id="140:1665"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                >
                  <p
                    data-node-id="140:1666"
                    className="font-body leading-[16px] relative shrink-0 text-[#5a6b82] text-[12px] whitespace-nowrap font-normal"
                  >
                    Email
                  </p>
                </div>
                <div
                  data-node-id="140:1667"
                  data-name="Paragraph"
                  className="content-stretch flex flex-col font-ui gap-[4px] h-[49px] items-start leading-[20px] not-italic pt-[4px] relative shrink-0 text-[#0a2e56] text-[14px] w-full whitespace-nowrap font-medium"
                >
                  <a
                    data-node-id="140:1668"
                    className="relative shrink-0"
                    href="mailto:felipe@hando.health"
                  >
                    felipe@hando.health
                  </a>
                  <a
                    data-node-id="140:1779"
                    className="relative shrink-0"
                    href="mailto:ricardo@hando.health"
                  >
                    ricardo@hando.health
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            data-node-id="140:1679"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(12, 58, 107) 0%, rgb(12, 58, 107) 100%)",
            }}
            data-name="Container"
            className="content-stretch flex flex-col items-start p-[24px] relative rounded-[16px] shrink-0 w-full"
          >
            <div
              data-node-id="140:1680"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:1681"
                className="font-body leading-[22.75px] relative shrink-0 text-[#14b8a6] text-[14px] whitespace-nowrap font-normal"
              >
                Tiempo de respuesta
              </p>
            </div>
            <div
              data-node-id="140:1682"
              data-name="Paragraph"
              className="content-stretch flex flex-col h-[44px] items-start pt-[12px] relative shrink-0 w-full"
            >
              <p
                data-node-id="140:1683"
                className="font-display leading-[32px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap font-semibold"
              >
                2 horas
              </p>
            </div>
            <div
              data-node-id="140:1684"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full"
            >
              <p
                data-node-id="140:1685"
                className="font-body leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.55)] w-full font-normal"
              >
                Nuestro equipo revisará tu solicitud y responderá a la brevedad.
              </p>
            </div>
          </div>
          <div
            data-node-id="140:1686"
            data-name="Container"
            className="bg-[#f0f4f8] border border-[#c5d7eb] border-solid content-stretch flex flex-col items-start p-[24px] relative rounded-[16px] shrink-0 w-full"
          >
            <div
              data-node-id="140:1687"
              data-name="Paragraph"
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
            >
              <p
                data-node-id="140:1688"
                className="font-body leading-[22.75px] relative shrink-0 text-[#14b8a6] text-[14px] whitespace-nowrap font-normal"
              >
                Redes sociales
              </p>
            </div>
            <div
              data-node-id="140:1689"
              data-name="Container"
              className="content-stretch flex gap-[12px] h-[48px] items-start pt-[12px] relative shrink-0 w-full"
            >
              <a
                data-node-id="140:1690"
                data-name="Button"
                className="bg-[#eef2f7] content-stretch flex flex-[87.664_0_0] gap-[8px] h-full items-center justify-center min-w-px py-[10px] relative rounded-[12px] text-[#5a6b82]"
                href="https://www.linkedin.com/company/hando-health"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon size={16} className="shrink-0" />
                <p
                  data-node-id="140:1691"
                  className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] text-center whitespace-nowrap font-bold"
                >
                  LinkedIn
                </p>
              </a>
              <a
                data-node-id="140:1694"
                data-name="Button"
                className="bg-[#eef2f7] content-stretch flex flex-[87.664_0_0] gap-[8px] h-full items-center justify-center min-w-px py-[10px] relative rounded-[12px] text-[#5a6b82]"
                href="https://www.instagram.com/hando.health"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon size={16} className="shrink-0" />
                <p
                  data-node-id="140:1695"
                  className="font-body leading-[22.75px] relative shrink-0 text-[#5a6b82] text-[14px] text-center whitespace-nowrap font-bold"
                >
                  Instagram
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="figma-page contact-page">
      <SiteHeader activePage="contact" />
      <main>
        <ContactHero />
        <ContactContent />
      </main>
      <SiteFooter />
    </div>
  );
}
