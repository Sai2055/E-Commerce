export default function SideBarItem({ props }) {
  const { item } = props;
  return (
    <div className="flex p-4 gap-4">
      <div>Icon</div>
      <div> Description</div>
    </div>
  );
}
