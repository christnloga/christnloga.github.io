import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<div className='relative'>
				<img src='/photo.png' alt="Vite logo" />
				<div className="absolute -bottom-1 left-0 w-full h-1/3 bg-linear-to-t dark:from-[#242424] from-white to-ransparent"></div>
			</div>
			<div className="p-4 italic flex flex-col gap-3 dark:text-slate-300 text-slate-600">
				<h2 className='text-4xl font-bold dark:text-sky-200 text-sky-700 my-4 style-henielle'>Nos Remerciements</h2>
				<p className="">
					Alors que nous approchons de la fin de cette année, un seul mot : merci.
				</p>
				<p className="">
					Nous tenons à exprimer notre profonde gratitude à nos collaborateurs dans l'ombre – vous avez soutenu l’œuvre dans les périodes difficiles. Vous avez sans relâche continué à porter dans vos cœurs nos familles, les elèves et étudiants, et les communautés telles que les Pygmées, les Peuls les Kotokos, avec intégrité et amour.
				</p>
				<p className="">
					non seulement vous pris du temps dans la prière pour tout le travail qui est fait sur le terrain, mais aussi vous avez donné pour des projets, pour les familles – nous vous sommes infiniment reconnaissants. Votre générosité est une expression tangible de la sollicitude de Dieu.
				</p>
				<p className="">
					Actuellement,  des milliers de personnes célèbrent le Seigneur pour le salut qui est désormais leur potion grâce à vous. Plusieurs jeunes ont abandonné la drogue et l'argent facile parce vous avez acceptez de payer le prix.
				</p>
				<p className="">
					Nous croyons que cette saison est loin d'être la fin de l'histoire – mais un grand encouragement à avancer.
				</p>
				<p className="">
					Alors que nous entrons dans une nouvelle année, nous avançons ensemble – avec humilité, conscients de plus de responsabilité.
				</p>
				<p className="font-bold">
					Notre espérance en Dieu nous conduira certainement vers des jours meilleurs.
				</p>
			</div>
		</div>
	)
}

export default App
