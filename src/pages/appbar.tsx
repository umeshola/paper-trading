{/* <div className="relative">
<div className="absolute top-0 right-0" style={{ marginRight: "5px" }}>
    <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>
</div>
<img className="rounded-full h-11 w-11 mr-2" src={profileImage} alt="Profile" />
</div>
) : (
<div className="mr-1 text-3xl relative">
<span className="absolute top-0 right-0">
    <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>
</span>
{/* ({session?.user?.email}) */}

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { userAtom } from '@/store/atoms/userAtom';

export default function Appbar() {
    const router = useRouter();
    const user = useRecoilValue(userAtom);

    const handleLogout = () => {

    };

    return (
        <div className="ml-24 mr-24">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="text-6xl font-thin">
                    <Link href="/">
                        <div className="relative flex place-items-center before:absolute before:h-[500px] before:w-full sm:before:w-[500px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-red before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[500px] after:w-full sm:after:w-[500px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-red-500 after:blur-3xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
                            <button>404</button>
                        </div>
                    </Link>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "10px" }}>
                    <div className="mr-5 text-4xl">
                        <Link href="/balance">
                            {router.pathname === "/balance" && <h1></h1>}
                            {router.pathname !== "/balance" && <button className='hover-2'>balance</button>}
                        </Link>
                    </div>
                    <div className="mr-5 text-4xl">
                        <Link href="/market">
                            {router.pathname === "/market" && <h1></h1>}
                            {router.pathname !== "/market" && <button className='hover-2'>market</button>}
                        </Link>
                    </div>
                    <div className="mr-5 text-4xl">
                        <Link href="/portfolio">
                            {router.pathname === "/portfolio" && <h1></h1>}
                            {router.pathname !== "/portfolio" && <button className='hover-2'>portfolio</button>}
                        </Link>
                    </div>
                    <div className="mr-5 text-4xl">
                        {user.username ? (
                            <button className='hover-2' onClick={handleLogout}>Logout</button>
                        ) : (
                            <Link href="/signup">
                                <div >
                                <button className='hover-2'>Signup</button>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
    );
}
