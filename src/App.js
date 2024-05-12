import "./App.css";
import BasicTable from "./components/01-Basic/BasicTable";
import SortingTable from "./components/02-Sorting/SortingTable";
import FilteringTable from "./components/03-GlobalWiseFiltering/FilteringTable";
import ColumnWiseFilteringTable from "./components/04-ColumnWiseFiltering/ColumnWiseFilteringTable";
import ColumnWiseFilteringTableMore from "./components/05-ColumnWiseFilteringMore/ColumnWiseFilteringTableMore";
import ColumnWiseFilteringTableDebounce from "./components/06-ColumnWiseFilteringDebounce/ColumnWiseFilteringTableDebounce";
import PaginationTable from "./components/07-Pagination/PaginationTable";
import RowSelection from "./components/08-SelectingRows/RowSelection";

function App() {
  return (
    <div className="App">
      <RowSelection />
    </div>
  );
}

export default App;
