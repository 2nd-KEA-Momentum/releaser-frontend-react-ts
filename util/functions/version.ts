import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const handleVersion = (
  event: ChangeEvent<HTMLInputElement>,
  setValue: Dispatch<SetStateAction<string>>,
) => {
  const { value } = event.currentTarget;
  if (value.length <= 1) {
    setValue(value);
  }
};

export const checkVersionType = (
  versionString: string,
): { type: string; parent: string; line: string } => {
  const numbers = versionString.split(".").map(Number);
  if (numbers[2] != 0) {
    if (numbers[2] == 1) {
      return {
        type: "patch",
        parent: `${numbers[0]}.${numbers[1]}.0`,
        line: "top",
      };
    } else {
      const patchNum = numbers[2] - 1;
      return {
        type: "patch",
        parent: `${numbers[0]}.${numbers[1]}.${patchNum}`,
        line: "",
      };
    }
  } else if (numbers[1] != 0 && numbers[2] == 0) {
    if (numbers[1] == 1) {
      return { type: "minor", parent: `${numbers[0]}.0.0`, line: "" };
    } else {
      const minorNum = numbers[1] - 1;
      return { type: "minor", parent: `${numbers[0]}.${minorNum}.0`, line: "" };
    }
  } else if (numbers[0] != 0 && numbers[1] == 0 && numbers[2] == 0) {
    if (numbers[0] > 0) {
      const majorNum = numbers[0] - 1;
      return { type: "major", parent: `${majorNum}.0.0`, line: "" };
    } else {
      return { type: "major", parent: "", line: "" };
    }
  }
  return { type: "", parent: "", line: "" };
};
