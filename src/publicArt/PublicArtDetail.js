import { useLocation } from 'react-router-dom';

export default function PublicArtDetail() {
  const location = useLocation();
  const items = location.state;

  // items 객체에서 필요한 값 추출
  const { imgSrc, title, purpose, content } = items;

  // 상대 URL을 절대 URL로 변환
  const absoluteImgUrl = imgSrc.startsWith('http') ? imgSrc : `http://${imgSrc}`;

  return (
    <div className="public-art-card flex justify-between max-w-md">
      <img src={absoluteImgUrl} alt={title} />

      <div className="flex flex-col items-center text-center 
                            border border-gray-300 p-4 bg-white">
        <h2>{title}</h2>
      </div>

      <div className="flex flex-col items-center text-center 
                            border border-gray-300 p-4 bg-white">
        <p>{purpose}</p>
      </div>

      <div className="flex flex-col items-center text-center 
                            border border-gray-300 p-4 bg-white">
        <p>{content}</p>
      </div>
    </div>
  );
}

