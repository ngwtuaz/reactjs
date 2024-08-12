function Category({ name, change }) {
  return (
    <button
      onClick={() => change(name)}
      className="bg-[#051c33] w-max font-bold text-white px-3 py-1 rounded"
    >
      {name}
    </button>
  );
}

export default Category;
