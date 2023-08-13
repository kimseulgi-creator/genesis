# Genesis

내일배움캠프 6기 3조 팀프로젝트 23.08.07 - 23.08.14 (7일간)

<br>

## 프로젝트 소개

**나랑 별 보러 가지 않을래??**

![readme1](https://github.com/kimseulgi-creator/genesis/assets/78592995/d866dadf-906e-4341-82c6-4784b39f376f)

1. 별자리를 역동적인 UI와 함께 재미있게 소개해주는 서비스입니다.<br>
2. 매달 우주에서 일어나고 있는 이벤트가 캘린더에 알기 쉽게 표시되어 있습니다.<br>
3. 슈팅게임과, 별자리 맞추기 게임을 통해 별자리에 대한 흥미도를 높여줍니다.

<br>

## 구현 기능

- 스크롤모션, react-parallax 이용한 UI 구현
- 캘린더 API
- 카카오톡 공유하기 API

<br>

## 기술스택

  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white"/>
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat&logo=styledcomponents&logoColor=white" />
	<img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white" />
	<img src="https://img.shields.io/badge/figma-F24E1E?style=flat&logo=figma&logoColor=white" />
	<img src="https://img.shields.io/badge/git-F05032?style=flat&logo=git&logoColor=white" />
	<img src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white" />

<br>

## 라이브러리

### JSON-SERVER

    Json-server는 빠르면서 가상Mock서버를 가장 손쉽게 만들 수 있는 장점이 가장 독보적이였습니다.
    더미테이터 생성도 정말 간편하며, 사용량도 많아 커뮤니티가 활성화되어있어 오류가 생겼을 경우 빠르게 답을 얻을 수 있어서 선택하게 되었습니다.

### react-spinners

    React에 통합 되어 있어서 React를 사용할때 작업이 간편하며 다양한 스피너 디자인을 손쉽게 다룰수 있어서 CSS를 만들어서 사용하는 것보다 간편해서 사용하게 되었습니다.

### react-scroll

    react-scroll-parallax
    스크롤 페럴렉스를 쉽게 사용할 수 있게끔 하는 라이브러리입니다.
    사용방법이 간편하거니와 사용성이 높습니다.
    다른 라이브러리와 비교해서 쉬운 난이도에 비해 뛰어난 성능을 발휘합니다 :D

    react-scroll-motion
    스크롤 애니메이션을 보다 쉽게 넣을 수 있게끔 하는 라이브러리 입니다.
    간단한 props로 모든 것을 컨트롤하며 사용방법이 간단하면서 뛰어난 애니메이션을 제공합니다.
    아쉬운 부분(커스터마이징이 간단하지 않음)이 없지 않아 있지만 충분히 다른 라이브러리보다 사용방법이 쉬운 것이 선택 이유입니다.

### tanstack-query

    실시간으로 데이터를 감지하고 업데이트할 수 있는 기능은 정말이지 강력하고 도전적입니다.
    상태 변화를 감지하고 자동으로 업데이트 하는 부분과 더불어 별도의 수동 업데이트 로직을 구현할 필요가 없이 데이터 변경 사항을 간편히 할 수 있음은 우리가 선택한 주된 강력한 이유입니다.

    tanstack query는 다른 서버클라이언트 라이브러리와 다르게 보일러플레이팅이 간소화된 점도 우리가 선택한 이유입니다.

### framer-motion

    컴포넌트에 입력을 해 놓으면 재 사용이 가능하여 작업을 간편하게 해주며 관련된 자료들이 많아 사용을 유익하게 해주기 때문에 사용하게 되었습니다.

### react-xml-parser

    XML 데이터를 자바스크립트로 사용하기 편하게 해주면서 API를 가지고 올 때 작업을 유용하게 해주며 XML에 관해 커뮤니티와 호환성이 좋아서 이 라이브러리를 사용하였습니다.

<br>

## API Table

| Number | Method | URL           | Description          | Request                                                                                                                                                                          | Response |
| ------ | ------ | ------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 1      | `GET`  | /api/list     | 별자리 내려받기      | {id:number, img: ‘이미지’, starImg"별자리 이미지", title: ‘ 제목’, description: ‘설명’, story: ‘관련된 이야기’, period: ‘나타나는 시기’,birthday: "탄생 별자리", season: ‘계절’} |          |
| 2      | `GET`  | /api/calender | 천문 이벤트 불러오기 |                                                                                                                                                                                  |          |
| 3      | `GET`  | /api/quiz     | 퀴즈 불러오기        | { id: '퀴즈id', img: '별자리 image 경로', answer: '퀴즈 정답', wrongAnswer : '퀴즈 오답', hint : '퀴즈힌트' }                                                                    |          |

<br>

## 공통 컴포넌트 소개

**Button**<br>
모든 스타일과 기능을 구현할 수 있는 버튼

<br>

## 주의사항

react-xml-parser import 오류발생시 아래 내용을 추가해주세요!<br>

- Node-modules > @types 경로에 react-xml-parser 폴더 생성
- index.d.ts 파일 생성 후 declare module 'react-xml-parser' 입력 및 저장

<br>

## 프로젝트 시연 영상
