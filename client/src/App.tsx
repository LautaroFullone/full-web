import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import LandingLayout from './layouts/LandingLayout';

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LandingLayout />} >
					<Route path='/' element={<LandingPage />} index />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
