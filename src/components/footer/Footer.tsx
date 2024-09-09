import { motion } from "framer-motion"
import FooterLogo from "@/assets/img/sections/footer/footer_logo.png"
import FooterLine from "@/assets/img/sections/footer/footer_line.png"
import BackToTop from "@/assets/img/sections/footer/back_to_top.png"
import RedactedIcon from "@/assets/img/sections/footer/re_icon_small.png"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="bg-red-background p-2 text-white sm:p-4">
      <div className="mx-auto max-w-6xl">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          <div className="order-2 mb-8 md:order-1 md:mb-0">
            <img
              src={FooterLogo}
              alt="Footer Logo"
              width={100}
              height={200}
              className="mb-4"
            />
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary">
                <span className="sr-only">X</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-primary-foreground hover:text-secondary"
              >
                <span className="sr-only">Discord</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-primary-foreground hover:text-secondary"
              >
                <span className="sr-only">RE</span>
                <img
                  className="size-6"
                  src={RedactedIcon}
                  alt="Redacted Icon"
                />
              </a>
            </div>
          </div>
          <div className="order-1 mb-8 w-full text-center md:order-2 md:mb-0 md:text-right">
            <h2 className="mb-4 text-xl font-bold">SUBSCRIBE FOR UPDATES</h2>
            <form className="flex w-full flex-row items-center justify-center px-2 sm:px-0 md:justify-end">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-3/4 min-w-32 bg-white p-2 text-sm text-primary sm:text-base md:w-64"
                required
                style={{
                  clipPath: "polygon(0 0, 100% 0, 94% 100%, 0% 100%)"
                }}
              />
              <button
                type="submit"
                className="relative -ml-4 w-1/4 min-w-28 overflow-hidden bg-gray-200 p-2 text-sm font-bold text-gray-500 hover:bg-gray-600 sm:text-base md:w-auto"
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)"
                }}
              >
                <span className="relative z-10">SIGN ME UP</span>
              </button>
            </form>
          </div>
        </div>
        <img
          src={FooterLine}
          alt="Footer Line"
          className="w-full min-w-full object-cover md:mt-2"
        />
        <div className="flex flex-row items-center justify-between space-y-4 text-sm md:mt-4 md:items-start md:space-y-0">
          <p>
            &copy; 2024 <span className="font-extrabold">REDACTED</span>
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img
              src={BackToTop}
              alt="Back to top"
              width={60}
              height={60}
              className="cursor-pointer"
            />
          </motion.button>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  )
}
