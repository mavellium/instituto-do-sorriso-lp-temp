"use client";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="py-16 text-white"
      style={{
        backgroundColor: "#000919",
        color: "hsl(var(--primary-foreground))",
      }}
    >
      <div className="container mx-auto px-4">

        {/* GRID PRINCIPAL RESPONSIVO */}
        <div
          className="
            grid 
            grid-cols-1 
            xs:grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-12
            text-center lg:text-left
          "
        >
          {/* LOGO */}
          <div className="space-y-6 flex flex-col items-center lg:items-start">
            <Image
              src="/Logo_Instituto_do_sorriso.svg"
              alt="Logo Instituto do Sorriso"
              width={180}
              height={45}
            />
          </div>

          {/* CONTATO */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#0077FF]">Contato</h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <MapPin className="w-5 h-5 flex-shrink-0 text-white" />
                <div className="text-white/90 text-sm sm:text-base leading-relaxed">
                  <p>Rua Cel. Joaquim Piza, 664</p>
                  <p>Centro, Garça - SP</p>
                  <p>CEP: 17400-000</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Phone className="w-5 h-5 flex-shrink-0 text-white" />
                <p className="text-white/90 text-sm sm:text-base">
                  (14) 99684-7415
                </p>
              </div>
            </div>
          </div>

          {/* SERVIÇOS */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#0077FF]">Nossos Serviços</h4>

            <ul className="space-y-2">
              {["Implantes Dentários", "Prótese-Protocolo"].map((service) => (
                <li
                  key={service}
                  className="
                    cursor-pointer 
                    transition-colors 
                    text-white/90 
                    hover:text-[hsl(var(--primary))]
                  "
                  onClick={() => {
                    const element = document.getElementById(
                      service.replace(/\s+/g, "-")
                    );
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* VAZIO / FUTURO / REDES SOCIAIS */}
          <div className="space-y-6">
            {/* Você pode adicionar algo aqui depois */}
          </div>
        </div>

        {/* LINHA INFERIOR */}
        <div
          className="border-t mt-12 pt-8"
          style={{ borderColor: "rgb(255 255 255 / 0.2)" }}
        >
          <div
            className="
              flex flex-col 
              lg:flex-row 
              justify-between 
              items-center 
              gap-6 
              text-sm 
              md:text-base 
              text-white/60
            "
          >
            {/* COPYRIGHT */}
            <p className="text-center lg:text-left">
              © 2025 Instituto do Sorriso. Todos os direitos reservados.
            </p>

            {/* DESENVOLVIDO POR */}
            <div className="flex flex-col lg:flex-row w-[400px] justify-center items-center gap-2 text-white/80">
              <span className="font-semibold">Desenvolvido por</span>
              <Image
                src="/logo-Mavellium.png"
                alt="Logo Mavellium"
                width={110}
                height={45}
              />
            </div>

            {/* CRO */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center lg:text-right">
              <span>Dr. Calebe Jr. - CRO/RT: 108562/SP</span>
              <span className="hidden sm:block">|</span>
              <span>Dra. Luana - CRO/RT: 108581/SP</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
