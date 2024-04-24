# MEME-MAKER
> 그림판 + 이미지 첨부 기능
> JS의 canvas API 적용
> ![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white
) ![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white
) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white
)

---
### 화면 및 기능
![screencapture-127-0-0-1-5501-2024-04-23-16_32_50](https://github.com/jserin/meme-maker/assets/126732429/74f2b4ff-a278-4e03-aeec-342c1f2468f0)
![image](https://github.com/jserin/meme-maker/assets/126732429/9324ec92-477f-41a9-88f5-3f71f7683876)
- 색상 선택 input/ 임의로 지정한 색상 목록
- 기본 두께 5px, lineCap = "round", 기본 색상 black

![image](https://github.com/jserin/meme-maker/assets/126732429/abf37d4e-fa59-444d-92b8-f8634ded3945)
![image](https://github.com/jserin/meme-maker/assets/126732429/cfbcfb46-79b2-461b-87ed-55c520b210c1)
![image](https://github.com/jserin/meme-maker/assets/126732429/c1fe0d35-5a10-4f08-b027-47d34b17a906)
- 펜 두께, 펜/페인트 버튼, 전체 지우기 버튼, 지우개 버튼
- 펜/페인트, 지우개 on-off 화면 표시
- 지우개 off 시 이전 펜 설정으로 복귀
- 지우개 on 하고 다른 버튼 눌렀을때 off (해야함)

![image](https://github.com/jserin/meme-maker/assets/126732429/f5168347-f8f9-4574-abbb-14d6b15fdba3)
![image](https://github.com/jserin/meme-maker/assets/126732429/8edb7c8c-a8c3-4a26-8adc-9596a85de9eb)
- 그림을 내 컴퓨터에 png 파일로 다운로드
- 컴퓨터에 있는 이미지 파일 업로드하고 화면 표시
- input에 문자를 입력하고 캔버스 더블클릭시 해당 좌표에 추가

---
### 기능 구현 기록
#### 이미지 파일 추가
```html
// html
...
<label for="file"> ADD FILE</label>
<input type="file" accept="image/*" id="file" hidden>
...
```
- input file이 이미지 파일만 받을 수 있게 accept 속성으로 제한

```JavaScript
// js
const fileInput = document.getElementById("file");

fileInput.addEventListener("change", onFileChange);

function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;

    image.onload = function() {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = "";
    }
}
```
- 1개의 이미지 파일만 업로드
- input 값이 변경되었을 때 선택된 파일의 url을 생성해서 이미지 생성
- drawImage 메소드를 사용해 캔버스 전체에 표시
- input의 값 비움

#### 파일 저장
```html
// html
...
<button id="save">SAVE</button>
...
```

```JavaScript
// js
const saveBtn = document.getElementById("save");

saveBtn.addEventListener("click", onSaveClick);

function onSaveClick() {
    const url =  canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
}
```
- canvas 내용을 dataUrl로 생성
- a 태그 다운로드 속성 추가하여 생성
- click 메소드 추가해야 파일 다운로드 실행됨

---
### 추가(할 수도 있는) 기능
- 이미지 위치 조정
- 폰트, 글자 사이즈 변경
- 마우스 포인터 변경
- undo, redo 기능
  
