import { useState, useEffect} from "react";
import PublicArtCard from './PublicArtCard';
import './PublicArtMain.css';

export default function PublicArt() {
  // 부산공공조형물 전체 데이터
  const [tdata, setTdata] = useState([]);
  const [guname, setGuname] = useState([]);
  const [opTags, setOpTags] = useState([]);
  const [selectedGu, setSelectedGu] = useState("all"); // 선택된 구
  const [cardTags, setCardTags] = useState([]);

  // 실제 fetch
  const getData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setTdata(data.getPublicArtInfo.body.items.item)
      })
      .catch(err => console.log(err));
  };

  // 부산공공조형물 데이터 fetch
  useEffect(() => {
    let url = `https://apis.data.go.kr/6260000/PublicArt/getPublicArtInfo?`;
    url = url + `serviceKey=${process.env.REACT_APP_APIKEY}`;
    url = url + `&numOfRows=612&resultType=json`;

    getData(url);
  }, []);

  // 구정보 만들기
  useEffect(() => {
    if (!tdata.length) return;

    let tm = tdata.map(item => item.codeName);
    tm = new Set(tm);
    tm = [...tm].sort();
    setGuname(tm);

  }, [tdata]);

  // 선택된 구의 카드 표시
  useEffect(() => {
    if (!tdata.length || selectedGu === "all") {
      // 전체 카드 초기 표시
      let tm = tdata.map(item =>
        <PublicArtCard id={item.artId}
          imgUrl={item.imgSrc}
          title={item.title}
          ptitle={item.purpose.replace(/[^0-9a-zA-Z가-힣[\]()\s]/g, '').replace(/BR/g, '')}
          ktag={item.areaCode}
          items = {item}/>
      );
      setCardTags(tm);
    } else {
      let tm = tdata.filter(item => item.codeName === selectedGu)
        .map(item =>
          <PublicArtCard key={item.artId}
            imgUrl={item.imgSrc}
            title={item.title}
            ptitle={item.purpose.replace(/[^0-9a-zA-Z가-힣[\]()\s]/g, '').replace(/BR/g, '')}
            ktag={item.areaCode} />
        );
      setCardTags(tm);
    }
  }, [selectedGu, tdata]);

  // 선택된 구 변경
  const handleSelectGu = (gu) => {
    setSelectedGu(gu);
  }

  // 구 버튼 생성
  useEffect(() => {
    if (!guname.length) return;

    const allButton = (
      <button
        key="all"
        onClick={() => handleSelectGu("all")}
        className={`button-style`}
      >
        #전체
      </button>
    );

    const guButtons = guname.map(item => (
      <button
        key={item}
        onClick={() => handleSelectGu(item)}
        className={`button-style`}
      >
        #{item}
      </button>
    ));

    const allButtons = [allButton, ...guButtons];

    const dividedTags = [];
    const chunkSize = 8;
    for (let i = 0; i < allButtons.length; i += chunkSize) {
      dividedTags.push(allButtons.slice(i, i + chunkSize));
    }

    setOpTags(dividedTags);

  }, [guname]);

  // 데이터 중 "artId"가 "12"인 항목 필터링하여 제거
  useEffect(() => {
    if (!tdata.length) return;
    const filteredData = tdata.filter(item => item.artId !== "12");
    if (filteredData.length !== tdata.length) {
        setTdata(filteredData);
    }
  }, [tdata]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <br /><br />
      <label htmlFor="gu" className="title">
        부산광역시 공공조형물 정보
      </label>
      <br /><br />
      <div className="flex flex-wrap w-2/3 justify-center items-center">
        {opTags.map((chunk, index) => (
          <div key={index} className="flex flex-wrap justify-center">
            {chunk}
          </div>
        ))}
      </div>
      <br /><br />

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2">
          {cardTags}
        </div>
      </div>

    </div>
  );
}
