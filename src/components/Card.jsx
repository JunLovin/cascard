import { useEffect, useRef, useState } from 'react'
import VanillaTilt from 'vanilla-tilt'
import Pfp from '@public/pfp.webp'
import QuestBadge from '@public/quest.png'
import TagBadge from '@public/tagBadge.png'
import BraveryBadge from '@public/braveryBadge.png'
import AlbumImage from '@public/albumImage.jpg'
import TrueLove from '@public/trueLove.mp3'

function Card() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(TrueLove));
    const albumRef = useRef(null);
    audioRef.current.volume = 0.2;

    const handleLink = url => {
        window.open(url)
    }

    const handleDiscordClick = () => {
        window.open('https://discord.com/users/422150428822732801');
    }

    useEffect(() => {
        VanillaTilt.init(document.querySelector(".card"), {
            max: 25,
            speed: 400,
            gyroscope: true,
            glare: false,
            scale: 1.05,
            perspective: 1000,
        });

        const audio = audioRef.current;

        // Add event listeners for audio
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false)

        audioRef.current.addEventListener('play', handlePlay)
        audioRef.current.addEventListener('pause', handlePause)

        return () => {
            // Cleanup event listeners
            audio.removeEventListener('play', () => handlePlay);
            audio.removeEventListener('pause', () => handlePause);
        };
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
            if (albumRef.current) {
                albumRef.current.classList.add('paused')
            }
        } else {
            audioRef.current.play();
            if (albumRef.current) {
                albumRef.current.classList.add('rotate')
                albumRef.current.classList.remove('paused')
            }
        }
    };

    return (
        <>
            <div className="card w-[1000px] h-[40rem] border-2 rounded-2xl p-4 flex gap-4 justify-center overflow-hidden backdrop-blur-[15px] border-[var(--custom-color)] max-xl:w-[90%]">
                <div className="w-full first-section-card flex flex-col items-center text-center text-[var(--custom-color)]">
                    <div className="w-full card-header">
                        <h1 className="text-4xl font-bold leading-normal">CASTLES 𒌐</h1>
                        <p className="m-auto w-[80%] mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card-social max-lg:">
                        <ul>
                            <li onClick={() => handleLink('https://tiktok.com/@casttlesssss')}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg></li>
                            <li onClick={() => handleLink('https://twitch.tv/casttlesssss')}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-twitch"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z" /><path d="M16 8l0 4" /><path d="M12 8l0 4" /></svg></li>
                            <li onClick={() => handleLink('https://kick.com/casttles')}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 3a1 1 0 0 1 1 1v3h1v-1a1 1 0 0 1 .883 -.993l.117 -.007h1v-1a1 1 0 0 1 .883 -.993l.117 -.007h6a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-1v1a1 1 0 0 1 -.883 .993l-.117 .007h-1v2h1a1 1 0 0 1 .993 .883l.007 .117v1h1a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-1h-1a1 1 0 0 1 -.993 -.883l-.007 -.117v-1h-1v3a1 1 0 0 1 -.883 .993l-.117 .007h-5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1z" /></svg></li>
                            <li onClick={() => handleLink('https://twitter.com/@vic_kil')}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg></li>
                        </ul>
                    </div>
                    <div className="flex gap-4 max-sm:gap-1 items-center w-full card-profile h-[9rem] border-2 border-[var(--custom-green)] rounded-2xl px-3 mb-6">
                        <div className="flex relative justify-center items-center h-full profile-container">
                            <img src={Pfp} alt="Discord Profile" className="rounded-full profile-image max-sm:scale-90" />
                            <div className="absolute bg-[#23A55A] size-[1.50rem] rounded-full bottom-4 right-3" title="Available"></div>
                        </div>
                        <div className="flex flex-col justify-around h-[60%] max-sm:justify-center max-sm:gap-1">
                            <h2 className="text-3xl font-bold text-left cursor-pointer max-[26.25rem]:text-xl" onClick={handleDiscordClick}>nsqk</h2>
                            <div className="flex gap-1 badge-container">
                                <a href="https://support-dev.discord.com/hc/en-us/articles/10113997751447-Active-Developer-Badge" target="_blank"><img src={BraveryBadge} alt="Developer Badge" className="badge-developer badge size-[1.5rem]" /></a>
                                <a href="https://said-beta.vercel.app" target="_blank"><img src={TagBadge} alt="Developer Badge" className="badge-developer badge size-[1.5rem]" /></a>
                                <a href="https://discord.com/ads/quests" target="_blank"><img src={QuestBadge} alt="Quest Badge" className="badge-quest badge size-[1.5rem]" /></a>
                            </div>
                            <div className="text-status w-[375px] bg-[var(--custom-color)] text-[var(--custom-white)] rounded-2xl flex justify-center pl-3 mt-1 max-lg:w-[60%] max-[45rem]:overflow-hidden max-sm:hidden">
                                <p className="hidden text-left">Uno dos uno dos te juro que yo siempre estaré cuando estás</p>
                            </div>
                        </div>
                        <div onClick={handleDiscordClick} className="absolute right-8 add-friend px-8 py-4 border-2 border-[var(--custom-green)] rounded-2xl mr-6 cursor-pointer max-sm:right-2 max-[28rem]:hidden max-[30rem]:border-none max-[30rem]:right-0">
                            <button className="cursor-pointer"><svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" /></svg></button>
                        </div>
                    </div>
                        <div className="music-player-container flex music-player h-[9rem] w-full border-2 border-[var(--custom-green)] rounded-2xl items-center px-3 relative gap-4 max-[26.25rem]:gap-2">
                            <div className="music-player-image max-[28.25rem]:w-[35%] max-[26.25rem]:w-[60%]">
                                <img src={AlbumImage} alt="Music Player" className="music-player-image size-[7rem] rounded-full" id="album" ref={albumRef} />
                            </div>
                            <div className="text-left music-player-info">
                                <h2 className="text-2xl font-bold max-[26.25rem]:text-[1.2rem]">True Love</h2>
                                <p className="text-[1.1rem] font-medium max-sm:w-[80%] max-sm:text-[1rem] max-[26.25]:text-[.8rem]">SASKE Y CARRION GODBLE$$</p>
                            </div>
                            <div className="absolute right-8 music-player-controls max-[26.25rem]:right-4">
                                <button onClick={togglePlay} className="cursor-pointer">
                                    {isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#413B2C" class="icon icon-tabler icons-tabler-filled icon-tabler-player-pause"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#413B2C" class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Card