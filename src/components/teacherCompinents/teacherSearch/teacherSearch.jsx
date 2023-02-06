import "./teacherSearch.scss";

const teacherSearch = () => {
  return (
    <div className="teachers-search">
      <input type="text" placeholder="Search" />
      <button className="teachersSearchBtn">Search</button>
    </div>
  );
};

export default teacherSearch;
