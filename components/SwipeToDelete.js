import SwipeToDelete from "react-swipe-to-delete-ios";
import SvgIcon from "./SvgIcon";

export default function SwipeToDeleteItem({
  children,
  handleMateriallistDelete,
}) {
  return (
    <SwipeToDelete
      onDelete={handleMateriallistDelete}
      height={"auto"}
      deleteThreshold={75}
      showDeleteAction={true}
      transitionDuration={250}
      deleteWidth={75}
      deleteText={<SvgIcon variant="bin" width={36} height={36} />}
      rtl={false}
    >
      {children}
    </SwipeToDelete>
  );
}
