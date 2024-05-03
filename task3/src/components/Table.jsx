import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";

export default function Table() {
  const [search, setSearch] = React.useState("");
  const [selectedRowIndex, setSelectedRowIndex] = React.useState([]);
  const [tableData, setTableData] = React.useState([]);
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 10,
    page: 0,
  });
  const columns = [
    { field: "id", headerName: "ID", type: "number" },
    { field: "albumId", headerName: "Album ID", type: "number" },
    { field: "title", headerName: "Title" },
    {
      field: "thumbnailUrl",
      headerName: "Image",
    },
  ];

  const { isPending, error, data } = useQuery({
    queryKey: ["tableData", paginationModel?.page],
    queryFn: () =>
      fetch(
        `https://jsonplaceholder.typicode.com/photos?page=${
          paginationModel?.page + 1
        }&_limit=10`
      ).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const handleDelete = () => {
    let item = [...data];
    let arr = [];

    for (let index = 0; index < selectedRowIndex.length; index++) {
      const element1 = selectedRowIndex[index];

      for (let index2 = 0; index2 < item.length; index2++) {
        const element2 = item[index2];

        if (Number(element1) === Number(element2?.id)) {
          continue;
        }
        arr.push(element2);
      }
    }

    setTableData(arr);
  };

  React.useEffect(() => {
    if (data) {
      setTableData(data);
    }
  }, [data]);

  return (
    <div>
      <div className="header">
        <button
          className="deleteButton"
          onClick={() => {
            handleDelete();
          }}
        >
          <i className="ri-delete-bin-6-line"></i>
          <span>Delete</span>
        </button>
        <div className="searchBox">
          <i className="ri-search-line searchIcon"></i>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={tableData?.filter((item) => item?.title?.includes(search))}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: paginationModel,
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(item) => {
            setSelectedRowIndex(item);
          }}
          onPaginationModelChange={(data) => {
            setPaginationModel(data);
          }}
        />
      </div>
    </div>
  );
}
