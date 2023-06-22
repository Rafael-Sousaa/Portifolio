import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black min-h-screen relative ">
      <span className="text-[50px] font-black absolute top-[40px]">404</span>
      <div>
        <img src="/choque.gif" height={50} width={500} />
      </div>
      <h1>Ops! Página não encontrada.</h1>

      <p>Tem certeza de que era isso que você estava procurando?</p>

      <p>
        Aguarde uns instantes e recarregue a página, ou volte para a página
        inicial.
      </p>
      <div className="my-5 mx-auto flex flex-col bg-white">
        <Button
          variant="contained"
          sx={{
            color: "white",
            background: "#393355",
            "&:hover": {
              background: "#25254d",
              color: "white",
            },
          }}
          onClick={() => navigate("/")}
        >
          Voltar
        </Button>
      </div>
    </div>
  );
};
