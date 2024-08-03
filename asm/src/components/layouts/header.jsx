import { Link } from "react-router-dom"
export default function HeaderPage() {
  return (
    <>
      <div className="sidebar">
        <ul>
          <p>Expense Management</p>
          <li> <Link to={``}>Tổng quan </Link> </li>
          <li> <Link to={`income`}>Thu nhập </Link> </li>
          <li> <Link to={`expense`}>Chi tiêu </Link> </li>
          <li> <Link to={`admin`}>Admin </Link> </li>
        </ul>
      </div>
    </>
  )
}