import * as S from "./NavButtons.styled";
import Notification from "@/public/images/Bell.svg";
import Docs from "@/public/images/Docs.svg";
import { useRouter } from "next/router";
import MemberInvite from "@/components/MemberInvite";
import { useState } from "react";
import NotificationModal from "@/components/NotificationModal";
import Modal from "antd/es/modal/Modal";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.LinkButtonContainer>
      {type === "releases" && (
        <S.IconContainer>
          <Docs
            onClick={() => {
              router.push(`/ReleaseReport/${projectId}`);
            }}
          />
        </S.IconContainer>
      )}
      <S.IconContainer>
        <Notification onClick={openModal} />
        <S.NotificationModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(91, 91, 91, 0.25)",
            }
          }}
        >
          <NotificationModal />
        </S.NotificationModal>
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
