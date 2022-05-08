import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Responsive: NextPage = () => {
    return(
        <>
        <div className="bg-slate-800 text-white min-h-screen">
            <section className="pb-20 container mx-auto px-5 md:max-w-5xl sm:max-w-xl">
                <h1 className="text-4xl font-bold text-slate-100 py-5">Responsive <span className="text-sky-500">Website</span></h1>
                <Image src="https://source.unsplash.com/1280x960" alt="gambar" height={960} width={1280} className="mt-4 rounded-xl shadow-xl shadow-white relative sm:mt-6 sm:h-64"/> 
                <h2 className="mt-6 sm:mt-8 sm:text-4xl text-2xl font-semibold text-slate-100">Mari belajar web front end bersama akbar</h2>
                <p className="mt-2 sm:mt-4 sm:text-xl text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus voluptas quasi beatae, laboriosam quaerat delectus maiores. Doloribus harum magnam dolor porro maxime tenetur a ad fugiat incidunt! Cumque autem, veniam dolore repudiandae est enim nostrum voluptates asperiores cupiditate porro?</p>
                <div className="mt-4 sm:mt-6">
                <a href="#" className="inline-block px-5 py-3 bg-red-600 rounded-xl sm:text-base text-sm shadow-sm uppercase shadow-white font-semibold">Subscribe</a>    
                </div>
            </section>  
            <Link href="/protected/flexbox">
            <a className="py-20">Next</a>
            </Link>  
        </div>
        </>
    )
}

export default Responsive;