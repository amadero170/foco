import HeroBanner from "../components/HeroBanner";
import ImageText from "../components/ImageText";

export default function About() {
  const mision =
    "En estos últimos años el comercio en línea y la importancia de contar con contenidos audio visuales interesantes para todos nuestros canales en internet ha tomado más y más fuerza, ahora tenemos la ventaja que irá en aumento cada vez más rápido con la AI, pero aun así creemos en la necesidad de generar una empresa que tenga algo que la tecnología nunca reemplazara; nuestra misión es generar proyectos vanguardistas y originales, pero con alma";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroBanner image="/fotoambar.jpeg" text="ABOUT" />
      <div className="m-12">
        <ImageText
          image="/fotoambar.jpeg"
          text={mision}
          title="NUESTRA MISION"
        />
      </div>
    </main>
  );
}
