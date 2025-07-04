import ContactosLayout from "./Layout/ContactosLayout";
//array de contactos
const contactos = [
  {
    nombre: "GIANFRANCO PEDRAZZANI",
    github: "https://github.com/GianPedr",
    imagen: "https://github.com/GianPedr.png",
  },
  {
    nombre: "MATÍAS EMANUEL VARGAS",
    github: "https://github.com/matiasvargasdev",
    imagen: "https://github.com/matiasvargasdev.png",
  },
  {
    nombre: "BRISA ANAHÍ BARRO",
    github: "https://github.com/BarroBrisa",
    imagen: "https://github.com/BarroBrisa.png",
  },
  {
    nombre: "DARIO ABEL MARTINEZ",
    github: "https://github.com/martinezcabj12",
    imagen: "https://github.com/martinezcabj12.png",
  },
];
export default function Contactos() {
  //renderizado
  return <ContactosLayout contactos={contactos} />;
}

