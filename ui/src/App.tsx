/** @jsxImportSource solid-js */
import { Component, createEffect, createSignal, onMount } from 'solid-js';

import logoImage from './assets/logo.svg';
import Modal from './components/Modal';

interface IClassNamesParams {
    [key: string]: boolean 
}

const App: Component = () => {
    const [ isModalOpen, setIsModalOpen ] = createSignal(false);
    const [ selectedGame, setSelectedGame ] = createSignal<string | null>(null);
    // const 

    onMount(() => {
        const pathName = window.location.pathname;

        if (pathName != null && pathName != '/') {
            setSelectedGame(pathName);
        }
    })

    const classNames = (params: IClassNamesParams) => {
        const classes = Object.entries(params).map(([key, value]) => {
            if (value == true) return key;
        })

        return classes.join(' ') ?? '';
    }

    const handleToggleModal = () => {
		setIsModalOpen(value => !value)
	}

    const handleSelectGame = (type: string) => {
        window.history.pushState(null, 'Title', `/${type}`);
        setSelectedGame(`/${type}`);
    }

    return (
        <>	
            <div class='max-w-[75rem] mx-auto flex flex-col items-center my-20'>
                <button onclick={(e) => {
                    setSelectedGame(null); window.history.replaceState(null, 'Title', '/');
                }}>
                    <img class="animate-floating" src={logoImage} alt="NLW E-sports logo" />
                </button>

                <h1 class='text-6xl text-white font-black mt-20'>
                    Seu <span class='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
                </h1>

                <div id='boo' class={classNames({ 
                        'mt-16': true, 
                        'w-[75rem]': true,
                        // 'transition-all': true, 
                        'ease-in': true, 
                        'duration-300': true,
                        'grid': true, 
                        'grid-cols-6': true, 
                        'grid-cols-0': !!selectedGame(), 
                        'gap-6': true,
                        
                    })}>
                    <button data-selected={selectedGame() == '/league_of_legends'} id='HA' 
                        class={classNames({ 
                            card: true,
                            'duration-700': true,
                            
                            'min-h-[240px]': true, 
                            'w-44': selectedGame() == null,
                            'w-full': selectedGame() == '/league_of_legends'
                        })} onclick={() => handleSelectGame('league_of_legends')}>
                        <img class='object-none h-full object-center' src="/game-extra.png" alt="League of legends banner" />

                        <div class='card-info'>
                            <strong class='card-title'>League of legends</strong>
                            <p class='card-description'>9 anúncios</p>
                        </div>
                    </button>

                    <button class={classNames({ card: true})} onclick={() => handleSelectGame('dota_2')}>
                        <img src="/game-2.png" alt="Dota 2 banner" />

                        <div class='card-info'>
                            <strong class='card-title'>Dota 2</strong>
                            <p class='card-description'>4 anúncios</p>
                        </div>
                    </button>

                    <button class={classNames({ card: true})} onclick={() => handleSelectGame('counter-strike_GO')}>
                        <img src="/game-3.png" alt="Counter-strike GO banner" />

                        <div class='card-info'>
                            <strong class='card-title'>Counter-strike GO</strong>
                            <p class='card-description'>3 anúncios</p>
                        </div>
                    </button>

                    <button class={classNames({ card: true})} onclick={() => handleSelectGame('apex_legends')}>
                        <img src="/game-4.png" alt="Apex Legends banner" />

                        <div class='card-info'>
                            <strong class='card-title'>Apex Legends</strong>
                            <p class='card-description'>5 anúncios</p>
                        </div>
                    </button>

                    <button class={classNames({ card: true})} onclick={() => handleSelectGame('fortnite')}>
                        <img src="/game-5.png" alt="Fortnite banner" />

                        <div class='card-info'>
                            <strong class='card-title'>Fortnite</strong>
                            <p class='card-description'>4 anúncios</p>
                        </div>
                    </button>

                    <button class={classNames({ card: true})} onclick={() => handleSelectGame('world_of_warcraft')}>
                        <img src="/game-6.png" alt="World of Warcraft banner" />

                        <div class='card-info'>
                            <strong class='card-title'>World of Warcraft</strong>
                            <p class='card-description'>1 anúncios</p>
                        </div>
                    </button>
                </div>

                <div class='mt-8 pt-1 bg-nlw-gradient rounded-lg'>
                    <div class='bg-[#2A2634] rounded-[6px] px-8 py-6 w-[75rem] flex justify-between'>
                        <div>
                            <p class='text-2xl text-white'><strong class='font-black'>Não encontrou seu duo?</strong></p>
                            <p class='mt-1 text-sm text-[#D4D4D8]'>Publique um anúncio para encontrar novos players!</p>
                        </div>

                        <button class='flex items-center h-12 px-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors' onclick={handleToggleModal}> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFF" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="84" y1="116" x2="148" y2="116" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="116" y1="84" x2="116" y2="148" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><circle cx="116" cy="116" r="84" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
                            <span class='ml-2'>Publicar anúncio</span>
                        </button>
                    </div>
                </div>
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

export default App;
