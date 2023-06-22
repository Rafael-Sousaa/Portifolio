import { Button, IconButton, Stack, Avatar } from "@mui/material";
import { LinkedIn, GitHub, Email, Person } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <>
      <header className=" fixed flex flex-rol w-full bg-gradient-to-l from-[#393355] to-[#131322] items-center z-[1000]">
        <nav className="flex justify-between px-5 w-full items-center ">
          <div>
            <Stack direction="row" spacing={2}>
              <IconButton
                onClick={() => {
                  document.getElementById("git-link")?.click();
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://avatars.githubusercontent.com/u/113722870?v=4"
                />
                <a
                  href="https://github.com/Rafael-Sousaa"
                  target="_blank"
                  id="git-link"
                  className="hidden"
                >
                  GitHub
                </a>
              </IconButton>
            </Stack>
          </div>

          <div>
            <div className="md:hidden">
              <SideBar />
            </div>

            <div className=" justify-center rounded-full md:flex hidden ">
              <Button sx={{ color: "white" }}>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Home
                </Link>
              </Button>
              <Button sx={{ color: "white" }}>
                <Link
                  activeClass="active"
                  to="sobre"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Sobre
                </Link>
              </Button>
              <Button sx={{ color: "white" }}>
                <Link
                  activeClass="active"
                  to="projetos"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Projetos
                </Link>
              </Button>
              <Button sx={{ color: "white" }}>
                <Link
                  activeClass="active"
                  to="habilidades"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Habilidades
                </Link>
              </Button>
              <Button sx={{ color: "white" }}>
                <Link
                  activeClass="active"
                  to="contato"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Contato
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex fixed flex-col top-[35%] left-0 text-white">
            <ul>
              <li className="w-[160px] h-[50px] mx-auto flex justify-end items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
                <a
                  className="flex items-center justify-end w-full text-white pr-6"
                  href="https://www.linkedin.com/in/rafael-rodrigues-91579b225/"
                  target="_blank"
                >
                  <span className="mr-2">Linkedin</span>
                  <LinkedIn style={{ fontSize: "30px" }} />
                </a>
              </li>
              <li className="w-[160px] h-[50px] mx-auto flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]   ">
                <a
                  className="flex items-center justify-end w-full text-white pr-6"
                  href="https://github.com/Rafael-Sousaa"
                  target="_blank"
                >
                  <span className="mr-2">GitHub</span>
                  <GitHub style={{ fontSize: "30px" }} />
                </a>
              </li>
              <li className="w-[160px] h-[50px] mx-auto flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]  ">
                <a
                  className="flex items-center justify-end w-full text-white pr-6"
                  href="mailto:rafaelsousa250@gmail.com"
                  target="_blank"
                >
                  <span className="mr-2">E-mail</span>
                  <Email style={{ fontSize: "30px" }} />
                </a>
              </li>
              <li className="w-[160px] h-[50px] mx-auto flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]  ">
                <a
                  className="flex items-center justify-end w-full text-white pr-6"
                  href="/Curriculo.pdf"
                  target="_blank"
                >
                  <span className="mr-2">Currículo</span>
                  <Person style={{ fontSize: "30px" }} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
