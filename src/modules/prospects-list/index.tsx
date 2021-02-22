import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getPropspects } from "../../api";
import TableInfo from "../../components/table-info";
import Card from "../../elements/card";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function ProspectsList() {
  const [prospects, setProspects] = useState([]);
  const statusesTag = {
    enviado: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CheckCircleIcon color="primary" fontSize="small" />
        <div style={{ color: "rgb(63, 81, 181)" }}>enviado</div>
      </div>
    ),
  };

  const columns = [
    { id: "nombre", label: "Nombre" },
    { id: "estatus", label: "Estatus" },
  ];
  var rows = prospects.map(
    ({ nombre, primerApellido, segundoApellido, estatus }) => ({
      nombre: `${nombre} ${primerApellido} ${segundoApellido}`,
      estatus: statusesTag[estatus],
    })
  );

  useEffect(() => {
    (async () => {
      setProspects(await getPropspects());
    })();
  }, [setProspects]);

  return (
    <Card width="80%" height="80%" padding="0px" borderRadius="5px">
      <TableInfo columns={columns} rows={rows} />
    </Card>
  );
}

export default ProspectsList;
