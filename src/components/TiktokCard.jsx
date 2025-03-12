import { useState, useEffect } from 'react'
import VanillaTilt from "vanilla-tilt"

const links = ['https://www.tiktok.com/embed/7441754908988083512', 'https://www.tiktok.com/embed/7440770272250055991', 'https://www.tiktok.com/embed/7433647963009846534']

function TikTokCard() {

    useEffect(() => {
        VanillaTilt.init(document.getElementById('tiktokCard'), {
            max: 25,
            speed: 400,
            gyroscope: false,
            glare: false,
            scale: 1.05,
            perspective: 1000,
        })
    })
    const [index, setIndex] = useState(0)

    const handleIndexAdd = () => {
        if (index === 2) {
            return
        } else {
            setIndex(index + 1)
        }
        console.log(index)
    }

    const handleIndexMinus = () => {
        if (index === 0) {
            return
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <>
            <div id="tiktokCard" className="second-section-card w-[500px] h-[45.5rem] border-2 rounded-2xl border-[var(--custom-color)] backdrop-blur-[15px] flex flex-col justify-center items-center p-3">
                <h2 className="text-[var(--custom-color)] text-2xl font-extrabold leading-normal mb-[.5rem]">Mis Tik Toks más populares</h2>
                <div className="video-container w-max h-[570px] relative">
                    <iframe
                        src={links[index]}
                        frameborder="0"
                        className="video w-full h-full outline-0 rounded-[10px]"
                        scrolling="no"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="player-buttons h-[90px]">
                    <div className="player">
                        <ul>
                            <li className="player-buttons" onClick={handleIndexMinus}><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-player-skip-back"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 5v14l-12 -7z" /><path d="M4 5l0 14" /></svg></li>
                            <li className="player-buttons" onClick={() => {
                                window.open('https://www.tiktok.com/@casttlesss')
                            }}><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-external-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg></li>
                            <li className="player-buttons" onClick={handleIndexAdd}><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-player-skip-forward"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5v14l12 -7z" /><path d="M20 5l0 14" /></svg></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TikTokCard