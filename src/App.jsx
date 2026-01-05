import './App.css';
import { Helmet } from '@dr.pogodin/react-helmet';
import InfiniteCarousel from "./components/InfiniteCarousel";
import { GoGift } from "react-icons/go";
import { useTranslation } from "react-i18next";

function App() {
	const { t, i18n } = useTranslation();
	const language = i18n.resolvedLanguage;

	console.log(language);

	let wishes_en = ["Health", "Growth", "Success", "Opportunities", "Achievements", "Prosperity", "Peace", "Love"];
	let wishes_fr = ["Santé", "Croissance", "Succès", "Opportunités", "Réussites", "Prosperité", "Paix", "Amour"];

	const wishes = language === "en" ? wishes_en : wishes_fr;

	return (
		<div className='h-screen flex flex-col justify-between w-full overflow-x-hidden'>
			<img src="/floor.png" className="absolute left-0 bottom-0 saturate-0 mix-blend-screen opacity-10 object-scale-down" alt="" />
			{/* <Helmet>
				<title>Let's Build Together In 2026</title>
				<link rel="icon" type="image/svg+xml" href="/my-photo-2.jpg" />
				<meta name='description' content='Beginner friendly page for learning React Helmet.' />
			</Helmet> */}

			<div className="relative max-w-[calc(100vw-50px)] lg:max-w-[320px] mx-auto flex grow w-full overflow-hidden rounded-b-3xl">

				<img className='absolute w-full h-full object-cover' src="/my-photo-2.jpg" alt="" />
				<img className='absolute z-10' src="/dark-gold-confetti.png" alt="" />
				{/* Overlay */}
				<div className="absolute bottom-0 h-1/2 w-full bg-linear-to-t from-black/90 to-ransparent"></div>
				{/* Profile */}
				<div className='absolute z-10 bottom-0 p-6 flex items-center gap-3'>
					<div className="rounded-full overflow-hidden size-[40px]">
						<img src="/my-photo-3.jpg" alt="" />
					</div>
					<div className="flex flex-col items-start">
						<p className="font-semibold text-white">NLOGA Joseph Christ</p>
						<p className="text-sm text-white/70">UX Engineer</p>
					</div>
				</div>

				<div className='relative flex flex-col items-start z-10 p-6 mt-auto mb-20'>
					<p className="text-styled text-white text-4xl ml-5 font-bold">{t('happy')}</p>
					<h2 className={"text-[100px] text-white font-bold -mt-10 -ml-2 text-shadow uppercase"}>{t('new')}</h2>
					<h2 className="text-[60px] text-white -mt-16 ml-3 text-shadow uppercase">{t('year')}</h2>
				</div>

			</div>
			<div className="relative overflow-x-hidden pt-6">
				<InfiniteCarousel
					items={wishes.map((wish) => (
						<div className="flex items-center gap-2 text-xl text-[#b59351] font-semibold rounded-full px-4 py-2 border border-yellow-500/50">
							<GoGift className="size-5" />
							<p>{wish}</p>
						</div>
					))}
				/>
			</div>
			<div className='p-6 w-full flex gap-3'>
				<h2 className="text-xl mx-auto font-bold uppercase">{t('greeting')}</h2>
			</div>
		</div>
	)
}

export default App
