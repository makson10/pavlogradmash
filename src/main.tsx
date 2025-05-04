import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home.tsx';
import store from './store/store.ts';
import { Provider } from 'react-redux';
import './styles/global.css';
import './styles/fonts.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<div id="portal" className="fixed z-[101] w-screen overflow-hidden" />
			<Home />
		</Provider>
	</StrictMode>
);
