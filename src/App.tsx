import React, { ChangeEvent, useState } from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      color: "white",
      height: theme.spacing(43.75),
      width: theme.spacing(37.5),
      padding: theme.spacing(2, 1),
    },
  });
});

function App() {
  const classes = useStyles();
  const [url, setUrl] = useState<String>("");
  const [pageId, setPageId] = useState<String>("");

  const handleButtonOnClick = () => {
    window.open(`${url}${pageId}`);
    return;
  };

  const handleURLOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUrl(event.currentTarget.value);
  };

  const handlePageIdOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPageId(event.currentTarget.value);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="URL"
            variant="outlined"
            size="small"
            onChange={handleURLOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="ID"
            variant="outlined"
            size="small"
            onChange={handlePageIdOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" size="small" onClick={handleButtonOnClick}>
            Open
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
