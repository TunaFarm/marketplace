import * as React from 'react';

export interface IPaginationProps {
    data: any;
    onChange: (page: number) => void;
}

const Pagination = ({ data, onChange }: IPaginationProps) => {

    const [page, setPage] = React.useState<number>(data?.page ? data.page : 0);

    const onClick = React.useCallback((value: number) => {
        onChange(value);
        setPage(() => value);
    }, [setPage, onChange]);

    return (
        <div className="flex flex-col items-center my-12 md:items-start">
            <div className="flex text-gray-700">
                <div onClick={() => onClick(page && page - 1 > 1 ? page - 1 : 1)} aria-hidden="true" className="flex items-center justify-center w-8 h-8 mr-1 rounded-full cursor-pointer hover:bg-gray-600 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 feather feather-chevron-left">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </div>
                <div className="flex h-8 text-sm rounded-full font-small">
                    {page < 5 &&
                        (
                            <>
                                {page - 4 > 0 && <div onClick={() => onClick(page - 4)} aria-hidden="true" className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex hover:bg-gray-600 hover:text-white">{page - 4}</div>}
                                {page - 3 > 0 && <div onClick={() => onClick(page - 3)} aria-hidden="true" className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex hover:bg-gray-600 hover:text-white">{page - 3}</div>}
                            </>
                        )
                    }
                    {page >= 5 &&
                        (
                            <>
                                <div onClick={() => onClick(1)} aria-hidden="true" className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex hover:bg-gray-600 hover:text-white">1</div>
                                <div className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex ">...</div>
                            </>
                        )
                    }
                    {page - 2 > 0 && <div onClick={() => onClick(page - 2)} aria-hidden="true" className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex hover:bg-gray-600 hover:text-white">{page - 2}</div>}
                    {page - 1 > 0 && <div onClick={() => onClick(page - 1)} aria-hidden="true" className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex hover:bg-gray-600 hover:text-white">{page - 1}</div>}
                    <div className="items-center justify-center hidden w-8 leading-5 text-white transition duration-150 ease-in bg-gray-600 rounded-full cursor-pointer md:flex ">{page}</div>
                    {page < data.count && (
                        <>
                            <div onClick={() => onClick(page + 1)} aria-hidden="true" className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex hover:bg-gray-600 hover:text-white">{page + 1}</div>
                            {page + 2 < data.count && <div onClick={() => onClick(page + 2)} aria-hidden="true" className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex hover:bg-gray-600 hover:text-white">{page + 2}</div>}
                            {page + 3 < data.count &&
                                (
                                    <>
                                        <div className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex ">...</div>
                                        <div onClick={() => onClick(data?.count)} aria-hidden="true" className="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex hover:bg-gray-600 hover:text-white">{data.count}</div>
                                    </>
                                )
                            }
                        </>
                    )}
                    <div className="flex items-center justify-center w-8 h-8 leading-5 text-white transition duration-150 ease-in bg-gray-600 rounded-full cursor-pointer md:hidden">{page}</div>
                </div>
                <div onClick={() => onClick(page && page + 1 < data.count ? page + 1 : data.count)} aria-hidden="true" className="flex items-center justify-center w-8 h-8 ml-1 rounded-full cursor-pointer hover:bg-gray-600 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 feather feather-chevron-right">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Pagination);
