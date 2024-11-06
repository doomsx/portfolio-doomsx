import { useState } from "react";

function SkillsCard({
  title,
  icon,
  color,
  altText = "logo",
}: {
  title: string;
  icon: string;
  color: string;
  altText: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border rounded-md flex flex-col justify-center items-center py-3 px-6 md:h-[110px] md:w-[110px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? color : "white",
        boxShadow: isHovered ? `0 10px 10px 0 ${color}` : "none",
      }}
    >
      <img src={icon} alt={altText} className="h-[35px] w-[35px]" />
      <p className={`text-base`} style={{ color: isHovered ? color : "white" }}>
        {title}
      </p>
    </div>
  );
}

export default SkillsCard;
