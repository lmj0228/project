import './PublicArtCard.css';
import noImage from '../images/no image.png' ;
import { useNavigate } from 'react-router-dom';

export default function PublicArtCard({ imgUrl, title, ptitle, ktag, items }) {
    // 상대 URL을 절대 URL로 변환
    const absoluteImgUrl = imgUrl.startsWith('http') ? imgUrl : `http://${imgUrl}`;

    const navigate = useNavigate() ; 

    const handleCardClick = () => {
        // 새 창으로 이동하는 코드
        navigate(`/publicArt`, {state: items});
        console.log(items)
    };

    const handleError = (e) => {
        e.target.src = noImage;
        console.log(title);
    };

    return (
        <div className="public-art-card flex justify-between max-w-md overflow-hidden cursor-pointer"
             onClick={handleCardClick}>
            <img className="public-art-image" src={absoluteImgUrl} alt={title} onError={handleError}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{ptitle}</p>
            </div>
            <div className="px-5 py-2 inline-block bg-gray-200 rounded-full text-sm font-semibold 
                           text-gray-700 mr-2 mb-2">
            {ktag}
            </div>
        </div>
    );
};
