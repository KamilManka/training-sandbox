import { Paper, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import {withdraw, deposit} from "./redux/moneySlice"
import { useNotificationContext } from "./contexts/NotificationContext";

const MoneyActionSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 10,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    color: "#fce8e8",
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#eaf7eb",
      "& + .MuiSwitch-track": {
        opacity: 1,
        //   backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#29b136',
        backgroundColor: "#29b136",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
    "&.Mui-checked": {
      color: "#fff",
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    //   backgroundColor:
    //     theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : '#De1717',
    backgroundColor: "#De1717",
    boxSizing: "border-box",
  },
}));

export const Money = () => {
const dispatch = useDispatch();
const {setNotificationStatus, setMessage} = useNotificationContext();

let amount = 0;

const action = (submit) => {
    amount = submit.amount;
    if (submit.checked.length === 0) {
        console.log("withdraw")
        dispatch(withdraw(amount))
        setNotificationStatus("success")
            setMessage("Money withdrawn!")
    } else {
        console.log("deposit")
        dispatch(deposit(amount))
        setNotificationStatus("success")
          setMessage("Money deposited!");
    }

  }

  const formik = useFormik({
    initialValues: {
        amount: "",
        checked: []
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    //   console.log(checked);
      action(values);
        
      }
    ,
    
  });


  return (
    <>
      <h2>Money</h2>
      <Paper className="money-container">
        <form onSubmit={formik.handleSubmit} className="money-form">
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Withdraw</Typography>
            <MoneyActionSwitch
              inputProps={{ "aria-label": "ant design" }}
              onChange={formik.handleChange}
              name="checked"
            />
            <Typography>Deposit</Typography>
          </Stack>
          <TextField type="number" name="amount" onChange={formik.handleChange} />
          <Button type="submit">Submit</Button>
        </form>
      </Paper>
    </>
  );
};
