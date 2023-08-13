# Genesis

내일배움캠프 6기 3조 팀프로젝트 23.08.07 - 23.08.14 (7일간)

<br>

## 프로젝트 소개

"나랑 별 보러 가지 않을래??"

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

## API Table

| Number | Method | URL           | Description          | Request                                                                                                                                                                          | Response |
| ------ | ------ | ------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 1      | `GET`  | /api/list     | 별자리 내려받기      | {id:number, img: ‘이미지’, starImg"별자리 이미지", title: ‘ 제목’, description: ‘설명’, story: ‘관련된 이야기’, period: ‘나타나는 시기’,birthday: "탄생 별자리", season: ‘계절’} |          |
| 2      | `GET`  | /api/calender | 천문 이벤트 불러오기 |                                                                                                                                                                                  |          |
| 3      | `GET`  | /api/quiz     | 퀴즈 불러오기        | { id: '퀴즈id', img: '별자리 image 경로', answer: '퀴즈 정답', wrongAnswer : '퀴즈 오답', hint : '퀴즈힌트' }                                                                    |          |

<br>

## 공통 컴포넌트 소개

Button
모든 스타일과 기능을 구현할 수 있는 버튼

<br>

## 주의사항

react-xml-parser임포트 오류발생시 아래 내용을 입력해주세요!<br>
Node-modules > @types > react-xml-parser > index.d.ts > declare module 'react-xml-parser'

<br>

## 프로젝트 시연 영상
