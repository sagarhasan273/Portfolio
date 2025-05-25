interface SkillCardProps {
  name: string;
}

export const SkillCard = ({ name }: SkillCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-300">
      <div className="mb-2 text-teal-600 dark:text-teal-400 font-medium">
        {name}
      </div>
    </div>
  );
};