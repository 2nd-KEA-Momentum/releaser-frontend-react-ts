import { TagType } from "@/types/issue";
export const TAG_COLOR = {
  NEW: "#81A0D3",
  DEPRECATED: "#ED726F",
  CHANGED: "#F8C158",
  FEATURE: "#438D7F",
  FIXED: "#B4A9E1",
};

export const TAG_LIST: TagType[] = [
  "NEW",
  "DEPRECATED",
  "CHANGED",
  "FEATURE",
  "FIXED",
];

export const TYPE_LIST = [
  { eng: "issue", kor: "이슈" },
  { eng: "release", kor: "릴리즈" },
];

export const SEARCH_TAG_LIST = [
  { eng: "TAG", kor: "태그" },
  { eng: "WRITER", kor: "작성자" },
  { eng: "VERSION", kor: "버전" },
  { eng: "DATE", kor: "날짜" },
  { eng: "TITLE", kor: "제목" },
];

export const SEARCH_TAG_COLOR = {
  TAG: TAG_COLOR,
  WRITER: "#98FF98",
  TITLE: "#FFCCCB",
  DATE: "#87CEEB",
  VERSION: "#C8A2C8",
};
