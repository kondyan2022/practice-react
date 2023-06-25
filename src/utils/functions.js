import { formatDistanceToNow } from 'date-fns';

export const formDate = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
