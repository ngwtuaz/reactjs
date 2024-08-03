import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import IncomeItem from './income-item';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';

export default function Income() {
  return (
    <>
      <div className="Income">
        <div className="cardIncome">
          <Button className="buttonPrev"> <ArrowBackIosIcon /> </Button>
          <p> Thu nhập tháng 7: 900.000.000 VNĐ</p>
          <Button> <ArrowForwardIosSharpIcon /> </Button>
        </div>
        <div className="detailIncome">
          <div className='totalDeal'>
            <p>Các mục thu nhập: 7</p>
            <Button className="btnAddIncome"> <a href={`/add-income`}><AddCircleOutlineSharpIcon /> Thêm Thu Nhập</a></Button>

          </div>
          <IncomeItem />
          <IncomeItem />
          <IncomeItem />
          <IncomeItem />
          <IncomeItem />
        </div>
      </div>
    </>
  )
}
