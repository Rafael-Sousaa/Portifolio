import { Button } from "@mui/material";
import { Sobre } from "./Sobre";
import { Projetos } from "./Projetos";
import { Habilidades } from "./Habilidades";
import { Link } from "react-scroll";
import { Contato } from "./Contato";

export const Home = () => {
  return (
    <>
      <div id="home" className="md:h-screen w-full pt-12">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white pt-10 md:pt-[370px] ">
          <p className="text-gray-300 md:text-xl text-4xl">Olá, meu nome é</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
            Rafael
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            Sou Desenvolvedor Frontend.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            Tenho 22 anos sou desenvolvedor frontend com 1 ano de experiência
            trabalhando como freelancer.
          </p>
          <div className="cursor-pointer md:mb-[250px] mb-[100px]">
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                  color: "white",
                },
              }}
            >
              <Link
                activeClass="active"
                to="projetos"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Meus Projetos
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 ">
        <Sobre />
        <Projetos />
        <Habilidades />
        <Contato />
      </div>
    </>
  );
};
