import { useState } from 'react';

function SkillsCard({ title, icon, color }: { title: string, icon: string, color: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="h-[110px] w-[110px] flex flex-col items-center justify-center gap-3 flex-wrap border rounded-md border-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                borderColor: isHovered ? color : 'white',
                boxShadow: isHovered ? `0 10px 10px 0 ${color}` : 'none',
            }}
        >
            <img src={icon} alt="logo" className="h-[35px] w-[35px]" />
            <p className={`uppercase text-base font-semibold`} style={{ color: isHovered ? color : "white" }}>
                {title}
            </p>
        </div>
    );
}

export default SkillsCard;
