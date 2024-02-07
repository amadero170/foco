import Card from "./components/Card";
import HeroBannerMain from "./components/HeroBannerMain";
import TextImage from "./components/TextImage";

export default function Home() {
  const aboutText =
    "I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do. I wish you the best of luck with your business, enjoy the adventure.";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroBannerMain image="/fotoambar.jpeg" />
      <div className="grid grid-cols-3  gap-12 m-12">
        <Card image="/card.jpeg" title="Web" text="Texto" />
        <Card image="/card.jpeg" title="Diseño de marca" text="Text" />
        <Card image="/card.jpeg" title="E commerce" text="Text" />
        <Card image="/card.jpeg" title="Contenido audiovisual" text="Text" />
        <Card image="/card.jpeg" title="Add words y analytics" text="Text" />
        <Card
          image="/card.jpeg"
          title="Storytelling y copywriting"
          text="Text"
        />
      </div>
      <div className=" m-12">
        <TextImage image="/fotoambar.jpeg" text={aboutText} title="ABOUT US" />
      </div>
    </main>
  );
}
