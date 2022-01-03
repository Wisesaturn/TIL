## 💻 프로그래밍 학습 내용 정리
### 📍 React (react-app)

#### 📖 1일차 (2022-01-03)
> 'React'의 전반적인 개념 및 설치 방법을 탐구하였습니다.
> 
> 개발 환경은 'Next.js', 'Gatsby'등이 아닌 학습용으로 단순 페이지 제작에 사용되는 'React App'을 이용하였습니다.
> 
> NodeJS를 먼저 설치 후 npm을 통해 개발환경을 구축하였고, 간단한 예제 파일인 'App.js'와 'index.js'를 살펴보아 React아 어떤 식으로 구동되는지 탐구하였습니다.
> 
> 기존 예제는 Component를 함수 형식으로 구현하였는데 앞으로 클래스 방식의 Component를 사용할 예정이므로 이를 변경해보았습니다.
> 
> 기존 예제에서 혼동을 야기하는 내용이 있을 수 있으므로 초기화를 시켜놓았습니다.

#### ⚙️ 1일차 세부 내용
+ 개발 환경 구축
  1. NodeJS 및 React설치 (http://nodsjs.org/)
      + Node.JS로 만들어진 프로그램을 쉽게 설치해주는 'npm'을 쓰기 위함입니다.
      + npm 설치 후 다음 명령어를 통해 설치 여부 확인이 가능합니다. 

        ``` npm -v ```
        
      + 다음 명령어를 통해 'React App'을 설치합니다.

        ``` npm install -g create-react-app ```
        
      + 마찬가지로, 'React App'이 잘 설치 되었는지 명령어를 통해 확인합니다.

        ``` create-react-app -V ```

  2. react-app을 통해 개발 환경 구축
      + cd를 통해 원하는 폴더에 Directory를 설정 후 다음 명령어를 통해 개발 환경을 구성합니다.
      + . 표시는 현재 Directory를 의미합니다.

        ``` create-react-app . ```
        
+ 샘플 웹앱 실행 (미리보기)
  + Terminal에 다음 명령어를 통해 실시간으로 반영되는 샘플 홈페이지를 확인할 수 있습니다.

      ``` npm run start ```
      
  + 'index.html'과 'index.js'를 기반으로 구성되며 import된 Component를 이 곳에서 불러옵니다.
  + ``` Ctrl+C ```를 통해 종료할 수 있으며, ``` http://localhost:3000 ``` 을 통해 확인할 수 있습니다.

+ Component 탐구
  + ``` import App from './App'; ``` 을 통해 Component를 불러올 수 있으며 내용은 ``` App.js ```에서 수정할 수 있습니다.
  + return 값은 하나의 tag 안에 포함되어야 합니다. 다음과 같은 예제는 오류가 발생합니다.
 
    ``` return Hello, React!!; ```
    
    ``` return <header></header><div className="App">Hello, React!!<div>; ```
    
  + 다음과 같이 수정을 하면 오류가 나지 않습니다.

    ``` JavaScript
      return (
        <div className="App">
          Hello, React!!
        </div>
      );
    ```
    
+ CSS 수정
    + 각각의 Component 속에는 import된 css가 있습니다. 즉, ``` App ``` Component를 불러온다면 ``` App.css ```도 함께 불러옵니다.
    + import는 다음과 같은 형태입니다.

      ``` Javascript
        import './App.css'
      ```
      
+ 배포 환경 파악 (build)
    +  다음 명령어를 통해 build 파일을 제작합니다.
    
       ``` npm run build ```
    
    +  기존 ``` index.html ``` 파일에서 불필요하게 용량을 차지하는 정보를 줄이기 위한 작업이 진행됩니다.
    + 다음 명령어를 통해 build 파일들을 기반으로 실 서버 환경을 조성합니다.

      ``` npm install -g serve ```
      
    + 다음 명령어를 입력하면 접속이 가능한 주소가 출력됩니다.

      ``` npm serve -s build ```
    
    
    
    
        
***
### ※ 참고자료
+ React 공부
  + 생활코딩! React 리액트 프로그래밍
+ 마크다운(README) 작성법
  + https://m.blog.naver.com/jooeun0502/221956294941
  + https://gist.github.com/ihoneymon/652be052a0727ad59601
