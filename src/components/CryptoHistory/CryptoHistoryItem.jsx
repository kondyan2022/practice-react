import { Tr, Td } from './CryptoHistory.styled';
import { formDate } from 'utils/functions.js';
export const CryptoHistoryItem = ({ id, price, amount, date, number }) => {
  return (
    <Tr key={id}>
      <Td>{number}</Td>
      <Td>{price}</Td>
      <Td>{amount}</Td>
      <Td>{formDate(date)}</Td>
    </Tr>
  );
};
