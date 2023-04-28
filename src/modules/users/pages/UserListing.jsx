import { Avatar, Box, CardMedia, Stack } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import supabase from "../../../config/supabase";
import Loading from "../../common/components/Loading";

export default function UserListing() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => supabase.from("user").select("*,role (name)"),
    select: (res) => {
      return res.data.map((item) => ({
        ...item,
        role: item.role.name,
      }));
    },
  });

  if (isLoading) return <Loading />;

  console.log(users);
  const gridData = {
    columns: [
      {
        field: "id",
        headerName: "ID",
      },
      {
        field: "full_name",
        headerName: "Full Name",
        renderCell: (params) => {
          const fullName = params.value || "anonymous";
          const avatar = params.row.avatar;
          return (
            <Stack direction="row" alignItems="center" gap={2}>
              <Avatar src={avatar} alt={fullName} />
              <Box>{fullName}</Box>
            </Stack>
          );
        },
        width: 250,
      },
      {
        field: "email",
        headerName: "Email",
        width: 200,
      },
      {
        field: "role",
        headerName: "Role",
      },
      {
        field: "created_at",
        headerName: "Created At",
        width: 200,
      },
    ],
    rows: users,
  };

  return (
    <div>
      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          {...gridData}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </div>
  );
}
