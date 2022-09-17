import type { Component } from 'solid-js';
import { Portal } from 'solid-js/web';

import styles from './styles.module.css';

interface ModalProps {
    toggleModal: () => void;
}

const Modal: Component<ModalProps> = ({ toggleModal }) => {
    return (
        <>
            <Portal mount={document.getElementById("modal")!}>
               <div class={styles.portal}>
                    <div class={styles.modal}>
                        <h1>Titulo do modal</h1>
                    
                        <form class={styles.form}>
                            <div class={styles.inputContainer}>
                                <label for="gameName">Qual o game?</label>
                                <input id='gameName' type="text" />
                            </div>

                            <div class={styles.inputContainer}>
                                <label for='nickName'>Seu nome (ou nickname)</label>
                                <input id='nickName' type="text" />
                            </div>

                            <div class={styles.doubleInput}>
                                <div class={styles.inputContainer}>
                                    <label >Qual seu Discord?</label>
                                    <input type="text" />
                                </div>

                                <div class={styles.inputContainer}>
                                    <label>Qual horário do dia?</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <label for="sd">
                                <input type="checkbox" name="" id="" />
                                Costumo me conectar ao chat de voz
                            </label>

                            <div class={styles.footer}>
                                <button onClick={toggleModal}>Cancelar</button>
                                <button>Econtrar duo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Portal>
        </>
    );
};

export default Modal;