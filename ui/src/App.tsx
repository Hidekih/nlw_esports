/** @jsxImportSource solid-js */
import type { Component } from 'solid-js';
import { Routes, Route, Router } from "@solidjs/router"
import { Home } from './pages/Home';

const App: Component = () => {
    return (	
		// https://www.npmjs.com/package/@solidjs/router
        <Router>
			<Routes>
				<Route path="/" component={Home} />
			</Routes>
        </Router>
    );
};

export default App;
