import { FunctionComponent, useState } from "react";
import { Card, Grid, Chip, Divider, Typography, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";
import { GetTaskComments_task_comments } from "../../src/graphql/types/GetTaskComments";
import Skeleton from "@material-ui/lab/Skeleton";
import RoleIcon from "../RoleIcon/RoleIcon";
import DateHelper from "../../utils/dateHelper";
import DeleteIcon from "@material-ui/icons/Delete";
import { useMutation } from "react-apollo";
import { DeleteComment, DeleteCommentVariables } from "../../src/graphql/types/DeleteComment";
import { removeComment } from "../../src/graphql/mutations";
import { useTranslation } from "react-i18next";
import locKeys from "../../src/Locales/LocalizationKeys";

interface IProps {
    comment?: GetTaskComments_task_comments;
    onRemove?: () => void;
}

const TaskComment: FunctionComponent<IProps> = ({ comment = null, onRemove = null }) => {

    const dateHelper = new DateHelper();

    const [open, setOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [rem] = useMutation<DeleteComment>(removeComment);

    if (!comment) {
        return <>
            <Card>
                <Skeleton variant="text" />
            </Card>
        </>;
    }

    const { author, created_at, updated_at, message, id } = comment;
    const { fullName, role } = author;

    const { t } = useTranslation();

    const removeComm = async () => {

        const vars: DeleteCommentVariables = { id };

        const res = await rem({ variables: vars });

        if (res && onRemove) {
            onRemove();
        }

        handleClose();
    };

    return <>
        <Card style={{ padding: "1rem" }}>
            <Grid container direction="row" spacing={4} alignItems="center">
                <Grid item>
                    <Grid container direction="row" spacing={1}>
                        <Grid item>
                            <Grid container direction="column" alignContent="center"
                                justify="center" alignItems="center" spacing={1}>
                                <Grid item>
                                    <Chip
                                        avatar={<RoleIcon role={role}
                                            showText={false}
                                            iconStyle={{ marginLeft: "5px" }} />}
                                        label={fullName}
                                        variant="outlined"
                                        size="medium"
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography variant="caption">
                                        {dateHelper.getFormattedDate(updated_at, "fromNow")}
                                    </Typography>
                                    <Divider style={{ marginTop: "5px" }} />
                                </Grid>
                                <Grid item>
                                    {
                                        <Tooltip title={t(locKeys.task.deleteComment)}>
                                            <IconButton
                                                aria-label="delete"
                                                size="small"
                                                onClick={handleClickOpen} >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Divider orientation="vertical" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="body2">
                        {message}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
        <Divider style={{ margin: "1rem" }} />
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{t(locKeys.task.deleteCommentDialog)}</DialogTitle>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    {t(locKeys.task.cancel)}
          </Button>
                <Button onClick={removeComm} color="primary" autoFocus>
                    {t(locKeys.task.accept)}
          </Button>
            </DialogActions>
        </Dialog>
    </>;
};

export default TaskComment;
