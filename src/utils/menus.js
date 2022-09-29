import { BellIcon,AddIcon, AttachmentIcon, CopyIcon, ChatIcon } from 
"@chakra-ui/icons";
import {IoNewspaper, IoPeople, } from "react-icons/io5"
import {FiCommand} from "react-icons/fi"

export default  [
    {  
        name: "Blog",
        to: "/blog",
        fontSize:["6", "12", "16", "18"],
        mx:"2",
        // icon: <IoNewspaper/>
    },
    {  
        name: "Projets",
        to: "/projets",
        fontSize:["6", "12", "16", "18"],
        mx:"2",
        // icon: <FiCommand/>
    },
    {  
        name: "Equipe",
        to: "/team",
        fontSize:["6", "12", "16", "18"],
        mx:"2",
        // icon: <IoPeople/>
    },
    {  
        name: "Contacts",
        to: "/contacts",
        fontSize:["6", "12", "16", "18"],
        mx:"2",
        // icon: <ChatIcon/>
    },
]