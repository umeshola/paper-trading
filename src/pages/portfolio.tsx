export default function portfolio() {
    return (
        <div>
            <h1 className="text-6xl flex justify-center">Portfolio</h1>
            <div className="grid grid-cols-12">
                <div className="col-span-5">
                    <div className=" ml-56 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="mb-4">
                            <h1 className="flex justify-center text-3xl font-bold leading-none text-gray-900 dark:text-white">Recent Transaction</h1>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Apple
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                BUY
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $320
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center ">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                tesla
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                sell
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $3467
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                FB
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                BUY
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $67
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center ">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                LNT
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                BUY
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $367
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3 pb-0 sm:pt-4">
                                    <div className="flex items-center ">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                NXP
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                BUY
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $2
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-span-7">
                    <div className="p-6 ml-10 mr-52 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h1 className="text-3xl">GRAPH</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}