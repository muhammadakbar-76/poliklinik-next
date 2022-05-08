import { NextPage } from "next";
import Link from "next/link";


const Utility2: NextPage = () => {
    return(
        <>
        <section className="mb-10">
            <h2 className="text-4xl text-center">Background</h2>
            <div className="max-w-xl h-96 overflow-y-scroll bg-fixed mx-auto mt-[42px]" style={{ backgroundImage: "url('https://source.unsplash.com/1000x600?programming')" }}> {/*<- aribitary value*/}
            <p className="p-5 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed amet laborum nam natus voluptas eum, tempora perspiciatis maiores mollitia alias suscipit, incidunt repudiandae sit voluptatibus! Dicta natus ad dolore sequi velit earum culpa ullam accusamus adipisci tempora eligendi, aut, eos officia voluptas. Architecto est, tenetur at, vitae sunt porro natus dolor, excepturi quibusdam aut molestiae officiis enim impedit quod voluptatibus laborum odit quaerat? Magnam asperiores praesentium eos, beatae voluptas enim veritatis quod fugit earum fuga quaerat ipsa laudantium dolores minus eum nisi ullam! Assumenda, sint. Deserunt, voluptatem facere? Provident numquam ipsum earum pariatur voluptatibus culpa a qui nemo iusto!</p>
            </div>
            <div className="mt-32 max-w-xl h-96 bg-slate-300 mx-auto bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/images/tes.jpg')" }}>

            </div>
        </section>
        <section className="mb-10">
            <h2 className="text-4xl text-center">Border</h2>
            <div className="max-w-xl h-96 bg-slate-300 mx-auto rounded-2xl border-4 border-slate-800 border-double"></div>
            <div className="bg-slate-300 flex flex-row divide-x-2 mt-20 max-w-4xl mx-auto">
                <div className="flex-1 h-20">1</div>
                <div className="flex-1 h-20">1</div>
                <div className="flex-1 h-20">1</div>
            </div>
            <div className="bg-red-200 max-w-4xl mt-20 mx-auto h-20 ring-2"></div>
        </section>
        <section className="mb-10">
            <h2 className="text-4xl mt-20 text-center">Shadow</h2>
            <div className="bg-indigo-200 max-w-xl mx-auto h-20 shadow-lg shadow-teal-100 opacity-50"></div>
        </section>
        <section className="mb-10">
            <h2 className="text-4xl text-center">Mix Blend Mode</h2>
            <div className="max-w-4xl h-96 mx-auto mb-20 rounded-2xl overflow-hidden border border-black" style={{ backgroundImage: "url('/images/tes.jpg')" }}>
                <div className="w-full h-full bg-blue-300 mix-blend-darken"></div>
            </div>
        </section>
        <section className="mb-10">
            <h2 className="text-4xl text-center">Background Blend Mode</h2>
            <div className="max-w-4xl h-96 mx-auto bg-slate-300 bg-blend-overlay mb-20 rounded-2xl overflow-hidden border border-black" style={{ backgroundImage: "url('/images/tes.jpg')" }}>
            </div>
        </section>
        <section className="mb-10">
            <h2 className="text-4xl text-center">Filter</h2>
            <div className="max-w-4xl h-96 mx-auto mb-20 rounded-2xl blur-sm hover:blur-none overflow-hidden border border-black" style={{ backgroundImage: "url('/images/tes.jpg')" }}></div>
            <div className="max-w-4xl h-96 mx-auto mb-20 rounded-2xl brightness-150 overflow-hidden border border-black" style={{ backgroundImage: "url('/images/tes.jpg')" }}>
            </div>
            <h2 className="text-4xl text-center">Efek Glass Morphism</h2>
            <div className="max-w-4xl h-96 mx-auto mb-20 rounded-2xl overflow-hidden border border-black flex" style={{ backgroundImage: "url('/images/tes.jpg')" }}>
                <div className="w-[200px] h-[200px] bg-white/10 m-auto backdrop-blur-md rounded-full"></div>
            </div>
        </section>
        <Link href="/protected/utility3">
            <a className="underline text-lg pb-36">Next</a>
        </Link>
        </>
    )
}

export default Utility2;