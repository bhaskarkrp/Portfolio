import React from "react";
import { FaTwitter } from "react-icons/fa";
import { generateTweets } from "../../scripts/generateTweetsAndEmail";
import { Snackbar, SnackbarContent, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { ThemeContext } from "../../contexts/ThemeContext";

function GetTweets() {
  const { theme } = React.useContext(ThemeContext);

  const [open, setOpen] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");
  const [isGenerating, setIsGenerating] = React.useState(false);

  async function GetTweets() {
    try {
      setIsGenerating(true);
      await generateTweets();
      setOpen(true);
      setErrMsg("Tweets sent successfully on email!");
    } catch (error) {
      setOpen(true);
      setErrMsg("Error sending tweets and email!");
    } finally {
      setIsGenerating(false);
    }
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  return (
    <div>
      <div>
        <button
          onClick={GetTweets}
          style={{ cursor: "pointer" }}
          disabled={isGenerating}
        >
          <FaTwitter size={20} />
          Generate Tweets
        </button>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <SnackbarContent
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
          style={{
            backgroundColor: theme.primary,
            color: theme.secondary,
            fontFamily: "var(--primaryFont)",
          }}
          message={errMsg}
        />
      </Snackbar>
    </div>
  );
}

export default GetTweets;
