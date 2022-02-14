import type { NextPage } from "next";
import { useRouter } from "next/router";
import {signIn} from 'next-auth/react';
import {  FormEvent, useState } from "react";

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

    const Submit = async (e: FormEvent<YourFormElement>) => {
        e.preventDefault();
        const {nik,password} = e.currentTarget.elements;
        const user: any = await signIn('credentials',{
            redirect: false,
            nik: nik.value,
            password: password.value
        });
        if (user) {
            console.log(user);
            if(user.ok){
                router.replace("/");
            }
            else{
                alert("Check your credentials, ni...chan");
            }
        }
        else {
            alert("Something went wrong");
        }
    }

    return(
        <section id="login" className="min-h-screen flex justify-center items-center flex-col">
            <button onClick={() => {
                router.back();
            }}>go back</button>
            <div className="border border-gray-400 p-20">
                <h1 className="text-lg">Sign In</h1>
                <div className="">
                    <form onSubmit={Submit}>
                    <label htmlFor="nik">Nik</label>
                    <input type="text" id="nik" name="nik" className="border border-gray-600 rounded block" />
                    <label htmlFor="password">password </label>
                    <input type="password" id="password" name="password" className="border border-gray-600 rounded block" />
                    <input type="submit" value="submit" className="p-1 bg-gray-700 rounded mt-4" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login;