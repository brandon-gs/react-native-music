import {TopTrackDataResponse} from '../../types/tracks';
import {axiosLastFmInstance} from '../axios';

export const getTopTracks = async ({pageParam = 1}) => {
  return await axiosLastFmInstance.get<TopTrackDataResponse>(
    `/2.0/?method=geo.gettoptracks&country=mexico&limit=10&page=${pageParam}`,
  );
};

// This can be used to don't make calls to the api
export const mockTopTracks = {
  data: {
    tracks: {
      track: [
        {
          name: 'Creep',
          duration: '239',
          listeners: '2575340',
          mbid: 'd11fcceb-dfc5-4d19-b45d-f4e8f6d3eaa6',
          url: 'https://www.last.fm/music/Radiohead/_/Creep',
          streamable: {'#text': '0', fulltrack: '0'},
          artist: {
            name: 'Radiohead',
            mbid: 'a74b1b7f-71a5-4011-9441-d0b5e4122711',
            url: 'https://www.last.fm/music/Radiohead',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
          ],
          '@attr': {rank: '0'},
        },
        {
          name: 'Seven Nation Army',
          duration: '449',
          listeners: '2141609',
          mbid: '24cc8311-98fd-423a-bed1-97728f5eabc5',
          url: 'https://www.last.fm/music/The+White+Stripes/_/Seven+Nation+Army',
          streamable: {'#text': '0', fulltrack: '0'},
          artist: {
            name: 'The White Stripes',
            mbid: '11ae9fbb-f3d7-4a47-936f-4c0a04d3b3b5',
            url: 'https://www.last.fm/music/The+White+Stripes',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
          ],
          '@attr': {rank: '1'},
        },
        {
          name: 'Take Me Out',
          duration: '256',
          listeners: '2177962',
          mbid: '11b7c3d2-8a49-4812-95dc-aef93c4cec37',
          url: 'https://www.last.fm/music/Franz+Ferdinand/_/Take+Me+Out',
          streamable: {'#text': '0', fulltrack: '0'},
          artist: {
            name: 'Franz Ferdinand',
            mbid: 'aa7a2827-f74b-473c-bd79-03d065835cf7',
            url: 'https://www.last.fm/music/Franz+Ferdinand',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
          ],
          '@attr': {rank: '2'},
        },
        {
          name: 'Mr. Brightside',
          duration: '224',
          listeners: '2820367',
          mbid: '37d516ab-d61f-4bcb-9316-7a0b3eb845a8',
          url: 'https://www.last.fm/music/The+Killers/_/Mr.+Brightside',
          streamable: {'#text': '0', fulltrack: '0'},
          artist: {
            name: 'The Killers',
            mbid: '95e1ead9-4d31-4808-a7ac-32c3614c116b',
            url: 'https://www.last.fm/music/The+Killers',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
          ],
          '@attr': {rank: '3'},
        },
        {
          name: 'The Less I Know the Better',
          duration: '0',
          listeners: '1523588',
          mbid: '',
          url: 'https://www.last.fm/music/Tame+Impala/_/The+Less+I+Know+the+Better',
          streamable: {'#text': '0', fulltrack: '0'},
          artist: {
            name: 'Tame Impala',
            mbid: '63aa26c3-d59b-4da4-84ac-716b54f1ef4d',
            url: 'https://www.last.fm/music/Tame+Impala',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
          ],
          '@attr': {rank: '4'},
        },
        {
          name: 'Reptilia',
          duration: '214',
          listeners: '1723098',
          mbid: '8eea2d35-8fe5-4142-864d-119914cfb628',
          url: 'https://www.last.fm/music/The+Strokes/_/Reptilia',
          streamable: {'#text': '0', fulltrack: '0'},
          artist: {
            name: 'The Strokes',
            mbid: 'f181961b-20f7-459e-89de-920ef03c7ed0',
            url: 'https://www.last.fm/music/The+Strokes',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
          ],
          '@attr': {rank: '5'},
        },
        {
          name: 'Do I Wanna Know?',
          duration: '272',
          listeners: '1879861',
          mbid: 'f1e57531-e0df-4b3e-938f-1ae30c5b1a11',
          url: 'https://www.last.fm/music/Arctic+Monkeys/_/Do+I+Wanna+Know%3F',
          streamable: {'#text': '0', fulltrack: '0'},
          artist: {
            name: 'Arctic Monkeys',
            mbid: 'ada7a83c-e3e1-40f1-93f9-3e73dbc9298a',
            url: 'https://www.last.fm/music/Arctic+Monkeys',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
          ],
          '@attr': {rank: '6'},
        },
        {
          name: 'Feel Good Inc.',
          duration: '221',
          listeners: '2415219',
          mbid: '5660558a-bfa7-416f-99d9-a34ca0a34515',
          url: 'https://www.last.fm/music/Gorillaz/_/Feel+Good+Inc.',
          streamable: {'#text': '0', fulltrack: '0'},
          artist: {
            name: 'Gorillaz',
            mbid: 'e21857d5-3256-4547-afb3-4b6ded592596',
            url: 'https://www.last.fm/music/Gorillaz',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
          ],
          '@attr': {rank: '7'},
        },
        {
          name: 'Last Nite',
          duration: '0',
          listeners: '1487952',
          mbid: '4ce968a0-4e52-40e3-9f77-1b726200a3c0',
          url: 'https://www.last.fm/music/The+Strokes/_/Last+Nite',
          streamable: {'#text': '0', fulltrack: '0'},
          artist: {
            name: 'The Strokes',
            mbid: 'f181961b-20f7-459e-89de-920ef03c7ed0',
            url: 'https://www.last.fm/music/The+Strokes',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
          ],
          '@attr': {rank: '8'},
        },
        {
          name: 'Karma Police',
          duration: '0',
          listeners: '2240949',
          mbid: '0790ba6c-e0b1-4891-b82f-b4db9a5a927f',
          url: 'https://www.last.fm/music/Radiohead/_/Karma+Police',
          streamable: {'#text': '0', fulltrack: '0'},
          artist: {
            name: 'Radiohead',
            mbid: 'a74b1b7f-71a5-4011-9441-d0b5e4122711',
            url: 'https://www.last.fm/music/Radiohead',
          },
          image: [
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'small',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            },
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'extralarge',
            },
          ],
          '@attr': {rank: '9'},
        },
      ],
      '@attr': {
        country: 'Mexico',
        page: '1',
        perPage: '10',
        totalPages: '893477',
        total: '8934762',
      },
    },
  },
};
