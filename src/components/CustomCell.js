import React from "react";
import { Switch, Button } from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import style from "./list.module.css";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

export const CustomActionCell = () => {
  return (
    <div className={style["edit_delete"]}>
      <span className={style["email"]}>
        <span className={style["email_icon"]}>
          <BorderColorOutlinedIcon />
        </span>
      </span>

      <span className={style["email"]}>
        <span className={style["email_icon"]}>
          <DeleteOutlineOutlinedIcon sx={{ color: "#ea4335" }} />
        </span>
      </span>
    </div>
  );
};

export const Switches = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

export const CustomPackagePrice = () => {
    return (
      <Button
        variant="outlined"
        sx={{
          height: "40px",
          width: "150px",
          color: "#866afb",
          borderColor: "#866afb",
        }}
      >
        View Price
      </Button>
    );
  };

  export const CustomDefaultPackageCell = () => {
    return <CheckBoxOutlinedIcon sx={{ color: "green" }} />;
  };
  