import type { NextPage } from "next";
import { useRouter } from "next/router";
import {  FormEvent, useState } from "react";

interface FormElements extends HTMLFormControlsCollection {
    nik: HTMLInputElement;
    name: HTMLInputElement;
    phone: HTMLInputElement;
    password: HTMLInputElement;
}

interface YourFormElement extends HTMLFormElement {
    readonly elements: FormElements;
 }

const Register: NextPage = () => {
    const router = useRouter();

    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const Submit = async (e: FormEvent<YourFormElement>) => {
        e.preventDefault();
        const {nik,name,phone,password} = e.currentTarget.elements;
        const regis = await fetch(`/api/db/regis`,{
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                name: name.value,
                nik: nik.value,
                phone: phone.value,
                password: password.value
            })
        });
        const res = await regis.json();
        if(regis.status !== 200) return alert(res.message);
        router.replace("/");
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
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className="border border-gray-600 rounded block" />
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" className="border border-gray-600 rounded block" />
                    <label htmlFor="password">Password </label>
                    <input type="password" id="password" name="password" className="border border-gray-600 rounded block" />
                    <input type="submit" value="submit" className="p-1 bg-gray-700 rounded mt-4" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register;