import { motion } from 'framer-motion'
import FooterLogo from '@/assets/img/sections/footer/footer_logo.png'
import FooterLine from '@/assets/img/sections/footer/footer_line.png'
import FooterLineMobile from '@/assets/img/sections/footer/footer_line_mobile.png'
import BackToTop from '@/assets/img/sections/footer/back_to_top.png'
import RedactedIcon from '@/assets/img/sections/footer/re_icon_small.png'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="xxl:px-2 bg-red-background p-8 font-eurostile text-white md:py-16">
      <div className="mx-auto max-w-[1400px] pb-5 pt-2 md:pt-20">
        <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0">
          <div className="self-start md:order-1">
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

          <div className="w-full md:order-2">
            <div className="pb-5 pt-4">
              <img
                src={FooterLineMobile}
                alt="Footer Line"
                className="-mx-2 w-full min-w-full object-cover md:hidden"
              />
            </div>
            <h2 className="mb-4 text-right font-eurostile-extended text-xl font-bold md:text-right">
              SUBSCRIBE FOR UPDATES
            </h2>
            <form className="flex w-full flex-row items-center justify-center px-2 sm:px-0 md:justify-end">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="h-12 w-full min-w-32 bg-white p-2 text-sm text-primary placeholder:text-center sm:text-base md:w-64 lg:w-80"
                required
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)'
                }}
              />

              <button
                type="submit"
                className="relative -ml-8 h-12 w-1/4 min-w-28 overflow-hidden bg-gray-200 p-2 font-eurostile-extended text-sm font-bold text-gray-500 hover:bg-gray-600 hover:text-white sm:text-base md:w-auto lg:w-40 lg:p-3"
                style={{
                  clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0% 100%)'
                }}
              >
                <span className="relative z-10">SIGN ME UP</span>
              </button>
            </form>
            <div className="py-5">
              <img
                src={FooterLineMobile}
                alt="Footer Line"
                className="-mx-1 w-full min-w-full object-cover md:hidden"
              />
            </div>
          </div>
        </div>
        {/* Footer Line */}
        <div>
          <img
            src={FooterLine}
            alt="Footer Line"
            className="-mx-2 hidden w-full min-w-full object-cover sm:-mx-4 md:mt-2 md:block"
          />
        </div>
        {/* Bottom Section */}
        <div className="mt-4 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 md:mt-0">
          <div className="flex w-full items-center justify-between sm:w-auto sm:justify-start">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <p>
                &copy; 2024{' '}
                <span className="font-eurostile-extended">REDACTED</span>
              </p>
              <a href="#" className="hover:underline sm:hidden">
                Terms & Conditions
              </a>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="mx-auto w-1/3 sm:hidden"
            >
              <img
                src={BackToTop}
                alt="Back to top"
                width={60}
                height={60}
                className="cursor-pointer"
              />
            </motion.button>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="hidden sm:mx-auto sm:block"
          >
            <img
              src={BackToTop}
              alt="Back to top"
              width={60}
              height={60}
              className="cursor-pointer"
            />
          </motion.button>

          <div className="hidden sm:block">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
