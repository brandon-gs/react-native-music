export interface Track {
  name: string;
  duration: string;
  listeners: string;
  mbid: string;
  url: string;
  '@attr': {
    rank: string;
  };
  streamable: {
    '#text': string;
    fulltrack: string;
  };
  artist: {
    name: string;
    mbid: string;
    url: string;
  };
  image: {
    '#text': string;
    size: string;
  }[];
}

export interface TopTrackDataResponse {
  tracks: {
    '@attr': {
      country: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
    track: Track[];
  };
}
