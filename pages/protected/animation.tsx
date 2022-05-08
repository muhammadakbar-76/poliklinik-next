import { NextPage } from "next";
import Link from "next/link";


const Animation:NextPage = () => {
    return(
        <>
        <section className="p-10">
            <h1 className="text-2xl font-serif">Scale</h1>
            <div className="w-40 h-40 bg-sky-500 mx-auto rounded-lg shadow-lg shadow-slate-500 scale-50"></div>
        </section>
        <section className="p-10">
          <h1 className="text-2xl font-serif">Rotate</h1>
          <div className="w-20 h-20 bg-sky-500 mx-auto rounded-lg shadow-lg shadow-slate-500 rotate-45"></div>
        </section>
        <section className="p-10">
            <h1 className="text-2xl font-serif">Translate</h1>
            <div className="w-20 h-20 bg-sky-500 mx-auto rounded-lg shadow-lg shadow-slate-500 hover:translate-x-16"></div>
        </section>
        <section className="p-10">
            <h1 className="text-2xl font-serif">Translate & Transition</h1>
            <div className="w-20 h-20 mx-auto group">
                <div className="w-full h-full rounded-lg shadow-lg shadow-slate-500 transition-all bg-sky-500 group-hover:translate-x-16 group-hover:bg-pink-500"></div>
            </div>
        </section>
        <section className="p-10">
            <h1 className="text-2xl font-serif">Transform Origin & Transition Attributes</h1>
            <div className="w-20 h-20 mx-auto group">
                <div className="w-full h-full bg-sky-500 rounded-lg shadow-lg shadow-slate-500 group-hover:rotate-180 origin-top-left transition-all duration-500 ease-in-out delay-500"></div>
            </div>
        </section>
        <section className="p-10">
            <h1 className="text-2xl font-serif">Animation</h1>
            <div className="w-20 h-20 mx-auto animate-spin-slow mb-20">
                <div className="w-full h-full rounded-lg shadow-lg transition-all bg-sky-500"></div>
            </div>
            <div className="w-20 h-20 mx-auto animate-ping mb-20">
                <div className="w-full h-full rounded-full shadow-lg transition-all bg-sky-500"></div>
            </div>
            <div className="w-20 h-20 mx-auto animate-pulse mb-20">
                <div className="w-full h-full rounded-lg shadow-lg transition-all bg-sky-500"></div>
            </div>
            <div className="w-20 h-20 mx-auto animate-bounce mb-20">
                <div className="w-full h-full rounded-lg shadow-lg transition-all bg-sky-500"></div>
            </div>
            <div className="w-20 h-20 mx-auto animate-goyang mb-20">
                <div className="w-full h-full rounded-lg shadow-lg transition-all bg-sky-500"></div>
            </div>
        </section>
        <Link href="/protected/layout">
            <a className="pb-20">Next</a>
        </Link>
        </>
    )
}

export default Animation;