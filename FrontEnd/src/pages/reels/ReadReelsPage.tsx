import { useState, useRef } from 'react';
import Header from '@/components/layout/Header';
import ReelsVideo from '@/components/reels/ReelsVideo';
// import { getReelsList } from '@/api/reelsApi';
// type ReelsDataType = {
//     userPath: string;
//     musicPath: string;
//     id: number; 
//     path: string;
//     time: number;
//     score: number;
//     member_nickname: string;
//     song_title: string;
// }
const ReadReelsPage = () => {


  // useEffect( ()=> {
  //   const fetchData = async () => {
  //   try {
  //     const response = await getReelsList()
  //     console.log(response)
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }
  // fetchData()
  // } , [])

  // const [reelsData, setReelsData] = useState<ReelsDataType>()
  const [currentReelsIndex, setCurrentReelsIndex] = useState(0); // 현재 Reels의 인덱스 상태 추가
  const reelsData = [
    {
      userPath: "https://perfectfitssafy.s3.ap-northeast-2.amazonaws.com/video/%EC%9E%91%EC%9D%80+%EA%B2%83%EB%93%A4%EC%9D%84+%EC%9C%84%ED%95%9C+%EC%8B%9C%28Boy+With+Luv%29%28Feat.Halsey%29...__2024-04-02T05-12-09.177Z",
      musicPath: "https://perfectfitssafy.s3.ap-northeast-2.amazonaws.com/music/%EC%9E%91%EC%9D%80%20%EA%B2%83%EB%93%A4%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%8B%9C%28Boy%20With%20Luv%29%28Feat.Halsey%29...__2024-04-02T05-12-09.177Z",
      id: 22,
      path: "www",
      time: 5119,
      score: 0.3323460473044961,
      member_nickname: "테스트 616트",
      song_title: "Home",
    },
    {
      userPath: "https://perfectfitssafy.s3.ap-northeast-2.amazonaws.com/video/%EC%9E%91%EC%9D%80+%EA%B2%83%EB%93%A4%EC%9D%84+%EC%9C%84%ED%95%9C+%EC%8B%9C%28Boy+With+Luv%29%28Feat.Halsey%29...__2024-04-02T05-12-09.177Z",
      musicPath: "https://perfectfitssafy.s3.ap-northeast-2.amazonaws.com/music/%EC%9E%91%EC%9D%80%20%EA%B2%83%EB%93%A4%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%8B%9C%28Boy%20With%20Luv%29%28Feat.Halsey%29...__2024-04-02T05-12-09.177Z",
      id: 22,
      path: "www",
      time: 5119,
      score: 0.3323460473044961,
      member_nickname: "문신웅",
      song_title: "거의 아이유..",
    },
    {
      userPath: "https://perfectfitssafy.s3.ap-northeast-2.amazonaws.com/video/%EC%9E%91%EC%9D%80+%EA%B2%83%EB%93%A4%EC%9D%84+%EC%9C%84%ED%95%9C+%EC%8B%9C%28Boy+With+Luv%29%28Feat.Halsey%29...__2024-04-02T05-12-09.177Z",
      musicPath: "https://perfectfitssafy.s3.ap-northeast-2.amazonaws.com/music/%EC%9E%91%EC%9D%80%20%EA%B2%83%EB%93%A4%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EC%8B%9C%28Boy%20With%20Luv%29%28Feat.Halsey%29...__2024-04-02T05-12-09.177Z",
      id: 22,
      path: "www",
      time: 5119,
      score: 0.3323460473044961,
      member_nickname: "문신웅",
      song_title: "거의 dh,,,,..",
    },
    // 다른 Reels들의 경로를 필요에 따라 추가할 수 있습니다
  ];

  const touchStartRef = useRef(0);

  const handleTouchStart = (e :React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e :React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientY;
    if (touchEnd > touchStartRef.current) {
      // 스와이프 아래로 이동
      setCurrentReelsIndex(prevIndex => prevIndex === 0 ? reelsData.length - 1 : prevIndex - 1); // 이전 Reels의 인덱스로 변경
    } else if (touchEnd < touchStartRef.current) {
      // 스와이프 위로 이동
      setCurrentReelsIndex(prevIndex => (prevIndex + 1) % reelsData.length); // 다음 Reels의 인덱스로 변경
    }
  };

  return (
    <div>
      <Header title="릴스" state={["back", "close"]} page="mainchart" />
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ touchAction: 'none' }}>
        {/* onTouchStart 및 onTouchEnd 이벤트를 사용하여 스와이프 동작 감지 */}
        <ReelsVideo data={reelsData[currentReelsIndex]} userPath={reelsData[currentReelsIndex].userPath} musicPath={reelsData[currentReelsIndex].musicPath} index={currentReelsIndex}/>
      </div>
    </div>
  );
};

export default ReadReelsPage;
