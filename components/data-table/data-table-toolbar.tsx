import { Table } from "@tanstack/react-table";
import { Input } from "../ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center py-4">
      <Input
        placeholder="Filter emails ... "
        value={table.getColumn("email")?.getFilterValue() as string}
        onChange={(event) =>
          table.getColumn("email")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />

      <DataTableViewOptions table={table} />
    </div>
  );
}
