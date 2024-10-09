import { IoEllipsisVertical, IoAddOutline } from "react-icons/io5"; // Import the plus (without circle) and ellipsis icons

export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <IoAddOutline className="fs-4 text-dark me-2" /> {/* Black plus icon without a circle */}
      <IoEllipsisVertical className="fs-4 text-dark" /> {/* Black ellipsis icon */}
    </div>
  );
}