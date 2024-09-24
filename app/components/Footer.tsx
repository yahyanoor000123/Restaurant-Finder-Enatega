import { Button } from "primereact/button";

const Footer = () => {
  return (
    <footer className="bg-green-300 text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-4">Enatega</h2>
          <p className="text-sm">
            Enatega is an open-source delivery management platform for the
            future. We prioritize innovation, flexibility, and affordability,
            and offer a scalable, customizable solution that streamlines your
            delivery processes.
          </p>
        </div>

        {/* Links Section */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-center flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <Button
              icon="pi pi-facebook"
              className="p-button-rounded p-button-text p-button-icon-only"
              aria-label="Facebook"
            />
            <Button
              icon="pi pi-twitter"
              className="p-button-rounded p-button-text p-button-icon-only"
              aria-label="Twitter"
            />
            <Button
              icon="pi pi-instagram"
              className="p-button-rounded p-button-text p-button-icon-only"
              aria-label="Instagram"
            />
            <Button
              icon="pi pi-linkedin"
              className="p-button-rounded p-button-text p-button-icon-only"
              aria-label="LinkedIn"
            />
            <Button
              icon="pi pi-github"
              className="p-button-rounded p-button-text p-button-icon-only"
              aria-label="GitHub"
            />
          </div>
          <p className="text-sm">
            Powered By <span className="font-bold">Ninjascode-YahyaNoor</span>
          </p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        <p>Enatega &ndash; &copy; 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
