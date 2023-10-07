import { footerLogo } from '../assets/images';
import { socialMedia, footerLinks } from '../constants';
import { copyrightSign } from '../assets/icons';
const Footer = () => {
  return (
    <footer className="max-container">
      <div
        className="flex justify-between items-start flex-wrap gap-20
      max-lg:flex-col"
      >
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 text-white-400 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map(item => (
              <div
                key={item.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <a href="https://github.com/magistrkim">
                  <img src={item.src} alt={item.alt} width={24} height={24} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-wrap lg:gap-10 gap-20 justify-between">
          {footerLinks.map(item => (
            <div key={item.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {item.title}
              </h4>
              <ul>
                {item.links.map(item => (
                  <li
                    key={item.name}
                    className="text-white-400 font-montserrat text-base 
                    leading-normal mt-3 hover:text-slate-gray cursor-pointer"
                  >
                    <a href="#products">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
