import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { CryptoHistoryItem } from './CryptoHistoryItem';

export const CryptoHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(({ id, price, amount, date }, index) => (
          <CryptoHistoryItem
            key={id}
            price={price}
            amount={amount}
            date={date}
            number={index + 1}
          />
        ))}
      </tbody>
    </BaseTable>
  );
};
