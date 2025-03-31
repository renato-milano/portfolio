import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-4 text-center md:text-left">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo o Nome */}
        <div>
          <h2 className="text-xl font-bold">Renato Milano</h2>
          <p className="text-sm text-gray-400">Solution Developer.</p>
        </div>
        
        {/* Link ai Social */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://github.com/renato-milano" className="text-gray-400 hover:text-white transition"><FaGithub color="gray" size={24} /></a>
          <a href="https://www.linkedin.com/in/renato-milano-a52b61192/" className="text-gray-400 hover:text-white transition"><FaLinkedin color="gray" size={24} /></a>
          <a href="mailto:renatomilanodev@gmail.com" className="text-gray-400 hover:text-white transition"><MdEmail color="gray" size={24} /></a>
        </div>
        
        {/* Dati Legali */}
        <div>
          <h3 className="text-lg font-semibold">Dati Legali</h3>
          <p className="text-sm text-gray-400">© 2025 Renato Milano. Tutti i diritti riservati.</p>
          <p className="text-sm text-gray-400">P.IVA: 10779291219</p>
          <p className="text-sm text-gray-400">Email: renatomilanodev@gmail.com</p>
          <p className="text-sm text-gray-400">Pec: renatomilano@pec.it</p>
        </div>
      </div>
    </footer>
  );
}
