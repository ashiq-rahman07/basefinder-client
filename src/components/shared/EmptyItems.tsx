interface EmptyItemsProps {
  title: string;
}

const EmptyItems: React.FC<EmptyItemsProps> = ({ title }) => {
  return (
    <p className="my-2 text-red-700">
      {' '}
      You have not created any {title}, Add {title}{' '}
    </p>
  );
};

export default EmptyItems;
