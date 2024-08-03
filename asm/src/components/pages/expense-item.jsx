import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import AddHomeIcon from '@mui/icons-material/AddHome'; export default function ExpenseItem() {
  return (
    <>
      <div className="ExpenseItem">
        <div className="left">
          <AddHomeIcon />
          <p>Phòng trọ</p>
        </div>
        <div className="right">
          <p> - 3.000.000 VNĐ</p>
          <p>13/07/2024</p>
        </div>
        <div className="actionIcome">
          <Button key="delete" color="error"><HighlightOffIcon /></Button>
          <Button key="edit" color="secondary" ><EditSharpIcon/></Button>
        </div>
      </div>

    </>
  )
}
