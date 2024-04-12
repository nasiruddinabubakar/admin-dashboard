import { useQuery } from '@tanstack/react-query';
import { getSalesData } from './api';
import { QueryKeys } from './queryKeys';

export const useGetSalesData = () => {
  return useQuery({
    queryKey: [QueryKeys.SALES_DATA],
    queryFn: getSalesData,
    staleTime: Infinity,
  });
};
