import "./widgetSmall.css";
import { Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { newJoinMembers } from "../../data/newJoinMembers";

export default function WidgetSmall() {  
  const columns = [
    { field: "name",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
      return (
        <div className="widgetSmallImg">
          <img className="widgetSmallImg" src={params.row.avatar} alt="" />
          {params.row.name}
        </div>
      );
    },
    },
    { field: "title", headerName: "Title", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>            
            <Link to={"/user/" + params.row.id}>                        
              <button className="widgetSmallButton">
                <Visibility className="widgetSmallIcon" />
                Display
            </button>
          </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Join Members</span>      
      <DataGrid
        rows={newJoinMembers}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}