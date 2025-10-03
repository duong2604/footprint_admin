import AddAction from "./shared/add-action";
import { BulkAction } from "./shared/bulk-action";
import DeleteAction from "./shared/delete-action";
import { ExportItem } from "./shared/export-item";
import ImportItem from "./shared/import-item";

interface FunctionNavProps {
  title: string;
  btn?: {
    addAction: string;
  };
}

export default function FunctionNav({ title, ...props }: FunctionNavProps) {
  return (
    <div className="flex justify-between  items-center p-5">
      <span>{title}</span>
      <div className="flex justify-center items-center gap-5">
        <ExportItem />
        <ImportItem />
        <BulkAction />
        <DeleteAction />
        <AddAction />
      </div>
    </div>
  );
}
