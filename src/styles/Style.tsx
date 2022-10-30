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
    },

    Search: {
        display : "flex",
        alignItems : "center",
        '& .MuiTextField-root': { marginRight : 10 }
    },

    ToolBarRight: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    CardList: {
        marginBottom: 10,
        border: "1.5px solid rgba(0,0,0,0.1)",
        borderRadius: 10,
        padding: 20,
        backgroundColor: "#FFF",
        color: "rgba(0,0,0,0.5)",

        '& .MuiTypography-root': {
            border: "none",
            margin: 0,
            padding: 0,
            background: "transparent",
            width: "100%",
            color: "rgba(0,0,0,0.8)",
            lineHeight: 2,
            outline: "none"
        }

    },

    AddCardList: {
        marginBottom: 10,
        borderRadius: 10,
        padding: 20,
        backgroundColor: "rgba(0,0,0,0.02)",
        color: "rgba(0,0,0,0.5)",
        cursor: "pointer"
    },

    ContainerBoard: {
        flexGrow: 1,
        backgroundColor: 'background.default',
        padding: '0 20px'
    },

    ContainerProfile: {
        flexGrow: 1,
        backgroundColor: 'background.default',
        padding: '20px',
        height: `calc(100vh - 40px)`,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column"
    },

    ProfilePictures: {
        borderRadius: '100%',
        overflow: "hidden",
        width: 200,
        height: 200,
        boxShadow: '1px 1px 10px 2px rgba(0,0,0,0.3)',
        cursor: "pointer",
        margin: 10
    }
})

export default useStyles;