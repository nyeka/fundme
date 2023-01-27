import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SendIcon from "@mui/icons-material/Send";
import Fund from "../utils/fund";

interface IProps {
  open: boolean;
  close: any;
}

export default function FormDialog({ open, close }: IProps) {
  const [ethamount, setEthamount] = React.useState<any>(0.1);

  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#1a2038",
            color: "white",
          },
          "& .MiuInputBase-root": {
            color: "white",
          },
          "& .MuiInputBase-input": {
            color: "white !important",
          },
        }}
      >
        <DialogTitle>fund eth to this contract</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              color: "white",
            }}
          >
            contract using solidity language and deployed on the ethereum
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Number of ETH more than 0.1"
            type="number"
            value={ethamount}
            onChange={(e) => setEthamount(e.target.value)}
            fullWidth
            variant="standard"
            required={true}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => Fund({ amount: ethamount as number })}
          >
            Send
          </Button>
          )
        </DialogActions>
      </Dialog>
    </div>
  );
}
