import { useState } from "react";
import { IconButton, Slide, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Link } from "react-scroll";
export const SideBar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <IconButton
        onClick={() => {
          setShow(!show);
        }}
      >
        <Menu className="text-white" />
      </IconButton>
      <Slide in={show} direction="left">
        <div className="fixed top-[55px] left-0 h-full w-full flex flex-col gap-3 bg-gradient-to-l from-[#393355] to-[#131322] z-[1000]">
          <div className="flex flex-col ">
            <Button
              sx={{ color: "white", fontSize: "2.25rem" }}
              onClick={() => {
                setShow(false);
              }}
            >
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => {
                  setShow(false);
                }}
              >
                Home
              </Link>
            </Button>

            <Button
              sx={{ color: "white", fontSize: "2.25rem" }}
              onClick={() => {
                setShow(false);
              }}
            >
              <Link
                activeClass="active"
                to="sobre"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => {
                  setShow(false);
                }}
              >
                Sobre
              </Link>
            </Button>

            <Button
              sx={{ color: "white", fontSize: "2.25rem" }}
              onClick={() => {
                setShow(false);
              }}
            >
              <Link
                activeClass="active"
                to="projetos"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => {
                  setShow(false);
                }}
              >
                Projetos
              </Link>
            </Button>

            <Button
              sx={{ color: "white", fontSize: "2.25rem" }}
              onClick={() => {
                setShow(false);
              }}
            >
              {" "}
              <Link
                activeClass="active"
                to="habilidades"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => {
                  setShow(false);
                }}
              >
                Habilidades
              </Link>
            </Button>

            <Button
              sx={{ color: "white", fontSize: "2.25rem" }}
              onClick={() => {
                setShow(false);
              }}
            >
              <Link
                activeClass="active"
                to="contato"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => {
                  setShow(false);
                }}
              >
                Contato
              </Link>
            </Button>
          </div>
        </div>
      </Slide>
    </div>
  );
};
