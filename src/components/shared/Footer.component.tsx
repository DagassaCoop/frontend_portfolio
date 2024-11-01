// Assets
import "@/assets/styles/components/shared/footer.component.scss";
import doubleArrow from "@/assets/images/double-arrow-up.svg";
import linkedin from "@/assets/images/footer_linkedin.svg";
import instagram from "@/assets/images/footer_instagram.svg";
import mail from "@/assets/images/footer_mail.svg";

const Footer = () => {
  const scrollToTop = () => {
    document
      .querySelector(".root-layout")
      ?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer w-full flex flex-col items-center text-white py-11 sm:py-16">
      <div
        className="flex flex-col items-center mb-12 cursor-pointer"
        onClick={scrollToTop}
      >
        <img src={doubleArrow} alt="double arrow" className="mb-4" />
        <p className="text-lg uppercase tracking-widest font-bold">
          back to top
        </p>
      </div>
      <div className="flex justify-center items-center mb-12">
        <a href="https://www.linkedin.com/in/dmytro-bondar/" target="_blank">
          <img src={linkedin} alt="" className="mr-3" />
        </a>
        <a href="https://www.instagram.com/dagas_sa/" target="_blank">
          <img src={instagram} alt="" className="mx-3" />
        </a>
        <a href="mailto:dagassacoop@gmail.com">
          <img src={mail} alt="" className="ml-3" />
        </a>
      </div>
      <p className="text-center">@2024 Dmytro Bondar All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
