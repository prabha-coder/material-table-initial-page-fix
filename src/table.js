import React, { useEffect } from 'react'
import MaterialTable from "material-table";

export default function Table(props) {

    return (<div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "Name", field: "name" },
            { title: "Email", field: "email" },
            { title: "Message", field: "body" }
          ]}
          data={props.data}
          options={{
            initialPage: props.initialPage
           }}
          title="Demo Title"
        />
      </div>);

}
