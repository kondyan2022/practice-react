import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
const sizeIcon = '30px';
const icons = [
  <FaRegThumbsUp size={sizeIcon} />,
  <MdPeople size={sizeIcon} />,
  <MdOutlineProductionQuantityLimits size={sizeIcon} />,
  <GiTreeDoor size={sizeIcon} />,
];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(({ id, title, total }, index) => (
          <StatisticItem
            key={id}
            title={title}
            total={total}
            icon={icons[index]}
          />
        ))}
      </StatisticsList>
    </>
  );
};
