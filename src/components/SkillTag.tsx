interface SkillTagProps {
  skill: string;
  color: string;
}

export default function SkillTag({ skill, color }: SkillTagProps) {
  return (
    <span
      className="font-grotesk text-[13px] font-normal px-3.5 py-1.5 rounded"
      style={{
        backgroundColor: `${color}1F`,
        color: color,
      }}
    >
      {skill}
    </span>
  );
}
