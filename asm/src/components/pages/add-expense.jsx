export default function AddExpense () {
    return  (
      <div className="expense-form">
        <h2>THÊM CHI TIÊU</h2>
        <form>
        <div className="form-control">
        <label>Title</label>
        <select>
          <option value="an">Ăn uống</option>
          <option value="phongtro">Phòng trọ</option>
          <option value="aoquan">Áo quần</option>
          <option value="giaothong">Giao thông</option>
          <option value="muasam">Mua sắm</option>
          <option value="dulich">Du lịch</option>
          <option value="giaoduc">Giáo dục</option>
          <option value="suckhoe">Sức khỏe</option>
          <option value="giaitri">Giải trí</option>
          <option value="khac">Khác</option>
        </select>
      </div>
          <div className="form-control">
            <label>Giá trị</label>
            <input type="number" min="1000" step="1000" />
          </div>
          <div className="form-control">
            <label>Ngày</label>
            <input type="date" />
          </div>
          <div className="form-actions">
            <button type="submit">Add Expense</button>
          </div>
        </form>
      </div>
    )
  }
  