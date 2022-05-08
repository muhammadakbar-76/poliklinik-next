import type { NextPage } from "next";
import { useRouter } from "next/router";
import {signIn} from 'next-auth/react';
import {  FormEvent, useContext, useState } from "react";
import Appcontext from "../utils/appcontext";

interface FormElements extends HTMLFormControlsCollection {
    nik: HTMLInputElement;
    password: HTMLInputElement;
}

interface YourFormElement extends HTMLFormElement {
    readonly elements: FormElements;
 }

const Login: NextPage = () => {
    const router = useRouter();

    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const loading = useContext(Appcontext);

    const Submit = async (e: FormEvent<YourFormElement>) => {
        e.preventDefault();
        const {nik,password} = e.currentTarget.elements;
        loading.setStatus(true,'loading');
        const user: any = await signIn('credentials',{
            redirect: false,
            nik: nik.value,
            password: password.value
        });
        if (user) {
            console.log(user);
            if(user.ok){
                loading.setStatus(false,'loading');
                router.replace("/");
            }
            else{
                loading.setStatus(false,'loading');
                alert("Check your credentials, ni...chan");
            }
        }
        else {
            alert("Something went wrong");
        }
    }

    return(
        <section id="login" className="relative min-h-screen flex justify-center items-center flex-col bg-gradient-to-br from-sky-300 via-pink-300 to-amber-300">
            <button className="absolute top-5 right-5 p-3 border rounded-lg bg-lime-500  hover:bg-lime-800 active:bg-lime-800 border-gray-500 border-double" onClick={() => {
                router.back();
            }}>👈 Go Back</button>
            <div className="border-4 border-double border-gray-400 px-20 py-12">
                <h1 className="text-xl text-center font-semibold mb-5">Sign In</h1>
                <form onSubmit={Submit}>
                <label htmlFor="nik" className="block my-1 font-serif">Nik</label>
                <input type="text" id="nik" name="nik" className="border border-gray-600 rounded block px-1" />
                <label htmlFor="password" className="block mt-2 mb-1 font-serif">Password</label>
                <input type="password" id="password" name="password" className="px-1 border border-gray-600 rounded block" />
                <input type="submit" value="Submit" className="bg-lime-500 px-2 py-1.5 my-5 rounded-lg" />
                </form>
            </div>
        </section>
    )
}

export default Login;