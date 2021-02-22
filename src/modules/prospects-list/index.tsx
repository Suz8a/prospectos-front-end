import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getPropspects } from "../../api";
import TableInfo from "../../components/table-info";
import Card from "../../elements/card";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CancelIcon from "@material-ui/icons/Cancel";
import IconText from "../../components/icon-text";

function ProspectsList() {
  const [prospects, setProspects] = useState([]);
  const [loadingTable, setLoadingTable] = useState(false);
  const statusesTag = {
    autorizado: (
      <IconText
        icon={<CheckCircleIcon fontSize="small" color="primary" />}
        text="autorizado"
        color="rgb(63, 81, 181)"
      />
    ),
    enviado: (
      <IconText
        icon={<CheckCircleOutlineIcon fontSize="small" />}
        text="enviado"
      />
    ),
    rechazado: (
      <IconText
        icon={<CancelIcon fontSize="small" color="disabled" />}
        text="rechazado"
        color="#bdbdbd"
      />
    ),
  };

  const columns = [
    { id: "nombre", label: "Nombre" },
    { id: "estatus", label: "Estatus" },
  ];

  var rows = prospects.map(
    ({ nombre, primerApellido, segundoApellido, estatus }) => ({
      nombre: `${nombre} ${primerApellido} ${
        segundoApellido ? segundoApellido : ""
      }`,
      estatus: statusesTag[estatus],
    })
  );

  useEffect(() => {
    (async () => {
      setLoadingTable(true);
      setProspects(await getPropspects());
      setLoadingTable(false);
    })();
  }, [setProspects, setLoadingTable]);

  return (
    <Card width="80%" height="80%" padding="0px" borderRadius="5px">
      <TableInfo columns={columns} rows={rows} loading={loadingTable} />
    </Card>
  );
}

export default ProspectsList;
