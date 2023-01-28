import {
  Button,
  Typography,
  Popover,
  Drawer,
  Divider,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import style from "./list.module.css";
import {
  Switches,
  CustomActionCell,
  CustomPackagePrice,
  CustomDefaultPackageCell,
} from "./CustomCell";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Drawer1 from "./Drawer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

let myData = [];

const columns = [
  {
    field: "packagename",
    headerName: "PACKAGE NAME",
    width: 150,
  },
  {
    field: "description",
    headerName: "DESCRIPTION",
    width: 150,
    headerClassName: "lastcolumnSeparator",
  },
  {
    field: "packagetype",
    headerName: "PACKAGE TYPE",
    width: 150,
  },
  {
    field: "trialdays",
    headerName: "TRIAL DAYS",
    width: 140,
  },
  {
    field: "defaultpackage",
    headerName: "DEFAULT PACKAGE",
    renderCell: () => <CustomDefaultPackageCell />,
    width: 130,
  },
  {
    field: "packageprice",
    headerName: "PACKAGE PRICE",
    renderCell: () => <CustomPackagePrice />,
    width: 170,
  },
  {
    field: "enable/disable",
    headerName: "ENABLE/DISABLE",
    renderCell: () => <Switches />,
    width: 150,
  },
  {
    field: "actions",
    headerName: "ACTIONS",
    width: 160,
    renderCell: () => <CustomActionCell />,
  },
];

const rows = [
  {
    id: 1,
    packagename: "Basic",
    description: "Basics",
    packagetype: "public",
    trialdays: 15,
  },
];

const List = (props) => {
  const [currency, setcurrency] = useState({
    packageCurrency: "",
    intervalType: "",
    price: "",
  });

  const onCurrencyChange = (e) => {
    setcurrency({ ...currency, [e.target.name]: e.target.value });
  };
  const [data, setdata] = useState({
    packagename: "",
    description: "",
    packagetype: "",
    trialdays: "",
  });

  const [dataArray, setDataArray] = useState([]);
  const saveData = (newData) => {
    setDataArray([...dataArray, newData]);
  };
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [open1, setOpen1] = useState(false);

  function handleOpen1() {
    console.log("opennnn");
    setAnchorEl(false);
    setOpen1(true);
  }

  function handleClose1() {
    setOpen1(false);
    setAnchorEl(false);
  }

  const [accept, setaccept] = useState(false);
  const handleChange = (e) => {
    setaccept(e.target.checked);
  };

  const onChange1 = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      data.packagename === "" ||
      data.description === "" ||
      data.packagetype === "" ||
      data.trialdays === ""
    ) {
      alert("field is empty!!");
    } else {
      saveData({ ...data, id: dataArray.length + 1 });
    }
  };
  return (
    <>
      <div className={style["main"]}>
        <span style={{ float: "left" }}>
          <Typography variant="h5">Package List</Typography>
        </span>
        <span style={{ float: "right" }}>
          <Button
            style={{
              color: "#866afb",
              width: "120px",
              height: "50px",
              borderRadius: "5px",
              borderColor: "#866afb",
            }}
            onClick={handleClick}
            variant="outlined"
            disableElevation
            disableRipple
          >
            Actions
            <ExpandMoreIcon />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>
              <div style={{ listStyle: "none", fontSize: "18px" }}>
                <Button onClick={handleOpen1} style={{ marginTop: "10px" }}>
                  Add Package
                </Button>
                <li style={{ marginTop: "10px" }}>Export to PDF</li>
                <li style={{ marginTop: "10px" }}>Export to Excel</li>
              </div>
            </Typography>
          </Popover>
          <Drawer anchor={"right"} open={open1} onClose={handleClose1}>
            <div style={{ margin: "20px" }}>
              <Typography
                variant="h6"
                style={{ width: "600px", fontWeight: "bold" }}
              >
                Add New Package
              </Typography>
              <Divider sx={{ width: "600px", marginTop: "10px" }}></Divider>
              <form saveData={saveData}>
                <div style={{ marginTop: "20px" }}>Package Name</div>
                <TextField
                  sx={{ marginTop: "5px" }}
                  placeholder="Enter Package name"
                  fullWidth
                  variant="outlined"
                  size="small"
                  name="packagename"
                  value={data.packagename}
                  onChange={onChange1}
                ></TextField>
                <div style={{ marginTop: "20px" }}>Description</div>
                <TextField
                  sx={{ marginTop: "5px" }}
                  placeholder="Enter description"
                  multiline
                  rows={4}
                  maxRows={4}
                  fullWidth
                  variant="outlined"
                  size="small"
                  onChange={onChange1}
                  value={data.description}
                  name="description"
                ></TextField>
                <box>
                  <FormControlLabel
                    label="Default Package"
                    control={
                      <Checkbox checked={accept} onChange={handleChange} />
                    }
                  ></FormControlLabel>
                </box>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <span>
                    <label for="package">Package Type</label>
                    <br />
                    <select
                      onChange={onChange1}
                      value={data.packagetype}
                      name="packagetype"
                      className={style["package"]}
                    >
                      <option
                        className={style["options"]}
                        style={{ backgroundColor: "#866afb" }}
                        value=""
                      >
                        Please select...
                      </option>
                      <option
                        className={style["options"]}
                        // onChange={onChange1}
                        value="custom"
                        name="custom"
                      >
                        Custom
                      </option>
                      <option
                        className={style["options"]}
                        // onChange={onChange1}
                        value="public"
                        name="public"
                      >
                        Public
                      </option>
                    </select>
                  </span>
                  <span style={{ marginLeft: "10px" }}>
                    Trial Days
                    <br></br>
                    <input
                      className={style["trial_days"]}
                      type="number"
                      placeholder="Enter Trial days"
                      onChange={onChange1}
                      name="trialdays"
                      value={data.trialdays}
                    />
                  </span>
                </div>
                <form>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "20px",
                    }}
                  >
                    <span>
                      <label for="cars">Package Currency</label>
                      <br />
                      <select
                        onChange={onCurrencyChange}
                        name="select"
                        className={style["last_opt"]}
                      >
                        <option
                          className={style["options"]}
                          style={{ backgroundColor: "#866afb" }}
                          value=""
                        >
                          Please select...
                        </option>
                        <option className={style["options"]} value="Dhiram">
                          Dhiram
                        </option>
                        <option className={style["options"]} value="Euro">
                          Euro
                        </option>
                        <option className={style["options"]} value="US Dollar">
                          US Dollar
                        </option>
                        <option
                          className={style["options"]}
                          value="Indian Ruppes"
                        >
                          Indian Ruppes
                        </option>
                      </select>
                    </span>
                    <span>
                      <label for="cars">Interval Type</label>
                      <br />
                      <select
                        onChange={onCurrencyChange}
                        name="select"
                        style={{ marginLeft: "10px" }}
                        className={style["last_opt"]}
                      >
                        <option
                          className={style["options"]}
                          style={{ backgroundColor: "#866afb" }}
                          value=""
                        >
                          Please select...
                        </option>
                        <option className={style["options"]} value="Yearly">
                          Yearly
                        </option>
                        <option className={style["options"]} value="Monthly">
                          Monthly
                        </option>
                      </select>
                    </span>
                    <span style={{ marginLeft: "10px" }}>
                      Trial Days
                      <br></br>
                      <input
                        onChange={onCurrencyChange}
                        className={style["price"]}
                        type="number"
                        placeholder="Enter Price"
                      />
                    </span>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      className={style["add_currency"]}
                    >
                      Add Currency
                    </Button>
                  </div>
                </form>
                <Divider
                  sx={{
                    borderColor: "#d7d4d4",
                    marginTop: "100px",
                  }}
                />
                <div style={{ float: "right", marginTop: "10px" }}>
                  <Button className={style["close"]} variant="outlined">
                    Close
                  </Button>
                  <Button onClick={handleSubmit} className={style["add"]}>
                    Add
                  </Button>
                </div>
              </form>
            </div>
          </Drawer>
          {/* <Drawer1 handleClose1={handleClose1} handleOpen1={handleOpen1} test={"test"} /> */}
        </span>

        <Box sx={{ height: 400, width: "100%", marginTop: "60px" }}>
          <DataGrid
            rows={dataArray}
            columns={columns}
            disableColumnMenu
            checkboxSelection
            disableSelectionOnClick
            FilterPanel="false"
            hideFooterPagination="true"
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
    </>
  );
};

export default List;
