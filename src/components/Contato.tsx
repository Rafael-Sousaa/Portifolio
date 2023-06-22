import { Button, TextField } from "@mui/material";
import { PatternFormat } from "react-number-format";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { FooterMobile } from "./FooterMobile";
interface FormState {
  nome: string;
  email: string;
  telefone: string;
  message: string;
}

export const Contato = () => {
  const [formState, setFormState] = useState<FormState>({
    nome: "",
    email: "",
    telefone: "",
    message: "",
  });

  const notify = () => {
    if (
      formState.nome.length > 2 &&
      formState.email.length > 2 &&
      formState.message.length > 2 &&
      formState.telefone.length > 2
    ) {
      toast.success("Obrigado! Em breve entrarei em contato!");
      return;
    }

    toast.error("Por favor, preencha todos os campos.");
  };

  return (
    <div id="contato" className="md:h-screen w-full text-white">
      <div className="md:max-w-screen-lg px-11 mx-auto flex flex-col justify-center md:w-full md:h-full">
        <div>
          <div className="md:mt-44">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contato
            </p>
          </div>
          <div className="flex md:justify-center md:mt-10 ">
            <form
              action="https://api.staticforms.xyz/submit"
              method="post"
              className="flex flex-col md:w-[400px] gap-4 my-10 "
            >
              <input
                type="hidden"
                name="accessKey"
                value="47f954ab-360d-48cf-8479-bf97914619ad"
              />
              <input
                type="hidden"
                name="redirectTo"
                value={`${window.location.protocol}//${window.location.host}`}
              />

              <TextField
                type="text"
                name="$nome"
                label={<span style={{ color: "white" }}>Nome</span>}
                placeholder="Digite seu nome"
                required
                InputLabelProps={{ style: { color: "white" } }}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    nome: e.target.value,
                  });
                }}
              />
              <TextField
                type="text"
                name="$email"
                label={<span style={{ color: "white" }}>E-mail</span>}
                placeholder="Digite seu e-mail"
                required
                InputLabelProps={{ style: { color: "white" } }}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    email: e.target.value,
                  });
                }}
              />
              <PatternFormat
                format="+55 (##) #####-####"
                customInput={TextField}
                label={<span style={{ color: "white" }}>Telefone</span>}
                type="tel"
                name="$telefone"
                required
                InputLabelProps={{ style: { color: "white" } }}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    telefone: e.target.value,
                  });
                }}
              />
              <TextField
                name="$message"
                label={<span style={{ color: "white" }}>Mensagem</span>}
                multiline
                minRows={5}
                maxRows={5}
                placeholder="Digite sua mensagem de forma clara e objetiva"
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                required
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    message: e.target.value,
                  });
                }}
              />
              <Button
                onClick={notify}
                type="submit"
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
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <FooterMobile />
      </div>
    </div>
  );
};
