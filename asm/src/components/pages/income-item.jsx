import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import AddHomeIcon from '@mui/icons-material/AddHome'; export default function IncomeItem() {
  return (
    <>
      <div className="IncomeItem">
        <div className="left">
          <AddHomeIcon />
          <p>Cho thuê</p>
        </div>
        <div className="right">
          <p> + 300.000.000 VNĐ</p>
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
