import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles({

    Center: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh"
    },

    Users: {
        '& .MuiTextField-root ,& .MuiButton-root':
            { mt: 1, width: '100%', height: 60 },
        padding: 2
    },

    Logo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: 115
    }

})

export default useStyles;