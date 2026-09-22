import { IAppType } from '@/typescript/app.type';
import React from 'react';
import AppCard from '../shared/AppCard';

const getTrandingAppData = async ()=>{
const res = await fetch("http://localhost:3000/data.json")
    const data= await res.json()
    return data
}

const TrandingApps = async () => {
    const appData = await getTrandingAppData()
    console.log(appData, "Data")
    return (
        <div className='my-20 container mx-auto'>
            <div className='space-y-4 max-w-125 mx-auto text-center'>
                <h2 className='font-bold text-3xl'>Trending Apps</h2>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>

            {/* Data Display via Card */}
            <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2'>
                {
                    appData.slice(0,8).map((app:IAppType, index:number) => {
                        return <AppCard key={index} app={app}/>
                    })
                }
            </div>
        </div>
    );
};

export default TrandingApps;