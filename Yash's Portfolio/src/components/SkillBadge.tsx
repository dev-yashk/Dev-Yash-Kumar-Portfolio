import React from 'react';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <div className="bg-purple-900/30 px-4 py-2 rounded-full text-center hover:bg-purple-800/30 transition-colors">
      {name}
    </div>
  );
};

export default SkillBadge;