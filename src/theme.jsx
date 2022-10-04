import { extendTheme } from "@chakra-ui/react"

 const theme = {
     config: {
        initialColor: "dark",
        useSystemColorMode: true,
     },
     styles: {
         global: {
            body: {
              
                margin: 0,
                "font-family":" -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
                "-webkit-font-smoothing": "antialiased",
                "-moz-osx-font-smoothing": "grayscale",
                lineHeight: 'tall'
              },
              
              code : {
                "font-family" : 
                "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
              },
              a : {
                 
              }
        
              
              
         }
     },
     colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      50: '#f7fafc',
      // ...
      900: '#171923',
    },
    // ...
  },
 }



export default extendTheme(theme);