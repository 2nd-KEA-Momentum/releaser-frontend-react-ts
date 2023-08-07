import * as S from "./NavButtons.styled";
import Notification from "@/public/images/Bell.svg";
import Docs from "@/public/images/Docs.svg";
import SearchIcon from "@/public/images/SearchIcon.svg";
import { useRouter } from "next/router";
import MemberInvite from "@/components/MemberInvite";
import { Fragment, useState } from "react";

export default function NavButtons({
  type,
  projectId,
}: {
  type: string;
  projectId?: number;
}) {
  const router = useRouter();
  const [isOpenGroup, setIsOpenGroup] = useState(false);

  const onClickGroup = () => {
    setIsOpenGroup(!isOpenGroup);
  };

  return (
    <S.LinkButtonContainer>
      {type === "releases" && (
        <Fragment>
          <S.IconContainer>
            <SearchIcon
              onClick={() => {
                router.push(`/Search/${projectId}`);
              }}
            />
          </S.IconContainer>
          <S.IconContainer>
            <Docs
              onClick={() => {
                router.push(`/ReleaseReport/${projectId}`);
              }}
            />
          </S.IconContainer>
        </Fragment>
      )}
      <S.IconContainer>
        <Notification />
      </S.IconContainer>

      {type === "releases" && (
        <S.ReleaseButton
          onClick={() => {
            router.push(`/IssueBoard/${projectId}`);
          }}
        >
          Issues
        </S.ReleaseButton>
      )}
      {type === "issues" && <S.IssueButton>Releases</S.IssueButton>}

      <S.GroupButton onClick={onClickGroup}>Group</S.GroupButton>
      {isOpenGroup && (
        <MemberInvite isOpen={isOpenGroup} setIsOpen={setIsOpenGroup} />
      )}
    </S.LinkButtonContainer>
  );
}
