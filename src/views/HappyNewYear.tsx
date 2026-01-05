import React from "react";
import NotFound from "../components/NotFound";
import { useParams } from "react-router-dom";
import { Helmet } from "@dr.pogodin/react-helmet";

const HappyNewYear = () => {
  const { id } = useParams();
  const expectedId =
    "la-famille-mbebi-vous-souhaite-une-very-bonne-et-heureuse-annee-2026";
  console.log(id);
  if (id !== expectedId) return <NotFound />;

  return (
    <div className="bg-white">
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/photo-square.jpg" />
        <title>
          La famille Mbebi vous souhaite bonnes fêtes de fin d'année...Lire la
          suite
        </title>
        {/* <meta name='description' content='Beginner friendly page for learning React Helmet.' /> */}
      </Helmet>
      <div className="p-6 h-screen w-full bg-[#3394d8]/10">
        <img
          className="fixed top-0 right-0 z-20 h-1/4"
          src="/flower-top-right.png"
          alt="Vite logo"
        />
        <img
          className="fixed bottom-0 left-0 z-20 h-1/4"
          src="/flower-bottom-left.png"
          alt="Vite logo"
        />
        <img
          className="fixed top-0 left-0 h-1/4 opacity-80"
          src="/flower-top-left.png"
          alt="Vite logo"
        />
        <img
          className="fixed bottom-0 right-0 h-1/4 opacity-60"
          src="/flower-bottom-right.png"
          alt="Vite logo"
        />
        <div className="relative h-full border-4 border-[#778da5] rounded">
          <div className="absolute top-0 left-0 w-full h-1/4 z-10 bg-linear-to-b from-white to-ransparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/4 z-10 bg-linear-to-t from-white to-ransparent"></div>
          <div className="relative h-full overflow-y-scroll p-6 bg-white/60">
            <div className="relative flex w-full justify-center">
              {/* <div className="size-[100px] rounded-full relative z-30 overflow-hidden flex">
							<img className='h-full' src='/photo.png' alt="Vite logo" />
						</div> */}
              {/* <img src='/photo.png' alt="Vite logo" /> */}
            </div>
            <div className="italic flex flex-col gap-3 text-slate-500 py-14">
              <h2 className="text-4xl font-bold text-sky-400 my-4 style-henielle">
                La famille Mbebi <br /> vous souhaite une très bonne et heureuse
                année 2026
              </h2>
              <p className="text-slate-700">
                Remplie de bénédictions, de joie et de paix. Que l'année
                nouvelle soit pour vous et vos proches une période de
                croissance, de succès et de rapprochement avec Dieu.
              </p>
              {/* <h2 className='text-4xl font-bold text-sky-400 my-4 style-henielle'>La famille Mbebi <br /> vous souhaite bonnes fêtes de fin d'année</h2> */}
              {/* <div className="size-[100px] rounded-full mx-auto relative overflow-hidden flex">
							<img className='h-full' src='/photo.png' alt="Vite logo" />
						</div> */}
              <img
                className="relative h-14 mx-auto"
                src="/flower-center.png"
                alt="Vite logo"
              />
              <p className="">
                Alors que nous approchons de la fin de cette année, un seul mot
                : merci.
              </p>
              <p className="">
                Nous tenons à exprimer notre profonde gratitude à nos
                collaborateurs dans l'ombre – vous avez soutenu l’œuvre dans les
                périodes difficiles. Vous avez sans relâche continué à porter
                dans vos cœurs nos familles, les elèves et étudiants, et les
                communautés telles que les Pygmées, les Peuls les Kotokos, avec
                intégrité et amour.
              </p>
              <p className="">
                non seulement vous pris du temps dans la prière pour tout le
                travail qui est fait sur le terrain, mais aussi vous avez donné
                pour des projets, pour les familles – nous vous sommes
                infiniment reconnaissants. Votre générosité est une expression
                tangible de la sollicitude de Dieu.
              </p>
              <p className="">
                Actuellement, des milliers de personnes célèbrent le Seigneur
                pour le salut qui est désormais leur potion grâce à vous.
                Plusieurs jeunes ont abandonné la drogue et l'argent facile
                parce vous avez acceptez de payer le prix.
              </p>
              <p className="">
                Nous croyons que cette saison est loin d'être la fin de
                l'histoire – mais un grand encouragement à avancer.
              </p>
              <p className="">
                Alors que nous entrons dans une nouvelle année, nous avançons
                ensemble – avec humilité, conscients de plus de responsabilité.
              </p>
              <p className="">
                Notre espérance en Dieu nous conduira certainement vers des
                jours meilleurs.
              </p>
              <p className="text-xl font-bold">Excellente année 2026 !</p>
              <img
                className="relative h-14 mx-auto my-4"
                src="/flower-center.png"
                alt="Vite logo"
              />
              {/* <hr className='my-4 opacity-20' /> */}
              <p className="font-bold">
                L’Éternel ordonnera à la bénédiction d’être avec toi dans tes
                greniers et dans toutes tes entreprises. Il te bénira dans le
                pays que l’Éternel, ton Dieu, te donne.
              </p>
              <p className="font-bold text-sky-600">Deutéronome 28:8 LSG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyNewYear;
