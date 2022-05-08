import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const FlexBox: NextPage = () => {
    return(
        <>
        <div className="bg-slate-800 text-white lg:flex">
            <section className="pb-20 px-5 lg:p-12 md:max-w-5xl sm:max-w-xl mx-auto container lg:flex-1">
                <h1 className="text-4xl font-bold text-slate-100 py-5 lg:text-6xl">Flexbox Responsive <span className="text-sky-500">Website</span></h1>
                <img src="https://source.unsplash.com/1280x960" alt="gambar" className="mt-4 rounded-xl relative lg:hidden sm:mt-6 h-1/2"/> 
                <h2 className="lg:mt-6 sm:mt-8 sm:text-4xl text-2xl font-semibold text-slate-100">Mari belajar web front end bersama akbar</h2>
                <p className="mt-2 sm:mt-4 sm:text-xl text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus voluptas quasi beatae, laboriosam quaerat delectus maiores. Doloribus harum magnam dolor porro maxime tenetur a ad fugiat incidunt! Cumque autem, veniam dolore repudiandae est enim nostrum voluptates asperiores cupiditate porro?</p>
                <div className="mt-4 sm:mt-6">
                <a href="#" className="inline-block px-5 py-3 bg-red-600 rounded-xl sm:text-base text-sm shadow-sm uppercase shadow-white font-semibold">Subscribe</a>    
                </div>
            </section>
                <div className="container text-center hidden lg:block px-5 max-w-xl lg:p-12">
                    <img src="https://source.unsplash.com/1280x960" alt="aye" className="inline-block h-full rounded-[48px] py-5"/>
                </div>
        </div>
        </>
    )
}

export default FlexBox;