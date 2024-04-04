export type MusicInfoType = {
  songTitle: string;
  artist: string;
  genre: string;
  songUrl: string;
  songThumbnail: string;
  songReleaseDate: string;
  songLength: string;
  myListDisplay: boolean;
  songView: number;
};

export type ReelsDataType = {
  id: number; // 릴스 아이디
  userPath: string;
  audioPath: string;
  path: string;
  time: number;
  score: number;
  memberNickname: string;
  songTitle: string;
  follow: boolean;
  memberId: number; // userId
};

export type Song = {
  songId: number;
  songTitle: string;
  artist: string;
  genre: string;
  songUrl: string;
  songThumbnail: string;
  songReleaseDate: string;
  songLength: string;
  myListDisplay: boolean;
  songPitch: number | null;
  mrPath: string | null;
  songView: number;
  song_thumbnail: string;
  song_title: string;
  artist_name: string;
};

export type PreferChartSong = {
  id: number;
  song_title: string;
  artist_name: string;
  genre_name: string;
  song_url: string;
  song_origin_url: string;
  song_pitch: null | string;
  song_release_date: string;
  song_view: number;
  song_thumbnail: string;
  mr_path: null | string;
};

// 참가자가 없는 duet 리스트 조회
export type DuetListData = {
  id: number;
  name: string;
  uploaderUserPath: string;
  uploaderAudioPath: string;
  uploaderId: number;
  uploaderNickname: string;
  uploaderImage: null | string;
  createdAt: string;
  songId: number;
  songMrPath: null | string;
  songTitle: string;
  artistName: string;
  songThumbnail: string;
};


export type videoInfoType = {
  songId: number;
  time: number;
  userPath: string;
  audioPath: string;
};

export type SoloVideoType = {
  id: number;
  name: string;
  songId : number
  userPath: string;
  audioPath: string;
  createdAt: string;
  songTitle: string;
  artistName: string;
  songThumbnail: string;
};

// 완성 듀엣
export type DuetVideoType = {
  artistName: string;
  createdAt: string;
  id: number;
  name: string;
  participantAudioPath: string;
  participantImage: string;
  participantNickname: string;
  participantUserPath: string;
  songId: number;
  songThumbnail: string;
  songTitle: string;
  uploaderAudioPath: string;
  uploaderImage: string;
  uploaderNickname: string;
  uploaderUserPath: string;}


export type UnFinishedDuetTyep = {
  id: number;
  name: string;
  uploaderUserPath: string;
  uploaderAudioPath: string;
  uploaderId: number;
  uploaderNickname: string;
  uploaderImage: string | null;
  createdAt: string;
  songId: number;
  songMrPath: string | null;
  songTitle: string;
  artistName: string;
  songThumbnail: string;
}