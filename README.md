# WhaleVoca

## 프로젝트 소개

일본어 상용한자와 단어를 앱 하나로 종결시키자는 취지로 기획된 일본어 학습 앱 프로젝트입니다.
일본 상용한자 2,136자와 관련 단어들을 효율적으로 암기할 수 있도록 서비스가 구성되어 있습니다.

단어를 한자별로 묶어서 플립 카드(Flip Card) 형태로 빠르게 학습할 수 있도록 기획했고, 
사용자의 학습 회독을 한 눈에 파악할 수 있습니다.

또한 한자를 학년별로 분리하여 상대적으로 쉬운 1학년 한자부터 단계별로 학습할 수 있도록 구성하였고,
한자의 모양, 한국어의 음과 뜻, 일본어 음독과 같은 정보들을 각각 확인해 볼 수 있어 한자의 분환 순환 학습이 가능하므로
보다 빠르고 효율적인 암기 효과를 기대할 수 있습니다.


## 기술 스택


### - PLATFORMS & LANGUAGE - APP
![React Native](https://img.shields.io/badge/React%20Native-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white)
![Native base](https://img.shields.io/badge/Nativebase-65ADF1.svg?&style=for-the-badge&logo=NativeScript&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57.svg?&style=for-the-badge&logo=SQLite&logoColor=white)

### - PLATFORMS & LANGUAGE - Dashboard
![Spring](https://img.shields.io/badge/Spring-6DB33F.svg?&style=for-the-badge&logo=Spring&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F.svg?&style=for-the-badge&logo=Spring%20Boot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F.svg?&style=for-the-badge&logo=Spring%20Security&logoColor=white)
![Spring Data JPA](https://img.shields.io/badge/Spring%20Data%20JPA-6DB33F.svg?&style=for-the-badge&logo=Jameson&logoColor=white)
![Apache Tomcat](https://img.shields.io/badge/Apache%20Tomcat-F8DC75.svg?&style=for-the-badge&logo=Apache%20Tomcat&logoColor=white)

![Thymeleaf](https://img.shields.io/badge/Thymeleaf-005F0F.svg?&style=for-the-badge&logo=Thymeleaf&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white)
![jQuery](https://img.shields.io/badge/jQuery-0769AD.svg?&style=for-the-badge&logo=jQuery&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545.svg?&style=for-the-badge&logo=MariaDB&logoColor=white)

### - COLLABORATION & TOOLS

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?&style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ%20IDEA-0071C5.svg?&style=for-the-badge&logo=IntelliJ%20IDEA&logoColor=white)
![Android Studio](https://img.shields.io/badge/Android%20Studio-3DDC84.svg?&style=for-the-badge&logo=Android%20Studio&logoColor=white)

![Git](https://img.shields.io/badge/Git-F05032.svg?&style=for-the-badge&logo=Git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37.svg?&style=for-the-badge&logo=Postman&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000.svg?&style=for-the-badge&logo=Notion&logoColor=white)


## 프로젝트 구조

## ERD(Entity Relationship Diagram)

![ERD_8](https://github.com/coldrain-f/whale-voca/assets/102038572/b9f3afa8-950c-4164-b752-f1122fc324ab)


## Git Flow 브랜치 관리 전략

Github-Flow 전략에 따라 `master`, `feature` 브랜치를 사용합니다.

![Branch 3차](https://github.com/coldrain-f/whale-voca/assets/102038572/5e1d771e-dfe8-4ed2-b922-b828ef234353)


  
✔️ master : 배포 단계에서 사용하는 브랜치  

✔️ feature/* : 기능을 개발하는 브랜치. 이슈 번호를 기재하고 해당 브랜치에서 개발을 진행합니다.
  

## Commit convention 

```
Type: 제목 [#이슈 번호]
```

|  Type      |  Descrption                                                                    |
|:-----------|:-------------------------------------------------------------------------------|
|  Feat      |  새로운 기능 추가 및 변경                                                      |
|  Fix       |  버그 수정                                                                     |
|  Docs      |  문서 수정                                                                     |
|  Style     |  코드 포맷팅, 세미콜론 누락 등 동작에 영향을 주는 코드 변경이 없는 경우         |
|  Refactor  |  실제 기능 변경은 없지만 코드를 수정하는 경우, 파일/폴더 이름 및 위치 변경      |
|  Test      |  테스트 코드 관련 모든 동작                                                    |
|  Init      |  초기 프로젝트 설정                                                            |
|  Chore     |  빌드 업무 · 패키지 매니저 · 주석 수정, 불필요 코드 및 Import 제거 및 기타 등등 |

☑️ Type의 첫 글자는 대문자로  
☑️ 제목은 한글을 기본으로 사용    
☑️ 본문과 꼬리말은 선택사항  
☑️ 이모티콘 미사용  
