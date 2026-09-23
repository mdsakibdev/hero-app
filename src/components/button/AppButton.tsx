"use client"
import { AppContext } from "@/context/AppContext";
import { IAppType } from "@/typescript/app.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallAppButton = ({ app }: { app: IAppType }) => {
    const { installedApp, setInastallApp } = useContext(AppContext);

    const handleInstallApp = () => {
        setInastallApp([...installedApp, app]);
        toast.success(`${app.title} installed succesfully`)
    }


    return (
        <div>
            <button type="button" className="btn btn-primary mt-6" onClick={() => handleInstallApp()}> Install App </button>
        </div>
    );
};

export default InstallAppButton;