import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";

const Utility3: NextPage = () => {

    useEffect(() => {
        const checkbox = document.querySelector('#toggle') as HTMLInputElement;
        const html = document.querySelector('html');

        function check(){
            checkbox.checked ? html?.classList.add("dark") : html?.classList.remove("dark");
        }

        checkbox?.addEventListener('click',check,false);

        return () => removeEventListener('click',check,false);
    },[]);

    return(
        <html>
        <body className="dark:bg-slate-800 dark:text-white">
            <div className="flex justify-center py-20">
            <span className="text-sm text-slate-500 mr-2">Light</span>
            <input type="checkbox" id="toggle" className="hidden"/>
            <label htmlFor="toggle">
                <div className="w-9 h-5 bg-slate-500 rounded-full flex items-center pl-0.5 cursor-pointer">
                    <div className="h-4 w-4 bg-white rounded-full toggle-circle"></div>
                </div>
            </label>
            <span className="text-sm text-slate-500 ml-2">Dark</span>
            </div>
        <section className="mb-20 max-w-2xl h-32 mx-auto flex flex-col">
            <h2 className="text-4xl">Psuedo class dasar</h2>
            <button className="rounded-lg p-2 bg-green-500 dark:bg-slate-300 dark:text-slate-700 m-auto text-md font-serif hover:bg-green-700 hover:dark:bg-slate-900 hover:rounded-full active:bg-blue-700 focus:ring">Simpan</button>
        </section>
        <section className="mb-56 max-w-2xl h-32 mx-auto flex flex-col">
            <h2 className="text-4xl">Pseudo Group</h2>
            <div className="border rounded-lg border-gray-500 h-96 mt-2 py-10 flex flex-row group hover:bg-sky-500">
                <div className="bg-blue-300 h-[200px] w-[200px] group-hover:text-white">1</div>
                <div className="bg-teal-300 h-[200px] w-[200px] group-hover:text-red-200">2</div>
                <div className="bg-slate-300 h-[200px] w-[200px] group-hover:text-yellow-400">3</div>
            </div>
        </section>
        <section className="mb-20 max-w-2xl h-full mx-auto flex flex-col">
            <h2 className="text-4xl">Pseudo Selection</h2>
            <div className="border rounded-lg border-gray-500 h-44 mt-2 py-10 hover:text-white hover:bg-sky-500 selection:bg-lime-400 selection:text-slate-800">
                <h2 className="text-xl block mb-2">Testing</h2>
                <p className="text-md block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veritatis similique harum cum repudiandae, odit explicabo nostrum a architecto. Error.</p>
            </div>
            <h2 className="text-4xl mt-20">First Line MakeUp</h2>
            <div className="border rounded-lg border-gray-500 mt-2 py-10 hover:text-white hover:bg-sky-500 selection:bg-lime-400 selection:text-slate-800 font-serif first-line:uppercase">
                <h2 className="text-xl block mb-2">Testing</h2>
                <p className="text-md block first-line:tracking-widest first-letter:text-6xl first-letter:float-left first-letter:mr-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquam deserunt aspernatur vitae, natus modi rem atque laudantium consequatur ab possimus minus voluptatem ipsam neque porro? Asperiores distinctio corrupti quibusdam deleniti molestias expedita sequi maxime sapiente numquam ipsum commodi rem culpa inventore provident, fugiat cumque impedit magni perspiciatis voluptatum! Quis consectetur quod veniam, consequuntur itaque non facilis maxime accusantium dolor cupiditate quidem maiores delectus nobis eum quia atque possimus architecto minima qui magnam est ducimus! Facere sapiente incidunt eum ipsum dolores cupiditate magnam beatae! Maiores quidem quibusdam nostrum quasi fugit fuga? Expedita aut libero deserunt ipsum dolor ducimus aperiam doloribus.</p>
            </div>
            <h2 className="text-4xl mt-20">first line, text</h2>
            <div className="border rounded-lg border-gray-500 mt-2 py-10 hover:text-white hover:bg-sky-500 selection:bg-lime-400 selection:text-slate-800 font-serif first-line:uppercase dark:hover:bg-slate-100 dark:hover:text-slate-800">
                <h2 className="text-xl block mb-2">Testing</h2>
                <p className="text-md block first-line:tracking-widest first-letter:text-6xl first-letter:float-left first-letter:mr-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquam deserunt aspernatur vitae, natus modi rem atque laudantium consequatur ab possimus minus voluptatem ipsam neque porro? Asperiores distinctio corrupti quibusdam deleniti molestias expedita sequi maxime sapiente numquam ipsum commodi rem culpa inventore provident, fugiat cumque impedit magni perspiciatis voluptatum! Quis consectetur quod veniam, consequuntur itaque non facilis maxime accusantium dolor cupiditate quidem maiores delectus nobis eum quia atque possimus architecto minima qui magnam est ducimus! Facere sapiente incidunt eum ipsum dolores cupiditate magnam beatae! Maiores quidem quibusdam nostrum quasi fugit fuga? Expedita aut libero deserunt ipsum dolor ducimus aperiam doloribus.</p>
            </div>
        </section>
        <section className="max-w-2xl h-32 mx-auto pb-96">
            <h2 className="text-4xl mb-14">Pseudo Before After</h2>
            <div className="max-w-lg border border-slate-200 rounded-xl mx-auto font-serif p-5">
                <form action="">
                    <label htmlFor="email">
                        <span className="block font-semibold mb-1 dark:text-white text-slate-700 after:content-['*'] after:text-pink-500 after:ml-0.5">
                            Email
                        </span>
                        <input type="email" name="email" id="email" placeholder="Masukkan email" className="px-3 py-2 border shadow rounded w-full focus:outline-none focus:ring-1 focus:ring-sky-200 focus:border-sky-500 placeholder:text-slate-400
                        invalid:text-pink-700 invalid:focus:ring-pink-500 invalid:focus:border-pink-700 peer"/>
                        <p className="text-sm m-1 text-pink-700 invisible peer-invalid:visible">Email Tidak Valid</p>
                    </label>
                </form>
            </div>
        </section>
        <Link href="/protected/animation">
            <a className="pb-20">Next</a>
        </Link>
        </body>
        </html>
    )
}

export default Utility3;