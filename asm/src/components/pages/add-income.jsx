

export default function AddIncome () {
    return  (
      <div className="income-form">
        <h2>THÊM THU NHẬP</h2>
        <form>
        <div className="form-control">
        <label>Title</label>
        <select>
          <option value="thue">Cho thuê</option>
          <option value="hoantien">Hoàn tiền</option>
          <option value="luong">Lương</option>
          <option value="thuong">Thưởng</option>
          <option value="giamgia">Giảm giá</option>
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
            <button type="submit">Add income</button>
          </div>
        </form>
      </div>
    )
  }
  