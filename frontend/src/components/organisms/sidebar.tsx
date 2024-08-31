import Link from "next/link";
import {BriefcaseBusiness, CircleCheck, CircleGauge, WandSparkles} from "lucide-react";

const Sidebar = () => {
    return (
        <aside
            className="w-64 bg-mainAccent text-white flex flex-col gap-y-7 p-4 rounded-lg shadow-md border-4 border-solid border-black">
            <div className="text-2xl font-bold mb-6">Dashboard</div>
            <nav className="flex flex-col gap-4">
                <Link
                    href="/jobpilot"
                    className="border-black flex gap-4 items-center text-black border-2 rounded-md bg-[#B8FF9F] hover:bg-[#9dfc7c] active:bg-[#7df752] py-2 px-4">
                    <CircleGauge className="w-5 h-5 text-black font-bold"/>
                    Tableau de bord
                </Link>
                <Link
                    href="/jobpilot/campaigns"
                    className="border-black flex gap-4 items-center text-black border-2 rounded-md bg-[#B8FF9F] hover:bg-[#9dfc7c] active:bg-[#7df752] py-2 px-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M15.31 21.03C15.21 21.71 14.59 22.25 13.85 22.25H10.15C9.40999 22.25 8.78999 21.71 8.69999 20.98L8.42999 19.09C8.15999 18.95 7.89999 18.8 7.63999 18.63L5.83999 19.35C5.13999 19.61 4.36999 19.32 4.02999 18.7L2.19999 15.53C1.84999 14.87 1.99999 14.09 2.55999 13.65L4.08999 12.46C4.07999 12.31 4.06999 12.16 4.06999 12C4.06999 11.85 4.07999 11.69 4.08999 11.54L2.56999 10.35C1.97999 9.9 1.82999 9.09 2.19999 8.47L4.04999 5.28C4.38999 4.66 5.15999 4.38 5.83999 4.65L7.64999 5.38C7.90999 5.21 8.16999 5.06 8.42999 4.92L8.69999 3.01C8.78999 2.31 9.40999 1.76 10.14 1.76H13.84C14.58 1.76 15.2 2.3 15.29 3.03L15.56 4.92C15.83 5.06 16.09 5.21 16.35 5.38L18.15 4.66C18.86 4.4 19.63 4.69 19.97 5.31L21.81 8.49C22.17 9.15 22.01 9.93 21.45 10.37L19.93 11.56C19.94 11.71 19.95 11.86 19.95 12.02C19.95 12.18 19.94 12.33 19.93 12.48L21.45 13.67C22.01 14.12 22.17 14.9 21.82 15.53L19.96 18.75C19.62 19.37 18.85 19.65 18.16 19.38L16.36 18.66C16.1 18.83 15.84 18.98 15.58 19.12L15.31 21.03ZM10.62 20.25H13.38L13.75 17.7L14.28 17.48C14.72 17.3 15.16 17.04 15.62 16.7L16.07 16.36L18.45 17.32L19.83 14.92L17.8 13.34L17.87 12.78L17.8731 12.7531C17.902 12.5027 17.93 12.2607 17.93 12C17.93 11.73 17.9 11.47 17.87 11.22L17.8 10.66L19.83 9.08L18.44 6.68L16.05 7.64L15.6 7.29C15.18 6.97 14.73 6.71 14.27 6.52L13.75 6.3L13.38 3.75H10.62L10.25 6.3L9.71999 6.51C9.27999 6.7 8.83999 6.95 8.37999 7.3L7.92999 7.63L5.54999 6.68L4.15999 9.07L6.18999 10.65L6.11999 11.21C6.08999 11.47 6.05999 11.74 6.05999 12C6.05999 12.26 6.07999 12.53 6.11999 12.78L6.18999 13.34L4.15999 14.92L5.53999 17.32L7.92999 16.36L8.37999 16.71C8.80999 17.04 9.23999 17.29 9.70999 17.48L10.24 17.7L10.62 20.25ZM15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.49999 13.933 8.49999 12C8.49999 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z"
                              fill="black"/>
                    </svg>
                    Campagnes
                </Link>
                <Link
                    href="/jobpilot/jobs"
                    className="border-black flex gap-4 items-center text-black border-2 rounded-md bg-[#B8FF9F] hover:bg-[#9dfc7c] active:bg-[#7df752] py-2 px-4 whitespace-nowrap">
                    <BriefcaseBusiness className="w-5 h-5 text-black font-bold"/>
                    Jobs
                </Link>
                <Link
                    href="/jobpilot/templates"
                    className="border-black flex gap-4 items-center text-black border-2 rounded-md bg-[#B8FF9F] hover:bg-[#9dfc7c] active:bg-[#7df752] py-2 px-4">
                    <WandSparkles className="w-5 h-5 text-black font-bold"/>
                    Templates
                </Link>
                <Link
                    href="/jobpilot/tasks"
                    className="border-black flex gap-4 items-center text-black border-2 rounded-md bg-[#B8FF9F] hover:bg-[#9dfc7c] active:bg-[#7df752] py-2 px-4">
                    <CircleCheck className="w-5 h-5 text-black font-bold"/>
                    Tâches
                </Link>
            </nav>
        </aside>
    );
};

export default Sidebar;
