import { LinkedIn, GitHub, Email } from "@mui/icons-material";

export const FooterMobile = () => {
  return (
    <footer>
      <div className="flex items-center w-full gap-3 px-11 text-white md:hidden ">
        <a
          href="https://www.linkedin.com/in/rafael-rodrigues-91579b225/"
          target="_blank"
        >
          <LinkedIn style={{ fontSize: "30px" }} />
        </a>
        <a href="https://github.com/Rafael-Sousaa" target="_blank">
          <GitHub style={{ fontSize: "30px" }} />
        </a>
        <a href="mailto:rafaelsousa250@gmail.com" target="_blank">
          <Email style={{ fontSize: "30px" }} />
        </a>
      </div>
    </footer>
  );
};
