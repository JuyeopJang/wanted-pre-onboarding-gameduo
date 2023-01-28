# 게임듀오 기업 과제

## 과제 소개
게임 유저가 보스 레이드 게임에 참여할 수 있고 자신의 기록과 랭킹을 확인할 수 있도록 기능을 구현하는 과제

## 요구 사항
- 1. 게임에 참여할 유저를 생성할 수 있습니다.
    - 각 유저는 중복되지 않는 userId를 가집니다.
- 2. 유저는 자신의 보스 레이드 총 점수와 참여 기록을 조회할 수 있습니다.
- 3. 보스 레이드에 입장 가능 여부를 조회할 수 있습니다.
- 4. 유저는 보스 레이드 게임을 시작할 수 있습니다.
    - 반드시 한 번에 한 명의 유저만 보스 레이드를 진행할 수 있습니다.
- 5. 게임이 끝나면 보스 레이드를 종료합니다.
- 6. 보스 레이드 랭킹 조회
    - 유저별 보스 레이드 랭킹을 점수를 기준으로 내림차순 조회할 수 있습니다. 


## 담당 역할 및 요구 사항 분석
- 보스 레이드 게임 시작 기능 구현
    - 누군가 게임을 진행 중이라면 게임을 시작할 수 없다.
    - 보스 레이드는 한 번에 한 명의 유저만 보스 레이드를 진행할 수 있으므로 다중의 유저가 동시에 시작하려고 할 때 [동시성 처리](https://velog.io/@zooyeop/%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EB%B0%B1%EC%97%94%EB%93%9C-%EC%BD%94%EC%8A%A4-3%EC%A3%BC%EC%B0%A8-%ED%9B%84%EA%B8%B0)가 필요하다.

## 사용 기술
Node.js, Nest.js, MySQL, Typescript, TypeORM

## RUN
```markdown
$ npm i
$ npm run start
``` 
## 환경변수 설정
```markdown
// mysql
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
```

## RESTful API Docs
[게임듀오 기업 과제 API 문서](https://shininggiver.gitbook.io/gameduo/reference/api-reference)

## ERD
<img width="875" alt="스크린샷 2022-07-15 오후 2 09 33" src="https://user-images.githubusercontent.com/85995802/179514460-98bb7172-9d54-4d9d-a2f4-2f071dfa04ed.png">
