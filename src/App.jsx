import './App.css';
import { Helmet } from '@dr.pogodin/react-helmet';
import InfiniteCarousel from "./components/InfiniteCarousel";
import { GoGift } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { BiCheckCircle } from 'react-icons/bi';
import { LuHandshake } from 'react-icons/lu';
import RevealElement from './components/RevealElement';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

function App() {
	const { t, i18n } = useTranslation();
	const language = i18n.resolvedLanguage;

	console.log(language);

	let services_en = ["Product Design (UI/UX)", "Web & App Development", "Mobile App Development", "MVP & Startup Support", "Technical Consulting", "Tech Brand Identity"];
	let services_fr = ["Santé", "Croissance", "Succès", "Opportunités", "Réussites", "Prosperité", "Paix", "Amour"];

	const services = language === "en" ? services_en : services_fr;

	return (
		<div className='flex flex-col justify-between overflow-x-hidden'>
			<img src="/floor.png" className="fixed left-0 bottom-0 saturate-0 mix-blend-screen opacity-10 object-scale-down" alt="" />
			{/* <Helmet>
				<title>Let's Build Together In 2026</title>
				<link rel="icon" type="image/svg+xml" href="/my-photo-2.jpg" />
				<meta name='description' content='Beginner friendly page for learning React Helmet.' />
			</Helmet> */}

			<header className="relative max-w-[calc(100vw-50px)] lg:max-w-[320px] mx-auto flex h-[calc(100vh-150px)] flex-col grow w-full overflow-hidden rounded-b-3xl rounded-t-3xl mt-8">

				<img className='absolute w-full h-full object-cover' src="/my-photo-2.jpg" alt="" />
				{/* <img className='absolute z-10' src="/dark-gold-confetti.png" alt="" /> */}
				{/* Overlay */}
				<div className="absolute top-0 h-1/2 w-full bg-linear-to-b from-blue-300/50 to-ransparent"></div>
				<div className="absolute bottom-0 h-full w-full bg-linear-to-t from-black/90 to-ransparent"></div>
				{/* Happy New Year */}
				<div className='relative flex flex-col items-start z-10 px-6 mt-auto'>
					<p className="text-styled text-white text-4xl ml-5 font-bold">{t('happy')}</p>
					<h2 className={"text-[100px] text-white font-bold -mt-10 -ml-2 text-shadow uppercase"}>{t('new')}</h2>
					<h2 className="text-[60px] text-white -mt-16 ml-3 text-shadow uppercase">{t('year')}</h2>
				</div>
				{/* Small hero text */}
				<div className='relative flex flex-col items-start z-10 p-6'>
					<p className="text-sky-300 italic">{t('beforeProfile')}</p>
					<p className="text-sky-300 italic">{t('beforeProfile2')}</p>
				</div>
				{/* Profile */}
				<div className='z-10 bottom-0 p-6 flex items-center gap-3 w-full'>
					<div className="rounded-full shrink-0 overflow-hidden size-[40px] border-2 border-sky-300">
						<img src="/my-photo-3.jpg" alt="" />
					</div>
					<div className="flex flex-col items-start">
						<p className=" text-white font-semibold">NLOGA Joseph Christ</p>
						<p className="text-sm text-white/70">UX Engineer</p>
					</div>
				</div>

			</header>

			{/* Services */}
			<section className='py-1'>
				<div className="relative overflow-x-hidden pt-6">
					<InfiniteCarousel
						items={services.map((service) => (
							<div className="flex items-center gap-2 text-xl text-sky-300 font-semibold rounded-full px-4 py-2 border border-blue-300/50">
								<BiCheckCircle className="size-5" />
								<p>{service}</p>
							</div>
						))}
					/>
				</div>
			</section>

			<section>
				<div className="grid lg:grid-cols-3">
					<div></div>
					<div className='text-left p-6 w-full flex flex-col gap-3'>
						<h2 className="text-4xl font-bold text-white">From first idea to final launch</h2>
						<p className="text-white/70">Design, development, and structure working together</p>
					</div>
				</div>
			</section>

			<section className='relative z-10 lg:mb-4'>
				<div className="grid lg:grid-cols-3">
					<div></div>
					<div className='text-center px-6 py-6 w-auto flex flex-col gap-3'>
						<div className="relative flex items-end lg:items-end gap-6 cursor-default">

							{/* photo */}
							<RevealElement>
								<div className="flex shrink-0 size-12 rounded-full mb-11 bg-zinc-700 text-sky-300 border-2 border-zinc-600 overflow-hidden">
									<LuHandshake className='m-auto' size={30} />
								</div>
							</RevealElement>
							{/* Bubble */}
							<RevealElement>
								<div className="relative z-10 flex p-5 hover:scale-105 gap-2 lg:gap-3 bg-zinc-800 items-start border border-zinc-700 rounded-xl shadow-2xl duration-150 shadow-primary-300/70">
									<div className="absolute bottom-1/2 translate-y-1/2 -left-3 rotate-45 bg-zinc-800 border size-7 border-zinc-700"></div>
									<div className="absolute bottom-1/2 translate-y-1/2 left-0 bg-zinc-800 w-7 h-10"></div>
									<div>
										<p className="text-2xl text-left font-bold text-slate-100 ml-5">{t('openForBusiness')}</p>
									</div>
								</div>
							</RevealElement>
						</div>
					</div>
					<div></div>
				</div>
			</section>

			<section className='relative z-10'>
				<div className="grid lg:grid-cols-3">
					<div></div>
					<div className='text-left p-6 w-full flex flex-col gap-3'>
						<RevealElement>
							<h2 className="text-3xl font-bold text-white">Full web portfolio coming soon</h2>
						</RevealElement>
						<p className="text-white/70">Follow my activities on:</p>
						<div className="flex gap-4">
							<a target='_blank' href='https://cm.linkedin.com/in/nloga-joseph-christ-7b1651194' className="flex shrink-0 size-10 rounded-full mb-11 bg-zinc-700 border-2 border-zinc-600 overflow-hidden">
								<FaLinkedinIn className='m-auto text-sky-300' size={20} />
							</a>
							<a target='_blank' href='https://web.facebook.com/christ.nloga/?_rdc=1&_rdr#' className="flex shrink-0 size-10 rounded-full mb-11 bg-zinc-700 border-2 border-zinc-600 overflow-hidden">
								<FaFacebookF className='m-auto text-sky-300' size={20} />
							</a>
							<a target='_blank' href='https://x.com/_nloga?t=Y_tI_pkTsMRq0zljqk66Kg&s=08' className="flex shrink-0 size-10 rounded-full mb-11 bg-zinc-700 border-2 border-zinc-600 overflow-hidden">
								<BsTwitterX className='m-auto text-sky-300' size={20} />
							</a>
						</div>
					</div>
				</div>
			</section>
		</div >
	)
}

export default App
