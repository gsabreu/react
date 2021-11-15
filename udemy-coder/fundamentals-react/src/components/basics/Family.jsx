import FamilyMember from "./FamilyMember";
import React from "react";

export default (props) => {
    return (
        <div>
            <FamilyMember name="Pedro" {...props}/>
            <FamilyMember name="Ana" {...props}/>
            <FamilyMember name="Gustavo" {...props}/>
        </div>
    );
};
