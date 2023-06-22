import { ProjetoMock } from "./Mocks";
import { Button } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export const Projetos = () => {
  return (
    <div id="projetos" className="w-full text-white md:h-screen">
      <div className="md:max-w-screen-lg px-11 mx-auto flex flex-col justify-center md:w-full md:h-full md:mt-20 ">
        <div>
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Projetos
            </p>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 mt-16 md:mt-20 gap-8 ">
            {ProjetoMock.map((item) => (
              <div key={item.id} className="gap-2 flex  rounded-lg">
                <Card className="text-white flex flex-col justify-between bg-gradient-to-l from-[#393355] to-[#131322] ">
                  <div>
                    <div className="flex justify-center items-center">
                      <CardMedia
                        sx={{ height: 240, width: "100%" }}
                        image={item.img}
                        className=""
                      />
                    </div>

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        className="text-gray-300"
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" className="text-gray-300">
                        {item.text}
                      </Typography>
                    </CardContent>
                  </div>
                  <div className="flex items-center justify-center">
                    <CardActions>
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
                        className="text-white "
                        onClick={() => {
                          document.getElementById(item.id)?.click();
                        }}
                      >
                        {item.description}
                        <a
                          href={item.link}
                          target="_blank"
                          id={item.id}
                          className="hidden"
                        ></a>
                      </Button>
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
                        className="text-white "
                        onClick={() => {
                          document.getElementById(item.github)?.click();
                        }}
                      >
                        <a
                          href={item.github}
                          target="_blank"
                          id={item.github}
                          className="hidden"
                        ></a>
                        <p>GitHub</p>
                      </Button>
                    </CardActions>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
