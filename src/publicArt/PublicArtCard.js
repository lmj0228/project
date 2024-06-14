import './PublicArtCard.css';

export default function PublicArtCard({ imgUrl, title, ptitle, ktag }) {
    // 상대 URL을 절대 URL로 변환
    const absoluteImgUrl = imgUrl.startsWith('http') ? imgUrl : `http://${imgUrl}`;

    if (ktag.includes(',')) {
        ktag = ktag.split(',').map(item =>
            <span key={item}
                  className="inline-block bg-gray-200 
                            rounded-full px-3 py-1 
                            text-sm font-semibold 
                            text-gray-700 mr-2 mb-2">
                {item}
            </span>
        )
    } else {
        ktag = <span 
                className="inline-block bg-gray-200 
                          rounded-full px-3 py-1 
                      text-sm font-semibold 
                      text-gray-700 mr-2 mb-2">
              {ktag}
            </span>
    }

    return (
        <div className="public-art-card flex justify-between
                        max-w-md overflow-hidden">
            <img className="public-art-image" src={absoluteImgUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                  {ptitle}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {ktag}
            </div>
        </div>
    )
}

