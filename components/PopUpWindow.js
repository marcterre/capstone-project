import ModalDeleteButton from "./ModalDeleteButton";
import SettingsButton from "./SettingsButton";
import { useState } from "react";

export default function PopUpWindow({ setEntries, currentId, Entry }) {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [popUpSettings, setPopUpSettings] = useState(false);

  return (
    <>
      <SettingsButton
        handlePopUpSettings={() => setPopUpSettings(!popUpSettings)}
        setEntries={setEntries}
        id={currentId}
        toggleModalDeleteButton={() => setShowModalDelete(!showModalDelete)}
        popUpSettings={popUpSettings}
      />
      <ModalDeleteButton
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
        currentId={currentId}
        setEntries={setEntries}
        setPopUpSettings={setPopUpSettings}
        Entry={Entry}
      />
    </>
  );
}
