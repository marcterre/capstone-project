import SwipeToDelete from "react-swipe-to-delete-ios";
import BinIcon from "@/public/binIcon.svg";

export default function SwipeToDeleteItem({ children, handleDimensionDelete }) {
  return (
    <SwipeToDelete
      onDelete={handleDimensionDelete}
      height={"auto"}
      deleteThreshold={75}
      showDeleteAction={true}
      transitionDuration={250}
      deleteWidth={75}
      deleteText={<BinIcon width={36} height={36} />}
      rtl={false}
    >
      {children}
    </SwipeToDelete>
  );
}
