/** @jsxImportSource solid-js */
import type { Component } from 'solid-js';

import logo from '../../assets/logo.svg';
import styles from './style.module.css';

export const Home: Component = () => {
  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <img src={logo} alt="Logotipo NLM e-sports" />
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
          asdas
        </div>
      </footer>
    </div>
  );
};
