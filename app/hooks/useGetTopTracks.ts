import {useInfiniteQuery} from '@tanstack/react-query';
import {requestsKeys} from '../utils/requestsKeys';
import {getTopTracks} from '../services/lastFm/getTopTracks';

export const useGetTopTracks = () => {
  const getTopTracksQuery = useInfiniteQuery({
    queryKey: [requestsKeys.getTopTracks],
    queryFn: getTopTracks,
    getNextPageParam: lastPage => {
      const {page, totalPages} = lastPage.data.tracks['@attr'];
      const nextPage = parseInt(page, 10) + 1;
      return nextPage <= parseInt(totalPages, 10) ? nextPage : null;
    },
    onError: error => {
      console.log('Error fetching songs');
      console.log(error);
    },
  });
  return getTopTracksQuery;
};
