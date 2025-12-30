import './App.css'
import { Helmet } from '@dr.pogodin/react-helmet';
function App() {

	return (
		<div className='p-6 h-screen flex justify-center items-center w-full'>
			<Helmet>
				<title>Let's Build Together In 2026</title>
				<link rel="icon" type="image/svg+xml" href="/my-photo.jpg" />
				{/* <meta name='description' content='Beginner friendly page for learning React Helmet.' /> */}
			</Helmet>
			<h2 className="text-4xl font-bold">Let's Build Together In 2026</h2>
		</div>
	)
}

export default App
