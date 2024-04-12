import { useQuery } from '@tanstack/react-query';
import { getBookings, getSalesData } from './api';
import { QueryKeys } from './queryKeys';

export const useGetSalesData = () => {
  return useQuery({
    queryKey: [QueryKeys.SALES_DATA],
    queryFn: getSalesData,
    staleTime: Infinity,
  });
};

export const useGetBookings = () => {

  return useQuery({
    queryKey: [QueryKeys.BOOKINGS],
    queryFn:()=> getBookings(),
    staleTime: Infinity,
  });

}
