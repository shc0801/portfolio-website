import {
  AwardIcon,
  ChatIcon,
  EducationIcon,
  LicenseIcon
} from '../assets/icon';

import {
  DdtImg,
  GwangjuImg,
  KyeonggiImg,
  MsgImg,
  SchederImg,
  SeoulImg,
  SwjbImg,
  VtdImg,
  ZbImg
} from '../assets/images';

export const CarrerData = {
  data: [
    {
      name: "학력사항",
      ename: "Education",
      icon: EducationIcon,
      data: [
        {
          year: 2019,
          month: "03",
          text: "수원정보과학고등학교 입학"
        },
        {
          year: 2022,
          month: "01",
          text: "수원정보과학고등학교 졸업 예정"
        }
      ]
    },
    {
      name: "교내활동",
      ename: "School activities.",
      icon: ChatIcon,
      data: [
        {
          year: 2019,
          month: "05",
          text: "(250기) 모던 웹 디자인"
        },
        {
          year: 2019,
          month: "08",
          text: "전공심화동아리 ( 기능반 ) 가입"
        },
        {
          year: 2019,
          month: "11",
          text: "자바 기반 웹 프로그래밍"
        },
        {
          year: 2019,
          month: "11",  
          text: "node.js 어플리케이션 개발"
        },
        {
          year: 2019,
          month: "11",
          text: "(251기) 모던 웹 디자인"
        },
        {
          year: 2020,
          month: "07",
          text: "ICT 산업과정 (자바)"
        },
        {
          year: 2020,
          month: "08",
          text: "인공지능(AI) 기초 캠프"
        },
        {
          year: 2020,
          month: "11",
          text: "NCS기반 웹개발 전문가 양성 과정"
        },
        {
          year: 2020,
          month: "10",
          text: "(252기) 모던 웹디자인"
        },
        {
          year: 2021,
          month: "04",
          text: "수정과 프로젝트 가입"
        }
      ]
    },
    {
      name: "수상경력",
      ename: "Award",
      icon: AwardIcon,
      data: [
        {
          year: 2019,
          month: "12",
          text: "아주대학교 AJOU SOFTCON 장려상"
        },
        {
          year: 2020,
          month: "12",
          text: "아주대학교 AJOU SOFTCON 인기상"
        },
        {
          year: 2021,
          month: "04",
          text: "기능경기대회 웹디자인 및 개발 부문 장려상"
        }
      ]
    },
    {
      name: "자격증",
      ename: "License",
      icon: LicenseIcon,
      data: [
        {
          year: 2019,
          month: "09",
          text: "검퓨터활용능력 2급"
        },
        {
          year: 2019,
          month: "12",
          text: "정보처리기능사"
        },
        {
          year: 2020,
          month: "07",
          text: "웹디자인기능사"
        },
      ]
    },
  ]
};

export const LabelData = [
  {
    lat: -5,
    lng: -33,
    width: "500px",
    label: "전국기능경기대회-서울",
    img: SeoulImg,
    url: "https://github.com/shc0801/2020-Seoul",
  },
  {
    lat: -15,
    lng: 15,
    width: "500px",
    label: "전국기능경기대회-경기",
    img: KyeonggiImg,
    url: "https://github.com/shc0801/2020-Kyeonggi",
  },
  {
    lat: 20,
    lng: 20,
    width: "500px",
    label: "전국기능경기대회-광주",
    img: GwangjuImg,
    url: "https://github.com/shc0801/2020-Gwangju",
  },
  {
    lat: 35,
    lng: -23,
    width: "500px",
    label: "지방기능경기대회",
    img: ZbImg,
    url: "https://github.com/shc0801/2021-local",
  },
  {
    lat: 26,
    lng: 250,
    width: "800px",
    label: "MSG.GG",
    img: MsgImg,
    url: "https://github.com/msg-gg",
  },
  {
    lat: -8,
    lng: 150,
    width: "800px",
    label: "두둥탁",
    img: DdtImg,
    url: "https://github.com/Do-Dong-Tak",
  },
  {
    lat: 40,
    lng: 170,
    width: "800px",
    label: "수정과",
    img: SwjbImg,
    url: "https://github.com/swjb-sinamon",
  },
  {
    lat: 29.1,
    lng: 80,
    width: "800px",
    label: "스케더",
    img: SchederImg,
    url: "https://github.com/shc0801/schedule-calendar",
  },
  {
    lat: -30.1,
    lng: 90,
    width: "800px",
    label: "바.타.디",
    img: VtdImg,
    url: "https://zempie.com/play/tfzzbnkbkzt",
  },
];