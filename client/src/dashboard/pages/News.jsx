import { Link } from "react-router-dom";
import NewsContent from "../components/NewsContent";
const News = () => {
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">
          <span className="text-blue-500">News</span> Feed
        </h2>
        <Link
          to="/dashboard/create/news"
          className="text-white px-3 py-[6px] bg-purple-500 hover:bg-purple-600 rounded-md transition duration-200"
        >
          Create News
        </Link>
      </div>
      <NewsContent />
    </div>
  );
};

export default News;
