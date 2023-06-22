import { LinkedIn, GitHub, Email } from "@mui/icons-material";

export const FooterMobile = () => {
  return (
    <footer>
      <div className="flex items-center w-full gap-3 px-11 text-white md:hidden mb-4 ">
        <a
          href="https://www.linkedin.com/in/rafael-rodrigues-91579b225/"
          target="_blank"
        >
          <LinkedIn style={{ fontSize: "40px" }} />
        </a>
        <a href="https://github.com/Rafael-Sousaa" target="_blank">
          <GitHub style={{ fontSize: "40px" }} />
        </a>
        <a href="mailto:rafaelsousa250@gmail.com" target="_blank">
          <Email style={{ fontSize: "40px" }} />
        </a>
      </div>
    </footer>
  );
};
