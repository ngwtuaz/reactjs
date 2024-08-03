import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ExpenseItem from './expense-item';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
export default function Expense() {
  return (
    <>
      <div className="Expense">
        <div className="cardExpense">
          <Button className="buttonPrev"> <ArrowBackIosIcon /> </Button>
          <p> Chi tiêu tháng 7: 900.000.000 VNĐ</p>
          <Button> <ArrowForwardIosSharpIcon /> </Button>
        </div>
        <div className="detailExpense">
          <div className='totalDeal'>
            <p>Các mục chi tiêu: 7</p>
          <Button className="btnAddExpense"> <a href={`/add-expense`}><AddCircleOutlineSharpIcon /> Thêm Chi tiêu</a></Button>

          </div>
          <ExpenseItem />
          <ExpenseItem />
          <ExpenseItem />
          <ExpenseItem />
          <ExpenseItem />
        </div>
      </div>
    </>
  )
}
