import './App.css'
import BtnDanger from './ui/buttons/danger/BtnDanger'
import BtnSuccess from './ui/buttons/succes/BtnSuccess'

function App() {
	const handlefunc = (e: any) => {
		e.preventDefault()
		console.log('hey')
	}

	return (
		<div className="App">
			<BtnSuccess handleFunction={handlefunc} children="BtnSuccess" />
			<BtnDanger
				handleFunction={handlefunc}
				children={<div>Click on me!</div>}
			/>
		</div>
	)
}

export default App
