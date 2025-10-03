import { Input } from "../ui/input";
import { Label } from "../ui/label";

const AddForm = () => {
  return (
    <div className="grid flex-1 auto-rows-min gap-6 px-4">
      <div className="grid gap-3">
        <Label htmlFor="sheet-demo-name">Name</Label>
        <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="sheet-demo-username">Username</Label>
        <Input id="sheet-demo-username" defaultValue="@peduarte" />
      </div>
    </div>
  );
};

export default AddForm;
