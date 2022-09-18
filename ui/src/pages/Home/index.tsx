/** @jsxImportSource solid-js */
import { Component, createEffect, createSignal } from 'solid-js';
import axios from 'axios';

import './styles.css';
import logo from '../../assets/logo.svg';
import styles from './styles.module.css';
import Modal from '../../components/Modal';

export const Home: Component = () => {
    const [ gamesList, setGamesList ] = createSignal();
    const [ isModalOpen, setIsModalOpen ] = createSignal(false);

    createEffect(async() => {
      const response = await axios.get('https://api.github.com/users/Hidekih')
      console.log(response.data)
    })

	const handleToggleModal = () => {
		setIsModalOpen(value => !value)
	}

	return (
		<>
			<div class={styles.container}>
				<header class={styles.header}>
					<img class="logo" src={logo} alt="Logotipo NLW e-sports" />
				</header>

				<h1>
					Seu <span class={styles.gradient}>duo</span> está aqui.
				</h1>

				<div class={styles.list}>
					<button> volta </button>

					<div>
					<a href=""></a>
					<a href=""></a>
					<a href=""></a>
					<a href=""></a>
					<a href=""></a>
					<a href=""></a>
					</div>

					<button> proximo </button>
				</div>

				<footer class={styles.footer}>
					<div>
					TBD
					</div>
				</footer>

				<button onclick={handleToggleModal}>Abrir modal</button>
			</div>

			{ isModalOpen() && (
				<>
					<Modal 
						toggleModal={handleToggleModal}
					></Modal>
				</>
			) }
		</>
	);
};
