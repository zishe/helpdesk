import { createMuiTheme } from '@material-ui/core/styles';



const rawTheme = createMuiTheme({
//   palette: {
//     primary: {
//         main: "#4c4c4c",
//         light: "#ffffff",
//         dark: "#000000",
//     },
//     secondary: {
//         main: "#40a351",
//     },
//     type: "dark"
//   },

});

// const temporaryTheme = createMuiTheme({
//     ...rawTheme,
//     palette: {
//         primary: {
//             main: "#4c4c4c",
//             light: "#ffffff",
//             dark: "#000000",
//         },
//         secondary: {
//             main: "#40a351",
//         },
//         type: "dark"
//       },
//   overrides: {
//     MuiPaper:
//     {
//       root:
//       {
//         borderRadius: "0px !important",
//       }
//     },
//   },
//   typography: {
//     useNextVariants: true,
//     h1: {
//       [rawTheme.breakpoints.down('sm')]: {
//         fontSize: "45px"
//       },

//       textAlign: "center",
//       textTransform: "uppercase",
//       fontSize: "80px",
//       padding: "5px",

//     },
//     h2: {
//       [rawTheme.breakpoints.down('sm')]: {
//         fontSize: "25px"
//       },
//       textAlign: "center",
//       fontSize: "50px",
//       padding: "20px",
//     }
//   },
// })

const lightTheme = createMuiTheme({
    palette: {
        // DELTA GREEN
        primary: {
            main: "#40a351",
            light: "#51c965",
            dark: "#3b8f49",
        },
        // GRAY
        secondary: {
            main: "#4c4c4c",
            light: "#5e5e5e",
            dark: "#2b2b2b",
        },
        background: {
            default: "#ffffff",
            paper: "#cacaca",
        },
        text: {
            // Normal texts
            primary: "#000000",
        }
    },
    typography: {
        useNextVariants: true,
        h1: {
            [rawTheme.breakpoints.down('sm')]: {
                fontSize: "45px", 
            },
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "80px",
            padding: "5px",        
        },
        h2: {
            [rawTheme.breakpoints.down('sm')]: {
                fontSize: "25px"
            },
            textAlign: "center",
            fontSize: "50px",
            padding: "20px",
            color: "#000000",
        }
    },
})

const darkTheme = createMuiTheme({
    ...rawTheme,
    palette: {
        // GRAY
        primary: {
            main: "#4c4c4c",
            light: "#5e5e5e",
            dark: "#2b2b2b",
            contrastText: "#ffffff",
        },
        // DELTA GREEN
        secondary: {
            main: "#40a351",
            light: "#51c965",
            dark: "#3b8f49",
            contrastText: "#ffffff",
        },
        background: {
            default: "#000000",
            paper: "#4c4c4c",
        },
        text: {
            // Normal texts
            primary: "#ffffff",
        },
    },
    typography: {
        useNextVariants: true,
        h1: {
            [rawTheme.breakpoints.down('sm')]: {
                fontSize: "45px", 
            },
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: "80px",
            padding: "5px",        
        },
        h2: {
            [rawTheme.breakpoints.down('sm')]: {
                fontSize: "25px"
            },
            textAlign: "center",
            fontSize: "50px",
            padding: "20px",
            color: "#ffffff",
        }
    },
})

export default {lightTheme, darkTheme};