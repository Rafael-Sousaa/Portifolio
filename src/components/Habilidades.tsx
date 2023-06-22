import { HabilidadesMock } from "./Mocks";

export const Habilidades = () => {
  return (
    <div id="habilidades" className="md:h-screen w-full text-white">
      <div className="md:max-w-screen-lg px-11 mx-auto flex flex-col justify-center md:w-full md:h-full md:mt-32 ">
        <div>
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Habilidades
            </p>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 mt-16 md:mt-20 gap-8 text-center  ">
            {HabilidadesMock.map((habilidades) => (
              <div
                key={habilidades.id}
                className={` text-center justify-center items-center shadow-md hover:scale-105 duration-500 py-2 flex rounded-lg ${habilidades.style}`}
              >
                <div>
                  <img
                    src={habilidades.image}
                    alt=""
                    className="w-20 mx-auto"
                  />
                  <p className="mt-4">{habilidades.skill}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
