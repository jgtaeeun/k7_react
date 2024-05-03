# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



























index.html <div id='root'></div>
index.js         import App from './App';       <App/>
App.js          function App(){
                    return();
                   }
                  export default App;

프레그먼트 <>...</>
하나의  요소 반환
컴포넌트명은 대문자로 시작
카멜표기법
class속성은 className=''
주석 {/**/}
종료태그 예)<Hello />
return( {변수명}  );
======================================================

import cimg from './colock.png';  //img파일 02폴더에 넣기

function MyClockImage(){
    return(
        <div>
            <img src={cimg} alt="시계" className='App-logo'/>    //className='App-logo'는 애니메이션 준 것
        </div>
    );
}
export default MyClockImage;
------------------------------------------
function MyClockTime(){
    const now = new Date();                                    // Date() 객체
                                                                         //함수body에서 변수 만든다.
    return (                                                            //return내부는 태그로 구성되어 있고, 변수를 사용할 때는 중괄호로 묶어준다.
        <div>
        <p>현재시각: {now.toLocaleTimeString()}</p> 
        
        </div>
    );
}
export default MyClockTime;
----------------------------------- 
import './MyClockTime.css';                           //.div1{color : yellow;}
 
function MyClockTime(){
    const now = new Date();                      
    const nowStr =now.toLocaleTimeString();
    const gubun= nowStr.substring(0,2);
   // let divStyle;
   // if (gubun=='오전') divStyle="div1";
   // else divStyle="div2";

    
    return (
       // <div className={divStyle}>현재시각: {nowStr}</div>
     <>
       {
        (gubun ==='오전') ?<div className='div1'>현재시각: {nowStr}</div>    //삼항연산자
                        :<div className='div2'>현재시각: {nowStr}</div> 
       }

    <div className={gubun ==='오전'? "div1" :"div2"}>
    {nowStr}

    </div>
    </>
    );
}
export default MyClockTime;
------------------------------------------
import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";
function MyClock(){
    return(
        <header className="App-header">
        <MyClockImage />
        <MyClockTime />
        </header>
    );


}
export default MyClock;
------------------------------------------

import './App.css';                                           //App.js의 import css=>import한 MyClock부터 내부(MyClockTime,MyClockImage)까지 css 먹힌다.
import MyClock from './02/MyClock';                //App. css는 App.js,  MyClock.js, MyClockTime.js, ,MyClockImage.js 아무 곳에 넣어도 다 먹힌다.(한페이지 style)

function App() {
  return (
    <div className="App">
      <MyClock />
    </div>
  );
}

export default App;
------------------------------------------
<div style={{color:"red", fontWeight: "bold"}}>                               //; 떼기 , font-weight는 카멜표기법, 오브젝트로 표기
    {nowStr}

    </div>


import style from './My.module.css';
<div className={style.c1}>{nowStr}</div>    // My.module.css 만들고 그곳에서 .c1{color : white;}한다.
    {nowStr}

    </div>
------------------------------------------
VSCODE에서 ES7 설치  / rfce치면 자동적으로 함수 바디 생성된다.

npm종료 : 컨솔에 커서 있는채로 ctrl+c 한다. y한다.

Tailwindcss 설치
PS C:\k7_react> npm install -D tailwindcss
npx tailwindcss init
C:\k7_react\tailwind.config.js 의 content에  "./src/**/*.{js,jsx,ts,tsx}"

index.css에 아래내용 적기
@tailwind base;
@tailwind components;
@tailwind utilities;
------------------------------------------
<div className="w-full text-9xl text-purple-400 bg-red-50"> //글자크기, 글자색깔, 배경색
------------------------------------------

max-w-screen-lg  마우스클릭해보면 1024px이 최대임 확인 가능
------------------------------------------
react icon
import복사, 코드 원하는 곳에 넣기
