import { useState } from "react";
import jwt from 'jsonwebtoken';
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import  {connectToDatabase}  from "@/lib/dbConnect";
import { userAtom } from "@/store/atoms/userAtom";
import { User } from "@/lib/db";

export default function signup() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [userInfo, setInfo] = useRecoilState(userAtom);
    const router = useRouter();
    console.log(userInfo);
    const handleSignup = async () => {
        try {
            console.log("conecting")
            await connectToDatabase();
            console.log("connectd!")
            const obj = { username: name, password: pass, balance: 100000, };
            const newAdmin = new User(obj);
            let adminDb = await newAdmin.save();
            console.log("saved!");
            setInfo({ username: name, balance: 100000, password: pass });
            const token = jwt.sign({ username: name }, "Umesh", { expiresIn: '1h' });
            localStorage.setItem('token', token);


            router.push("/");
        } catch (error) {
            console.log("error in signup", error);
        }
    };

    return (
        <div className="flex justify-center mt-56">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-6">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign un to our platform</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(e) => {
                            setName(e.target.value);
                        }} />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(e) => {
                            setPass(e.target.value);
                        }} />
                    </div>
                    <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
                        handleSignup();
                    }}>Sign up</button>
                </div>
            </div>
        </div>
    );
}