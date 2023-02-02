import SwipeToDelete from "react-swipe-to-delete-ios";

export default function SwipeToDeleteItem({ children, handleDimensionDelete }) {
  return (
    <SwipeToDelete
      onDelete={handleDimensionDelete} // required
      height={100} // required
      // optional
      transitionDuration={250} // default
      deleteWidth={75} // default
      deleteText="Delete" // default
      rtl={false} // default
    >
      {children}
    </SwipeToDelete>
  );
}
